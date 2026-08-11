/**
 * @file app/api/contact/route.ts
 * @description Public API handler for the customer contact form.
 *   POST – Validates the submitted form data, saves the inquiry to the
 *          Google Sheet (Inquiries tab), sends an admin notification email,
 *          and auto-replies to the customer confirming receipt.
 *
 *   Spam protection: honeypot field (hidden input) — bots fill it in and
 *   are silently rejected by Zod validation (max length 0).
 *
 *   No authentication required (public endpoint).
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import { NextResponse } from "next/server"
import { appendInquiry } from "@/lib/sheets"
import { z } from "zod"
import nodemailer from "nodemailer"
import { rateLimit } from "@/lib/rate-limit"
import { stripEmoji } from "@/lib/sanitize"

const schema = z.object({
  name:     z.string().min(1, "Name is required").transform(stripEmoji),
  email:    z.string().email("Invalid email"),
  subject:  z.string().min(1, "Subject is required").transform(stripEmoji),
  message:  z.string().min(10, "Message must be at least 10 characters").transform(stripEmoji),
  honeypot: z.string().max(0, "Bot detected"),
  recaptchaToken: z.string().min(1, "reCAPTCHA verification failed"),
})

export async function POST(request: Request) {
  // Rate limit: max 5 contact submissions per IP per minute
  const { success, resetAt } = rateLimit(request, { key: "contact", limit: 5, windowMs: 60_000 })
  if (!success) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a moment and try again." },
      {
        status: 429,
        headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) },
      }
    )
  }

  try {
    const body = await request.json()
    const parsed = schema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 })
    }

    const { name, email, subject, message, recaptchaToken } = parsed.data

    // Verify reCAPTCHA token
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    })
    const recaptchaData = await recaptchaRes.json()
    
    if (!recaptchaData.success) {
      console.error("reCAPTCHA failed:", recaptchaData)
      return NextResponse.json({ error: "reCAPTCHA verification failed. Please try again." }, { status: 400 })
    }

    // Escape all user-supplied strings before HTML template interpolation.
    // Newlines are converted to <br> AFTER escaping so the < > chars in
    // the replacement tag are never themselves escaped.
    function escapeHtml(str: string): string {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
    }
    const eName    = escapeHtml(name)
    const eEmail   = escapeHtml(email)
    const eSubject = escapeHtml(subject)
    const eMessage = escapeHtml(message).replace(/\n/g, "<br>")

    // 1. Save to Google Sheets
    await appendInquiry({ name, email, subject, message })

    // 2. Send email to admin
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    })

    const fromName = process.env.EMAIL_FROM_NAME ?? "Client Store"

    await transporter.sendMail({
      from: `"${fromName} Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `📬 New Inquiry: ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#131310;color:#e5e2db;padding:32px;border:1px solid #2a2a24;border-radius:16px;">
          <h2 style="margin:0 0 24px;color:#fcf9f2;">New Contact Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;color:#737874;width:100px;">Name</td><td style="padding:10px 0;font-weight:700;color:#fcf9f2;">${eName}</td></tr>
            <tr><td style="padding:10px 0;color:#737874;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#4ae183;text-decoration:none;">${eEmail}</a></td></tr>
            <tr><td style="padding:10px 0;color:#737874;">Subject</td><td style="padding:10px 0;color:#fcf9f2;">${eSubject}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#1c1c18;border-radius:10px;line-height:1.7;border:1px solid #2a2a24;">
            ${eMessage}
          </div>
          <p style="margin-top:16px;font-size:12px;color:#737874;">Submitted via Contact Form — SHA Store</p>
        </div>
      `,
    })

    // 3. Send auto-reply to customer
    await transporter.sendMail({
      from: `"${fromName}" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your message — ${fromName}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#131310;color:#e5e2db;padding:32px;border:1px solid #2a2a24;border-radius:16px;">
          <h2 style="margin:0 0 16px;color:#fcf9f2;">Thanks for reaching out, ${eName}!</h2>
          <p style="color:#737874;line-height:1.7;">We've received your message and will get back to you within 1–2 business days.</p>
          <div style="margin:24px 0;padding:16px;background:#1c1c18;border:1px solid #2a2a24;border-radius:10px;">
            <div style="color:#4ae183;font-size:12px;margin-bottom:6px;font-weight:700;letter-spacing:0.05em;">YOUR MESSAGE</div>
            <div style="line-height:1.7;">${eMessage}</div>
          </div>
          <p style="color:#737874;font-size:12px;">— ${fromName} Team</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json({ error: "Failed to submit inquiry. Please try again." }, { status: 500 })
  }
}
