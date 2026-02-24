import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { socialLinks } from "@/lib/socialLinks";

export default function Footer() {
  const activeSocials = socialLinks.filter((s) => s.url);
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+573209104055";
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@geltec-consultores.com";

  return (
    <footer className="bg-tertiary text-dark/90 border-t border-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Logo size={32} className="text-primary" />
              <span className="font-heading text-xl font-bold text-primary">Geltec Consultores</span>
            </div>
            <p className="text-sm leading-relaxed text-dark/60">
              Asesoría integral en riesgos, compliance y servicios contables para empresas que buscan operar con transparencia y excelencia.
            </p>

            {/* Social media */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-3 mt-6">
                {activeSocials.map((social) => (
                  <a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-white transition-all duration-200"
                    aria-label={social.key}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-5">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/servicios", label: "Servicios" },
                { href: "/nosotros", label: "Nosotros" },
                { href: "/contacto", label: "Contacto" },
                { href: "/privacidad", label: "Política de Privacidad" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark/60 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {[
                "Riesgos y Compliance",
                "Contabilidad y Tributación",
                "Anticorrupción",
                "Asesoría Legal",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-sm text-dark/60 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-primary mb-5">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-dark/60">{email}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-dark/60">{phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-dark/60">Cúcuta, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-secondary/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-dark/40">
            © {new Date().getFullYear()} Geltec Consultores. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="text-xs text-dark/40 hover:text-primary transition-colors">
              Privacidad
            </Link>
            <span className="text-xs text-dark/20">|</span>
            <span className="text-xs text-dark/40">
              Términos de Servicio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
