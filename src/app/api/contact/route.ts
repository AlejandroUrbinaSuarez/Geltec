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
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #e1dcd5; padding: 24px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #432818; margin: 0; font-size: 20px;">Nueva consulta desde el sitio web</h1>
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
