/**
 * @file app/api/quote/route.ts
 * @description Public API handler for the Get a Quote form.
 *   POST – Validates submitted quote data, saves to the Google Sheet (Quotes tab),
 *          sends an admin notification email, and auto-replies to the customer.
 *
 *   Spam protection: honeypot field silently rejects bots.
 *   No authentication required (public endpoint).
 *
 * @owner Heet-P
 * @lastModified May 25, 2026
 */

import { NextResponse } from "next/server"
import { appendQuote } from "@/lib/sheets"
import { z } from "zod"
import nodemailer from "nodemailer"
import { rateLimit } from "@/lib/rate-limit"
import { stripEmoji } from "@/lib/sanitize"

const schema = z.object({
  name:        z.string().min(1, "Name is required").transform(stripEmoji),
  email:       z.string().email("Invalid email"),
  phone:       z.string().default("").transform(stripEmoji),
  company:     z.string().default("").transform(stripEmoji),
  application: z.string().default("").transform(stripEmoji),
  quantity:    z.string().default("").transform(stripEmoji),
  description: z.string().min(10, "Please describe your project in at least 10 characters").transform(stripEmoji),
  honeypot:    z.string().max(0, "Bot detected"),
})

export async function POST(request: Request) {
  const { success, resetAt } = rateLimit(request, { key: "quote", limit: 5, windowMs: 60_000 })
  if (!success) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a moment and try again." },
      { status: 429, headers: { "Retry-After": String(Math.ceil((resetAt - Date.now()) / 1000)) } }
    )
  }

  try {
    const formData = await request.formData()

    const rawData = {
      name:        formData.get("name")        ?? "",
      email:       formData.get("email")       ?? "",
      phone:       formData.get("phone")       ?? "",
      company:     formData.get("company")     ?? "",
      application: formData.get("application") ?? "",
      quantity:    formData.get("quantity")    ?? "",
      description: formData.get("description") ?? "",
      honeypot:    formData.get("honeypot")    ?? "",
    }

    const parsed = schema.safeParse(rawData)
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 })
    }

    const { name, email, phone, company, application, quantity, description } = parsed.data

    // Build nodemailer attachments from uploaded files
    const fileEntries = formData.getAll("attachments")
    const uploadedFiles = fileEntries.filter((f): f is File => f instanceof File && f.size > 0)
    const attachments = await Promise.all(
      uploadedFiles.map(async (f) => ({
        filename: f.name,
        content: Buffer.from(await f.arrayBuffer()),
        contentType: f.type || "application/octet-stream",
      }))
    )
    const hasAttachment = attachments.length > 0 ? "Yes" : "No"

    function escapeHtml(str: string): string {
      return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
    }

    const eName        = escapeHtml(name)
    const eEmail       = escapeHtml(email)
    const ePhone       = escapeHtml(phone)
    const eCompany     = escapeHtml(company)
    const eApplication = escapeHtml(application)
    const eQuantity    = escapeHtml(quantity)
    const eDescription = escapeHtml(description).replace(/\n/g, "<br>")

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
    })

    const fromName = process.env.EMAIL_FROM_NAME ?? "Superior Harnessing"

    const adminEmailHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#131310;color:#e5e2db;padding:32px;border:1px solid #2a2a24;border-radius:16px;">
        <h2 style="margin:0 0 24px;color:#fcf9f2;">New Quote Request</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:10px 0;color:#737874;width:120px;">Name</td><td style="padding:10px 0;font-weight:700;color:#fcf9f2;">${eName}</td></tr>
          <tr><td style="padding:10px 0;color:#737874;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#4ae183;text-decoration:none;">${eEmail}</a></td></tr>
          ${ePhone       ? `<tr><td style="padding:10px 0;color:#737874;">Phone</td><td style="padding:10px 0;color:#fcf9f2;">${ePhone}</td></tr>` : ""}
          ${eCompany     ? `<tr><td style="padding:10px 0;color:#737874;">Company</td><td style="padding:10px 0;color:#fcf9f2;">${eCompany}</td></tr>` : ""}
          ${eApplication ? `<tr><td style="padding:10px 0;color:#737874;">Application</td><td style="padding:10px 0;color:#fcf9f2;">${eApplication}</td></tr>` : ""}
          ${eQuantity    ? `<tr><td style="padding:10px 0;color:#737874;">Quantity</td><td style="padding:10px 0;color:#fcf9f2;">${eQuantity}</td></tr>` : ""}
        </table>
        <div style="margin-top:20px;padding:16px;background:#1c1c18;border-radius:10px;line-height:1.7;border:1px solid #2a2a24;">
          <div style="color:#4ae183;font-size:12px;margin-bottom:6px;font-weight:700;letter-spacing:0.05em;">PROJECT DESCRIPTION</div>
          ${eDescription}
        </div>
        ${attachments.length > 0 ? `
        <div style="margin-top:12px;padding:14px 16px;background:#1c1c18;border-radius:10px;border:1px solid #2a2a24;">
          <div style="color:#4ae183;font-size:12px;margin-bottom:6px;font-weight:700;letter-spacing:0.05em;">ATTACHMENTS (${attachments.length})</div>
          <div style="color:#e5e2db;font-size:13px;line-height:1.7;">${uploadedFiles.map(f => f.name).join("<br>")}</div>
        </div>` : ""}
        <p style="margin-top:16px;font-size:12px;color:#737874;">Submitted via Quote Request Form</p>
      </div>
    `

    const userEmailHtml = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#131310;color:#e5e2db;padding:32px;border:1px solid #2a2a24;border-radius:16px;">
        <h2 style="margin:0 0 16px;color:#fcf9f2;">Thanks for your request, ${eName}!</h2>
        <p style="color:#737874;line-height:1.7;">We've received your project details and will review them shortly. Our team will get back to you with a competitive quote within 1–2 business days.</p>
        <div style="margin:24px 0;padding:16px;background:#1c1c18;border:1px solid #2a2a24;border-radius:10px;">
          <div style="color:#4ae183;font-size:12px;margin-bottom:6px;font-weight:700;letter-spacing:0.05em;">YOUR PROJECT DESCRIPTION</div>
          <div style="line-height:1.7;">${eDescription}</div>
        </div>
        <p style="color:#737874;font-size:12px;">— ${fromName} Team</p>
      </div>
    `

    // 1. Await the database/sheet save first to guarantee data is stored
    await appendQuote({ name, email, phone, company, application, quantity, description, hasAttachment })

    // 2. Fire the two emails off in parallel in the background (fire-and-forget)
    Promise.all([
      transporter.sendMail({
        from: `"${fromName} Quotes" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `📋 New Quote Request from ${name}${attachments.length > 0 ? ` [${attachments.length} attachment${attachments.length > 1 ? "s" : ""}]` : ""}`,
        html: adminEmailHtml,
        attachments,
      }),
      transporter.sendMail({
        from: `"${fromName}" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Your Quote Request Received — ${fromName}`,
        html: userEmailHtml,
      }),
    ]).catch(err => {
      console.error("Background email task failed:", err)
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Quote form error:", err)
    return NextResponse.json({ error: "Failed to submit quote request. Please try again." }, { status: 500 })
  }
}
