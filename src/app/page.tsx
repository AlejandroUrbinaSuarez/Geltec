import Link from "next/link";
import {
  ShieldCheck,
  Calculator,
  Scale,
  Briefcase,
  CheckCircle2,
  Users,
  Award,
  Clock,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const services = [
  {
    icon: ShieldCheck,
    title: "Riesgos y Compliance",
    description:
      "Identificamos, evaluamos y mitigamos riesgos operacionales. Diseñamos programas de cumplimiento normativo adaptados a su industria.",
  },
  {
    icon: Calculator,
    title: "Contabilidad y Tributación",
    description:
      "Servicios contables integrales y planificación tributaria estratégica para optimizar la carga fiscal de su empresa.",
  },
  {
    icon: Scale,
    title: "Anticorrupción y Ética",
    description:
      "Programas anticorrupción robustos, códigos de ética y canales de denuncia que fortalecen la cultura organizacional.",
  },
  {
    icon: Briefcase,
    title: "Asesoría Legal Corporativa",
    description:
      "Asesoría jurídica especializada en derecho corporativo, contratos y regulación sectorial para la toma de decisiones segura.",
  },
];

const differentiators = [
  {
    icon: Users,
    stat: "200+",
    label: "Empresas asesoradas",
  },
  {
    icon: Award,
    stat: "15+",
    label: "Años de experiencia",
  },
  {
    icon: CheckCircle2,
    stat: "100%",
    label: "Compromiso con resultados",
  },
  {
    icon: Clock,
    stat: "24/7",
    label: "Soporte disponible",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-tertiary-light">
        {/* Background texture */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
          {/* Diagonal line accents */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03]">
            <div className="absolute top-20 right-20 w-px h-96 bg-primary rotate-[30deg] origin-top" />
            <div className="absolute top-40 right-60 w-px h-64 bg-primary rotate-[30deg] origin-top" />
            <div className="absolute top-10 right-40 w-px h-80 bg-primary rotate-[30deg] origin-top" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="animate-fade-in-up text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-6">
              Asesoría de riesgos · Compliance · Servicios contables
            </p>
            <h1 className="animate-fade-in-up animation-delay-100 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-[1.1] mb-8">
              Protegemos la{" "}
              <span className="text-secondary">integridad</span>{" "}
              de su empresa
            </h1>
            <p className="animate-fade-in-up animation-delay-200 text-lg lg:text-xl text-dark/60 max-w-xl mb-10 leading-relaxed">
              Soluciones integrales en gestión de riesgos, compliance,
              anticorrupción y servicios contables para empresas que
              exigen excelencia y transparencia.
            </p>
            <div className="animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-primary-light transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
              >
                Solicitar Consulta
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary/20 text-primary font-medium text-sm tracking-wide rounded-lg hover:bg-primary/5 transition-all duration-200"
              >
                Conocer Servicios
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-warm-white to-transparent" />
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section className="py-24 lg:py-32 bg-warm-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nuestros Servicios"
            title="Soluciones integrales para su empresa"
            subtitle="Combinamos experiencia multidisciplinaria para ofrecer un servicio integral que cubre todas las necesidades de cumplimiento y gestión de su organización."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href="/servicios"
                className={`group relative p-8 lg:p-10 rounded-2xl border border-secondary/20 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-secondary/40 animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <service.icon
                      size={24}
                      className="text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-dark/60 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-primary/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ WHY GELTEC ══════════════ */}
      <section className="py-24 lg:py-32 bg-secondary/15">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="¿Por qué elegirnos?"
                title="Experiencia que genera confianza"
                subtitle="Más de una década asesorando a empresas líderes en la gestión de riesgos y el cumplimiento normativo. Nuestro enfoque personalizado garantiza soluciones que se adaptan a cada organización."
                centered={false}
              />
              <ul className="space-y-4">
                {[
                  "Equipo multidisciplinario de expertos certificados",
                  "Enfoque personalizado según industria y tamaño",
                  "Metodologías alineadas a estándares internacionales",
                  "Acompañamiento continuo y medición de resultados",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-primary mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="text-dark/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {differentiators.map((item) => (
                <div
                  key={item.label}
                  className="p-8 bg-secondary/10 rounded-2xl text-center border border-secondary/15 shadow-sm"
                >
                  <item.icon
                    size={28}
                    className="text-primary mx-auto mb-4"
                    strokeWidth={1.5}
                  />
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-2">
                    {item.stat}
                  </p>
                  <p className="text-sm text-dark/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CTA ══════════════ */}
      <CTASection />
    </>
  );
}
