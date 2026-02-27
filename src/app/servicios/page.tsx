import type { Metadata } from "next";
import { ShieldCheck, Calculator, Scale, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Dirección Jurídica-Tributaria, Auditoría y Riesgos, y Dirección Contable. Servicios profesionales para empresas que buscan operar con transparencia.",
};

const services: {
  icon: typeof Scale;
  title: string;
  description: string;
  items?: string[];
  sections?: { subtitle: string; items: string[] }[];
}[] = [
  {
    icon: Scale,
    title: "Dirección Jurídica – Tributaria",
    description:
      "Acompañamiento jurídico y tributario estratégico para proteger los intereses de su empresa en cada negociación y proceso legal.",
    items: [
      "Proyección de contratos para negocios especiales",
      "Asesoría y defensa técnica en procesos jurídicos personalizados",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Dirección de Auditoría y Riesgos",
    description:
      "Servicios integrales de auditoría, revisoría fiscal y gestión de riesgos para garantizar el cumplimiento normativo y la transparencia de su organización.",
    sections: [
      {
        subtitle: "Auditorías – Revisoría Fiscal",
        items: [
          "Diagnóstico de detección de riesgos sancionatorios penales y fiscales de los entes de control",
          "Peritajes contables forenses",
        ],
      },
      {
        subtitle: "Auditorías Internas",
        items: [],
      },
      {
        subtitle: "Gestión de Riesgos",
        items: [
          "Servicio de diseño, evaluación e implementación de política SARLAFT – SAGRILAFT – COMPLIANCE",
        ],
      },
    ],
  },
  {
    icon: Calculator,
    title: "Dirección Contable",
    description:
      "Soluciones contables integrales que van más allá del cumplimiento: optimizamos su gestión financiera para impulsar el crecimiento de su negocio.",
    items: [
      "Asesoría de gestión de negocios especiales",
      "Revisión y verificación de impuestos",
      "Revisión y verificación de Estados Financieros",
      "Análisis y verificación de registros contables",
      "Asesoría especializada para declaración de renta (P/N – P/J)",
      "Asesoría especializada para información exógena (P/N – P/J)",
      "Consultoría internacional",
      "Servicio especializado en insolvencia (P/N – P/J)",
      "Liquidación y disolución de sociedades",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-tertiary-light py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-4">
            Lo que hacemos
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary max-w-3xl">
            Nuestras líneas de{" "}
            <span className="text-secondary">servicio</span>
          </h1>
          <p className="mt-6 text-lg text-dark/60 max-w-2xl">
            Tres direcciones especializadas que integran asesoría jurídica,
            auditoría y gestión de riesgos, y servicios contables para su
            organización.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                      <service.icon
                        size={28}
                        className="text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="h-px flex-1 bg-secondary/30" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-5">
                    {service.title}
                  </h2>
                  <p className="text-dark/60 leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>

                <div
                  className={`bg-secondary/15 rounded-2xl p-8 lg:p-10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50 mb-6">
                    Incluye
                  </h3>
                  {service.items ? (
                    <ul className="space-y-4">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <ChevronRight
                            size={18}
                            className="text-primary/40 mt-0.5 shrink-0"
                          />
                          <span className="text-dark/70">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-6">
                      {service.sections?.map((section) => (
                        <div key={section.subtitle}>
                          <h4 className="font-heading text-sm font-semibold text-primary mb-3">
                            {section.subtitle}
                          </h4>
                          {section.items.length > 0 && (
                            <ul className="space-y-3 ml-1">
                              {section.items.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <ChevronRight
                                    size={18}
                                    className="text-primary/40 mt-0.5 shrink-0"
                                  />
                                  <span className="text-dark/70">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Necesita un servicio personalizado?"
        subtitle="Cada empresa es única. Contáctenos para diseñar una solución a medida de sus necesidades."
      />
    </>
  );
}
