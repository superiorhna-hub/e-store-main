import PDFDocument from "pdfkit";
import path from "path";
import fs from "fs";

export interface InvoiceLineItem {
  name: string;
  quantity: number;
  unitPrice: number; // 0 means price unknown
}

export async function generateInvoicePdf({
  orderId,
  customerName,
  email,
  items,
  amount,
  date = new Date().toLocaleDateString("en-US", { timeZone: "America/New_York" }),
}: {
  orderId: string;
  customerName: string;
  email: string;
  items: InvoiceLineItem[];
  amount: number;
  date?: string;
}): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 0, size: "A4" });
      const buffers: Buffer[] = [];

      doc.on("data", buffers.push.bind(buffers));
      doc.on("end", () => resolve(Buffer.concat(buffers)));
      doc.on("error", reject);

      const PRIMARY_COLOR = "#006d37";
      const SECONDARY_COLOR = "#4ae183";
      const TEXT_MAIN = "#111111";
      const TEXT_MUTED = "#666666";

      const fmt = (n: number) =>
        `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

      // Top accent bar
      doc.rect(0, 0, doc.page.width, 12).fill(PRIMARY_COLOR);

      doc.y = 50;
      doc.x = 50;

      const logoPath = path.join(process.cwd(), "public", "images", "logo.png");
      if (fs.existsSync(logoPath)) {
        doc.image(logoPath, 50, 40, { fit: [140, 70] });
      } else {
        doc.fillColor(PRIMARY_COLOR).font("Helvetica-Bold").fontSize(24).text("Superior Harness", 50, 50);
      }

      doc.fillColor(TEXT_MAIN).font("Helvetica-Bold").fontSize(12).text("Superior Harness & Assembly", 300, 50, { align: "right", width: 245 });
      doc.fillColor(TEXT_MUTED).font("Helvetica").fontSize(10)
        // Old: .text("Canton, Michigan 48187", { align: "right", width: 245 })
        .text("3179 Black Gap Rd, Chambersburg, PA 17202", { align: "right", width: 245 })
        // Old: .text("pateltushar1987@gmail.com", { align: "right", width: 245 })
        .text("info@superiorharness.com", { align: "right", width: 245 })
        // Old: .text("+91 7348910249", { align: "right", width: 245 })
        .text("+1 734 891 0248", { align: "right", width: 245 });

      doc.moveDown(3);

      doc.y = 150;
      doc.fillColor(PRIMARY_COLOR).font("Helvetica-Bold").fontSize(28).text("INVOICE", 50, 150);

      doc.moveTo(50, 185).lineTo(545, 185).lineWidth(2).strokeColor(SECONDARY_COLOR).stroke();

      doc.y = 210;
      doc.x = 50;

      doc.fillColor(TEXT_MUTED).font("Helvetica-Bold").fontSize(10).text("BILLED TO:");
      doc.moveDown(0.5);
      doc.fillColor(TEXT_MAIN).font("Helvetica-Bold").fontSize(14).text(customerName);
      doc.fillColor(TEXT_MUTED).font("Helvetica").fontSize(11).text(email);

      doc.fillColor(TEXT_MUTED).font("Helvetica-Bold").fontSize(10).text("INVOICE NUMBER:", 300, 210, { align: "right", width: 245 });
      doc.fillColor(TEXT_MAIN).font("Helvetica").fontSize(11).text(orderId, { align: "right", width: 245 });
      doc.moveDown(0.5);
      doc.fillColor(TEXT_MUTED).font("Helvetica-Bold").fontSize(10).text("DATE OF ISSUE:", 300, doc.y, { align: "right", width: 245 });
      doc.fillColor(TEXT_MAIN).font("Helvetica").fontSize(11).text(date, { align: "right", width: 245 });

      doc.moveDown(4);

      // ── Table header ────────────────────────────────────────────────────────
      const tableTop = doc.y + 20;
      doc.rect(50, tableTop, 495, 30).fill(PRIMARY_COLOR);

      doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(10);
      doc.text("ITEM DESCRIPTION", 65, tableTop + 10);
      doc.text("QTY", 270, tableTop + 10, { width: 50, align: "center" });
      doc.text("UNIT PRICE", 325, tableTop + 10, { width: 105, align: "right" });
      doc.text("TOTAL", 435, tableTop + 10, { width: 100, align: "right" });

      // ── Table rows ──────────────────────────────────────────────────────────
      let rowY = tableTop + 45;
      const MIN_ROW_HEIGHT = 22;
      const ROW_GAP = 10;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // Light stripe on even rows
        if (i % 2 === 0) {
          // measured height not yet known — stripe drawn after we know endY
        }

        const startY = rowY;

        doc.fillColor(TEXT_MAIN).font("Helvetica").fontSize(11);
        doc.text(item.name, 65, startY, { width: 195, lineGap: 2 });
        const afterDesc = doc.y;

        doc.text(String(item.quantity), 270, startY, { width: 50, align: "center" });

        if (item.unitPrice > 0) {
          doc.fillColor(TEXT_MAIN).text(fmt(item.unitPrice), 325, startY, { width: 105, align: "right" });
        } else {
          doc.fillColor(TEXT_MUTED).text("—", 325, startY, { width: 105, align: "right" });
        }

        const lineTotal = item.quantity * item.unitPrice;
        if (lineTotal > 0) {
          doc.fillColor(TEXT_MAIN).font("Helvetica-Bold").text(fmt(lineTotal), 435, startY, { width: 100, align: "right" });
        } else {
          doc.fillColor(TEXT_MUTED).font("Helvetica").text("—", 435, startY, { width: 100, align: "right" });
        }

        const rowBottom = Math.max(afterDesc, startY + MIN_ROW_HEIGHT);

        // Even-row stripe (drawn behind text — placed before text ideally, but
        // pdfkit layers paint-order so we skip for simplicity and use lines only)
        doc.moveTo(50, rowBottom + ROW_GAP / 2)
          .lineTo(545, rowBottom + ROW_GAP / 2)
          .lineWidth(0.5)
          .strokeColor("#E0E0E0")
          .stroke();

        rowY = rowBottom + ROW_GAP;
      }

      // ── Totals section ──────────────────────────────────────────────────────
      const formattedTotal = fmt(amount);

      // Subtotal from resolved items (may differ from amount if prices unknown)
      const resolvedSubtotal = items.reduce((s, it) => s + it.quantity * it.unitPrice, 0);
      const allPricesKnown = items.every((it) => it.unitPrice > 0);

      doc.y = rowY + 10;

      if (allPricesKnown && Math.abs(resolvedSubtotal - amount) > 0.01) {
        // Show subtotal line only when it differs from the charged amount
        doc.fillColor(TEXT_MUTED).font("Helvetica").fontSize(11)
          .text("Subtotal:", 300, doc.y, { width: 130, align: "right" });
        doc.fillColor(TEXT_MUTED).font("Helvetica").fontSize(11)
          .text(fmt(resolvedSubtotal), 435, doc.y - 13, { width: 100, align: "right" });
        doc.moveDown(0.8);
      }

      doc.fillColor(TEXT_MAIN).font("Helvetica-Bold").fontSize(16)
        .text("Total Paid:", 300, doc.y, { width: 130, align: "right" });
      doc.fillColor(PRIMARY_COLOR).font("Helvetica-Bold").fontSize(16)
        .text(formattedTotal, 435, doc.y - 19, { width: 100, align: "right" });

      // ── Footer ──────────────────────────────────────────────────────────────
      const footerY = doc.page.height - 80;
      doc.moveTo(50, footerY - 20).lineTo(545, footerY - 20).lineWidth(1).strokeColor("#E0E0E0").stroke();
      doc.fillColor(TEXT_MUTED).font("Helvetica").fontSize(10).text("Thank you for choosing Superior Harness & Assembly.", 50, footerY, { align: "center", width: 495 });
      doc.fillColor(SECONDARY_COLOR).text("If you have any questions about this invoice, please contact us.", 50, footerY + 15, { align: "center", width: 495 });

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}
