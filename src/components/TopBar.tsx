import { Mail, Phone } from "lucide-react";
import { socialLinks } from "@/lib/socialLinks";

export default function TopBar() {
  const activeSocials = socialLinks.filter((s) => s.url);
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+573209104055";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@geltec-consultores.com";

  return (
    <div className="hidden md:block bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-8 items-center justify-between text-xs">
          {/* Contact info */}
          <div className="flex items-center gap-5 text-white/60">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} strokeWidth={1.5} />
              <span>{email}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} strokeWidth={1.5} />
              <span>{phone}</span>
            </a>
          </div>

          {/* Social icons */}
          {activeSocials.length > 0 && (
            <div className="flex items-center gap-2">
              {activeSocials.map((social) => (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  aria-label={social.key}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
