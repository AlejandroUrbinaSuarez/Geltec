import Link from "next/link";

export default function CTASection({
  title = "¿Listo para proteger su empresa?",
  subtitle = "Contáctenos hoy para una consulta inicial sin compromiso.",
  buttonText = "Solicitar Consulta",
  buttonHref = "/contacto",
}: {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-5">
          {title}
        </h2>
        <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={buttonHref}
          className="inline-flex items-center px-8 py-4 bg-secondary text-primary font-semibold text-sm tracking-wide rounded-lg hover:bg-secondary-light transition-all duration-200 hover:shadow-lg hover:shadow-secondary/20"
        >
          {buttonText}
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
