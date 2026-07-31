/**
 * @file lib/email.ts
 * @description Email utility functions for the Client Store.
 *   Configures a reusable Nodemailer transporter using a Gmail App Password
 *   and exports functions to send order status updates, order confirmations,
 *   and replies to customer inquiries. All templates are inline HTML.
 *
 * @owner Heet-P
 * @lastModified May 16, 2026
 */

import nodemailer from "nodemailer"
import { generateInvoicePdf } from "./pdf"

// Escapes HTML special characters to prevent XSS in email templates.
// Must be applied to every user-supplied or database-sourced string
// before interpolation into HTML strings.
function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
}

// ── Nodemailer Transporter Configuration ──────────────────────────────────────
// Uses standard SMTP over TLS (port 465) via Gmail. Ensure you have
// GMAIL_USER and GMAIL_APP_PASSWORD correctly set in .env.local.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

const STATUS_ICONS: Record<string, string> = {
  Processing:  "⏳",
  Packed:      "📦",
  Shipped:     "🚚",
  "In Transit":"✈️",
  Delivered:   "✅",
  Cancelled:   "❌",
}

// ── Common Styling Helpers ───────────────────────────────────────────────────
// These objects contain CSS style strings used across all email templates
// to maintain a consistent dark-theme UI in the inbox.
const theme = {
  bg: "#131310",
  bgCard: "#1c1c18",
  bgSub: "#252520",
  text: "#fcf9f2",
  textM: "#e5e2db",
  textSub: "#737874",
  bd: "#2a2a24",
  acc: "#4ae183", // The brand's signature green
}

const STATUS_COLORS: Record<string, string> = {
  Processing:  "#f59e0b",
  Packed:      "#8b5cf6",
  Shipped:     "#2563eb",
  "In Transit":"#0891b2",
  Delivered:   "#16a34a",
  Cancelled:   "#ef4444",
}

export async function sendOrderStatusEmail({
  to,
  customerName,
  orderId,
  product,
  status,
  comments,
}: {
  to: string
  customerName: string
  orderId: string
  product: string
  status: string
  comments?: string
}) {
  const icon = STATUS_ICONS[status] ?? "📋"
  const color = STATUS_COLORS[status] ?? "#2563eb"
  const fromName = process.env.EMAIL_FROM_NAME ?? "Client Store"
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"

  // Escaped aliases — applied to every user-sourced or admin-sourced string
  // before interpolation into HTML to prevent XSS in email clients.
  const eName     = escapeHtml(customerName)
  const eOrderId  = escapeHtml(orderId)
  const eProduct  = escapeHtml(product)
  const eStatus   = escapeHtml(status)
  const eComments = comments != null ? escapeHtml(comments) : undefined
  const eTo       = escapeHtml(to)
  const eFromName = escapeHtml(fromName)

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Order Update</title></head>
<body style="margin:0;padding:0;background:#131310;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#131310;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1c1c18;border-radius:16px;overflow:hidden;border:1px solid #2a2a24;">

        <!-- Header -->
        <tr><td style="background:#1c1c18;padding:36px 40px;text-align:center;border-bottom:1px solid #2a2a24;">
          <div style="font-size:40px;margin-bottom:12px;">${icon}</div>
          <h1 style="margin:0;color:#fcf9f2;font-size:22px;font-weight:800;letter-spacing:-0.02em;">Order Status Update</h1>
          <p style="margin:8px 0 0;color:#737874;font-size:14px;">${eFromName}</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:#e5e2db;font-size:16px;margin:0 0 24px;">Hi <strong style="color:#fcf9f2;">${eName}</strong>,</p>
          <p style="color:#737874;font-size:14px;margin:0 0 28px;line-height:1.6;">
            Your order has been updated. Here are the latest details:
          </p>

          <!-- Status Badge -->
          <div style="text-align:center;margin-bottom:32px;">
            <span style="display:inline-block;padding:10px 24px;border-radius:999px;font-size:16px;font-weight:800;background:${color}18;color:${color};border:1px solid ${color}33;">
              ${icon} ${eStatus}
            </span>
          </div>

          <!-- Order Details -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#252520;border-radius:12px;overflow:hidden;margin-bottom:24px;">
            <tr style="border-bottom:1px solid #2a2a24;">
              <td style="padding:14px 18px;color:#737874;font-size:13px;width:120px;">Order ID</td>
              <td style="padding:14px 18px;color:#4ae183;font-size:13px;font-family:monospace;font-weight:700;">${eOrderId}</td>
            </tr>
            <tr style="border-bottom:1px solid #2a2a24;">
              <td style="padding:14px 18px;color:#737874;font-size:13px;">Product</td>
              <td style="padding:14px 18px;color:#fcf9f2;font-size:13px;">${eProduct}</td>
            </tr>
            <tr>
              <td style="padding:14px 18px;color:#737874;font-size:13px;">Status</td>
              <td style="padding:14px 18px;color:${color};font-size:13px;font-weight:700;">${eStatus}</td>
            </tr>
          </table>

          ${eComments ? `
          <!-- Comment -->
          <div style="background:${color}10;border:1px solid ${color}20;border-radius:10px;padding:16px 20px;margin-bottom:24px;">
            <p style="margin:0 0 6px;color:${color};font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">Update from our team</p>
            <p style="margin:0;color:#e5e2db;font-size:14px;line-height:1.6;">${eComments}</p>
          </div>
          ` : ""}

          <!-- CTA -->
          <div style="text-align:center;margin-top:32px;">
            <a href="${storeUrl}/track-order" style="display:inline-block;padding:14px 28px;background:#4ae183;color:#131310;text-decoration:none;border-radius:10px;font-size:15px;font-weight:700;">
              Track Your Order →
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #2a2a24;text-align:center;">
          <p style="margin:0;color:#737874;font-size:12px;">
            You received this email because you placed an order at ${eFromName}.<br>
            Questions? Reply to this email.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

  // Send rich email to customer
  await transporter.sendMail({
    from: `"${fromName}" <${process.env.GMAIL_USER}>`,
    to,
    subject: `${icon} Your order ${orderId} is now: ${status}`,
    html,
  })

  // Send short text alert to admin
  const adminHtml = `
  <div style="font-family:sans-serif;padding:24px;background:#131310;color:#e5e2db;border:1px solid #2a2a24;border-radius:12px;max-width:500px;margin:0 auto;">
    <h3 style="color:#4ae183;margin:0 0 16px;font-size:16px;letter-spacing:0.05em;text-transform:uppercase;">Order Status Updated</h3>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:6px 0;color:#737874;width:80px;">Order ID</td><td style="padding:6px 0;font-weight:700;font-family:monospace;color:#fcf9f2;">${eOrderId}</td></tr>
      <tr><td style="padding:6px 0;color:#737874;">Customer</td><td style="padding:6px 0;">${eName} (<a href="mailto:${to}" style="color:#4ae183;text-decoration:none;">${eTo}</a>)</td></tr>
      <tr><td style="padding:6px 0;color:#737874;">Status</td><td style="padding:6px 0;font-weight:700;color:${color};">${eStatus}</td></tr>
    </table>
    ${eComments ? `
    <div style="margin-top:16px;padding:12px;background:#1c1c18;border-radius:8px;border:1px solid #2a2a24;">
      <div style="color:#737874;font-size:11px;margin-bottom:4px;text-transform:uppercase;">Admin Comment</div>
      <div style="font-size:13px;line-height:1.5;">${eComments}</div>
    </div>
    ` : ""}
  </div>
  `

  await transporter.sendMail({
    from: `"System Alert" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `[Alert] Order ${orderId} updated to ${status}`,
    html: adminHtml,
  })
}

export async function sendOrderConfirmationEmail({
  to,
  customerName,
  orderId,
  product,
  amount,
}: {
  to: string
  customerName: string
  orderId: string
  product: string
  amount: number
}) {
  const fromName = process.env.EMAIL_FROM_NAME ?? "Client Store"
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"

  const eName     = escapeHtml(customerName)
  const eOrderId  = escapeHtml(orderId)
  const eProduct  = escapeHtml(product)
  const eFromName = escapeHtml(fromName)

  const formattedAmount = `$${amount.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Order Confirmation</title></head>
<body style="margin:0;padding:0;background:#131310;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#131310;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1c1c18;border-radius:16px;overflow:hidden;border:1px solid #2a2a24;">

        <!-- Header -->
        <tr><td style="background:#1c1c18;padding:36px 40px;text-align:center;border-bottom:1px solid #2a2a24;">
          <div style="font-size:40px;margin-bottom:12px;">🎉</div>
          <h1 style="margin:0;color:#fcf9f2;font-size:22px;font-weight:800;letter-spacing:-0.02em;">Order Confirmed!</h1>
          <p style="margin:8px 0 0;color:#737874;font-size:14px;">Thank you for shopping at ${eFromName}</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:#e5e2db;font-size:16px;margin:0 0 24px;">Hi <strong style="color:#fcf9f2;">${eName}</strong>,</p>
          <p style="color:#737874;font-size:14px;margin:0 0 28px;line-height:1.6;">
            We've received your order and payment. We're getting your items ready for shipment! Here is your auto-generated bill and receipt:
          </p>

          <!-- Order Details / Bill -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#252520;border-radius:12px;overflow:hidden;margin-bottom:24px;">
            <tr style="border-bottom:1px solid #2a2a24;">
              <td style="padding:14px 18px;color:#737874;font-size:13px;width:120px;">Order ID</td>
              <td style="padding:14px 18px;color:#4ae183;font-size:13px;font-family:monospace;font-weight:700;">${eOrderId}</td>
            </tr>
            <tr style="border-bottom:1px solid #2a2a24;">
              <td style="padding:14px 18px;color:#737874;font-size:13px;">Items</td>
              <td style="padding:14px 18px;color:#fcf9f2;font-size:13px;">${eProduct}</td>
            </tr>
            <tr>
              <td style="padding:14px 18px;color:#737874;font-size:13px;">Total Paid</td>
              <td style="padding:14px 18px;color:#fcf9f2;font-size:16px;font-weight:800;">${formattedAmount}</td>
            </tr>
          </table>

          <!-- CTA -->
          <div style="text-align:center;margin-top:32px;">
            <a href="${storeUrl}/track-order" style="display:inline-block;padding:14px 28px;background:#4ae183;color:#131310;text-decoration:none;border-radius:10px;font-size:15px;font-weight:700;">
              Track Your Order →
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #2a2a24;text-align:center;">
          <p style="margin:0;color:#737874;font-size:12px;">
            You received this email because you placed an order at ${eFromName}.<br>
            Questions? Reply to this email.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

  // Resolve per-item prices from the products sheet so the PDF is itemized.
  let invoiceItems: { name: string; quantity: number; unitPrice: number }[] = [];
  try {
    const { getProducts } = await import("./sheets");
    const products = await getProducts();
    const productMap = new Map(products.map((p) => [p.name.toLowerCase(), p.price]));
    invoiceItems = product
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((segment) => {
        const m = segment.match(/^(.+)\s+x(\d+)$/i);
        const name = m ? m[1].trim() : segment;
        const quantity = m ? parseInt(m[2], 10) : 1;
        return { name, quantity, unitPrice: productMap.get(name.toLowerCase()) ?? 0 };
      });
  } catch {
    invoiceItems = [{ name: product, quantity: 1, unitPrice: amount }];
  }

  let attachments = [];
  try {
    const pdfBuffer = await generateInvoicePdf({
      orderId,
      customerName,
      email: to,
      items: invoiceItems,
      amount,
    });
    attachments.push({
      filename: `Invoice_${orderId}.pdf`,
      content: pdfBuffer,
      contentType: "application/pdf",
    });
  } catch (err) {
    console.error("Failed to generate PDF invoice for email:", err);
  }

  await transporter.sendMail({
    from: `"${fromName}" <${process.env.GMAIL_USER}>`,
    to,
    subject: `Order Confirmed: ${orderId}`,
    html,
    attachments,
  })
}

export async function sendInquiryReplyEmail({
  to,
  customerName,
  originalSubject,
  replyMessage,
}: {
  to: string
  customerName: string
  originalSubject: string
  replyMessage: string
}) {
  const fromName = process.env.EMAIL_FROM_NAME ?? "Client Store"
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"

  const eName     = escapeHtml(customerName)
  const eSubject  = escapeHtml(originalSubject)
  const eReply    = escapeHtml(replyMessage)
  const eFromName = escapeHtml(fromName)

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Reply to your inquiry</title></head>
<body style="margin:0;padding:0;background:#131310;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#131310;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1c1c18;border-radius:16px;overflow:hidden;border:1px solid #2a2a24;">

        <!-- Header -->
        <tr><td style="background:#1c1c18;padding:36px 40px;text-align:center;border-bottom:1px solid #2a2a24;">
          <h1 style="margin:0;color:#fcf9f2;font-size:20px;font-weight:700;">Reply to your inquiry</h1>
          <p style="margin:8px 0 0;color:#737874;font-size:14px;">Re: ${eSubject}</p>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;">
          <p style="color:#e5e2db;font-size:16px;margin:0 0 24px;">Hi <strong style="color:#fcf9f2;">${eName}</strong>,</p>
          <p style="color:#737874;font-size:14px;margin:0 0 24px;line-height:1.6;">
            Thank you for reaching out to us. Here is the response to your inquiry:
          </p>

          <!-- Reply Message -->
          <div style="background:#252520;border-left:4px solid #4ae183;border-radius:0 8px 8px 0;padding:20px;margin-bottom:32px;">
            <p style="margin:0;color:#fcf9f2;font-size:15px;line-height:1.7;white-space:pre-wrap;">${eReply}</p>
          </div>

          <p style="color:#737874;font-size:14px;margin:0;line-height:1.6;">
            If you have any further questions, simply reply to this email or visit our website.
          </p>

          <div style="text-align:center;margin-top:32px;">
            <a href="${storeUrl}" style="display:inline-block;padding:12px 24px;background:#4ae183;color:#131310;text-decoration:none;border-radius:8px;font-size:14px;font-weight:700;">
              Visit Our Store
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #2a2a24;text-align:center;">
          <p style="margin:0;color:#737874;font-size:12px;">
            ${eFromName}<br>
            <!-- Old: Canton, Michigan 48187 -->
            3179 Black Gap Rd, Chambersburg, PA 17202
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

  await transporter.sendMail({
    from: `"${fromName}" <${process.env.GMAIL_USER}>`,
    to,
    subject: `Re: ${originalSubject}`,
    html,
  })
}

export async function sendNewsletterWelcomeEmail({ to }: { to: string }) {
  const fromName = process.env.EMAIL_FROM_NAME ?? "Client Store"
  const storeUrl = process.env.NEXT_PUBLIC_STORE_URL ?? "https://clientstore.com"

  const eFromName = escapeHtml(fromName)

  const html = `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Welcome to the Newsletter</title></head>
<body style="margin:0;padding:0;background:#131310;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#131310;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#1c1c18;border-radius:16px;overflow:hidden;border:1px solid #2a2a24;">

        <!-- Header -->
        <tr><td style="background:#1c1c18;padding:36px 40px;text-align:center;border-bottom:1px solid #2a2a24;">
          <div style="font-size:40px;margin-bottom:12px;">✉️</div>
          <h1 style="margin:0;color:#fcf9f2;font-size:22px;font-weight:800;letter-spacing:-0.02em;">Welcome!</h1>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:36px 40px;text-align:center;">
          <p style="color:#e5e2db;font-size:16px;margin:0 0 24px;line-height:1.6;">
            Thank you for subscribing to the <strong>${eFromName}</strong> newsletter!
          </p>
          <p style="color:#737874;font-size:14px;margin:0 0 24px;line-height:1.6;">
            We're excited to share our latest products, offers, and news with you. 
            Stay tuned for our upcoming updates!
          </p>

          <div style="text-align:center;margin-top:32px;">
            <a href="${storeUrl}" style="display:inline-block;padding:12px 24px;background:#4ae183;color:#131310;text-decoration:none;border-radius:8px;font-size:14px;font-weight:700;">
              Visit Our Store
            </a>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 40px;border-top:1px solid #2a2a24;text-align:center;">
          <p style="margin:0;color:#737874;font-size:12px;">
            ${eFromName}<br>
            <!-- Old: Canton, Michigan 48187 -->
            3179 Black Gap Rd, Chambersburg, PA 17202
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

  await transporter.sendMail({
    from: `"${fromName}" <${process.env.GMAIL_USER}>`,
    to,
    subject: `Welcome to the ${fromName} Newsletter!`,
    html,
  })
}
