import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// --- In-memory rate limiter ---
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // max requests per window per IP

const rateLimitMap = new Map<
  string,
  { count: number; resetTime: number }
>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function pruneExpiredEntries() {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

function isRateLimited(ip: string): boolean {
  pruneExpiredEntries();

  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// --- Input length limits ---
const FIELD_MAX_LENGTHS: Record<string, { max: number; label: string }> = {
  name: { max: 100, label: "nombre" },
  email: { max: 254, label: "email" },
  phone: { max: 20, label: "teléfono" },
  company: { max: 100, label: "empresa" },
  message: { max: 5000, label: "mensaje" },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot anti-spam check — if the hidden field has a value, it's a bot.
    // Return 200 silently so the bot thinks it succeeded.
    if (body.company_url) {
      return NextResponse.json({ success: true });
    }

    // Rate limiting
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Por favor, intente más tarde." },
        { status: 429 }
      );
    }

    const { name, email, phone, type, message } = body;

    // Input length validation
    for (const [field, { max, label }] of Object.entries(FIELD_MAX_LENGTHS)) {
      const value = body[field];
      if (typeof value === "string" && value.length > max) {
        return NextResponse.json(
          {
            error: `El campo ${label} excede el límite de caracteres permitido.`,
          },
          { status: 400 }
        );
      }
    }

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
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nueva consulta - Geltec Consultores</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f0eb; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f5f0eb;">
    <tr>
      <td align="center" style="padding: 24px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%;">
          <!-- Header with company name -->
          <tr>
            <td style="background-color: #432818; padding: 28px 32px; border-radius: 8px 8px 0 0; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-family: Arial, Helvetica, sans-serif; font-size: 22px; font-weight: bold; color: #f5f0eb; text-align: center; letter-spacing: 1px;">
                    GELTEC CONSULTORES
                  </td>
                </tr>
                <tr>
                  <td style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: #d2bdac; text-align: center; padding-top: 6px; letter-spacing: 0.5px;">
                    Nueva consulta desde el sitio web
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background-color: #ffffff; padding: 32px; border-left: 1px solid #d2bdac; border-right: 1px solid #d2bdac;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 12px; color: #432818; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; width: 120px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    Nombre:
                  </td>
                  <td style="padding: 10px 12px; color: #1a1a1a; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    ${escapeHtml(name)}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #432818; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; width: 120px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    Email:
                  </td>
                  <td style="padding: 10px 12px; color: #1a1a1a; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #432818; text-decoration: underline;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #432818; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; width: 120px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    Tel\u00e9fono:
                  </td>
                  <td style="padding: 10px 12px; color: #1a1a1a; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    ${escapeHtml(phone || "No proporcionado")}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; color: #432818; font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; width: 120px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    Tipo:
                  </td>
                  <td style="padding: 10px 12px; color: #1a1a1a; font-family: Arial, Helvetica, sans-serif; font-size: 14px; vertical-align: top; border-bottom: 1px solid #f5f0eb;">
                    ${escapeHtml(type)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message section -->
          <tr>
            <td style="background-color: #f5f0eb; padding: 24px 32px; border-left: 1px solid #d2bdac; border-right: 1px solid #d2bdac;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; color: #432818; padding-bottom: 10px;">
                    Mensaje:
                  </td>
                </tr>
                <tr>
                  <td style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: #1a1a1a; line-height: 1.6; white-space: pre-wrap;">
                    ${escapeHtml(message)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #432818; padding: 16px 32px; border-radius: 0 0 8px 8px; text-align: center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: #d2bdac; text-align: center;">
                    Este mensaje fue enviado desde el formulario de contacto de geltec.com
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
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
