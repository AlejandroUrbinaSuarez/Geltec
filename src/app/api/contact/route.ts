import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, type, message } = body;

    // Server-side validation
    if (!name || !email || !type || !message) {
      return NextResponse.json(
        { error: "Los campos nombre, email, tipo de consulta y mensaje son obligatorios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "El formato del correo electrónico no es válido." },
        { status: 400 }
      );
    }

    // Configure transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const contactEmail = process.env.CONTACT_EMAIL || "contacto@geltec.com";

    // Send email
    await transporter.sendMail({
      from: `"Geltec Consultores Web" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: email,
      subject: `[Geltec Consultores] Nueva consulta: ${type}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #432818; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #d2bdac; margin: 0; font-size: 20px;">Nueva consulta desde el sitio web</h1>
          </div>
          <div style="background: #e8e4de; padding: 24px; border: 1px solid #d2bdac; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #666; width: 140px;"><strong>Nombre:</strong></td>
                <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #1a1a1a;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Teléfono:</strong></td>
                <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(phone || "No proporcionado")}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;"><strong>Tipo:</strong></td>
                <td style="padding: 8px 0; color: #1a1a1a;">${escapeHtml(type)}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #e1dcd5; margin: 16px 0;" />
            <p style="color: #666; margin: 0 0 8px;"><strong>Mensaje:</strong></p>
            <p style="color: #1a1a1a; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Por favor, intente nuevamente." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
