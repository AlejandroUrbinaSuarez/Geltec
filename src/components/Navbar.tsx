"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-md border-b border-secondary/30">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size={36} className="text-primary transition-transform duration-300 group-hover:scale-110" />
            <span className="font-heading text-2xl font-bold tracking-tight text-primary">
              Geltec
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 rounded-lg ${
                  pathname === link.href
                    ? "text-primary bg-secondary/30"
                    : "text-dark/70 hover:text-primary hover:bg-tertiary/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="ml-4 px-6 py-2.5 bg-primary text-white text-sm font-medium tracking-wide rounded-lg transition-all duration-200 hover:bg-primary-light hover:shadow-lg hover:shadow-primary/20"
            >
              Consulta Gratis
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary rounded-lg hover:bg-tertiary/50 transition-colors"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-secondary/20 mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-lg transition-colors ${
                  pathname === link.href
                    ? "text-primary bg-secondary/20"
                    : "text-dark/70 hover:text-primary hover:bg-tertiary/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block mt-3 mx-4 px-6 py-3 bg-primary text-white text-sm font-medium tracking-wide text-center rounded-lg"
            >
              Consulta Gratis
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
