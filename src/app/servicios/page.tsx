import type { Metadata } from "next";
import {
  ShieldCheck,
  Calculator,
  Scale,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios profesionales de consultoría en riesgos, compliance, anticorrupción, contabilidad y asesoría legal corporativa.",
};

const services = [
  {
    icon: ShieldCheck,
    title: "Consultoría de Riesgos y Compliance",
    description:
      "Diseñamos e implementamos programas integrales de gestión de riesgos y cumplimiento normativo que protegen a su organización y generan valor sostenible.",
    items: [
      "Evaluación y mapeo de riesgos corporativos",
      "Diseño de programas de compliance",
      "Prevención de lavado de activos (PLA/FT)",
      "Due diligence y conocimiento del cliente (KYC)",
      "Auditorías de cumplimiento normativo",
      "Capacitación y cultura de compliance",
    ],
  },
  {
    icon: Calculator,
    title: "Servicios Contables y Tributarios",
    description:
      "Soluciones contables y tributarias que van más allá del cumplimiento: optimizamos su gestión financiera para impulsar el crecimiento de su negocio.",
    items: [
      "Contabilidad general y financiera",
      "Declaraciones y planificación tributaria",
      "Auditoría contable y financiera",
      "Informes financieros bajo NIIF/IFRS",
      "Asesoría en precios de transferencia",
      "Gestión de obligaciones fiscales",
    ],
  },
  {
    icon: Scale,
    title: "Anticorrupción y Ética Empresarial",
    description:
      "Construimos una cultura de integridad en su organización a través de programas anticorrupción sólidos y mecanismos de prevención efectivos.",
    items: [
      "Programas anticorrupción y antisoborno",
      "Códigos de ética y conducta corporativa",
      "Canal de denuncias confidencial",
      "Investigaciones internas",
      "Monitoreo y mejora continua",
      "Formación en ética empresarial",
    ],
  },
  {
    icon: Briefcase,
    title: "Asesoría Legal Corporativa",
    description:
      "Acompañamiento jurídico estratégico para que cada decisión de su empresa esté respaldada por un marco legal sólido y actualizado.",
    items: [
      "Asesoría en derecho corporativo y societario",
      "Revisión y redacción de contratos",
      "Regulación sectorial y normativa",
      "Gobierno corporativo",
      "Protección de datos personales",
      "Acompañamiento en procesos regulatorios",
    ],
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70 mb-4">
            Lo que hacemos
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Servicios profesionales para empresas{" "}
            <span className="text-secondary">íntegras</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl">
            Un enfoque multidisciplinario que integra gestión de riesgos,
            cumplimiento normativo, servicios contables y asesoría legal en una
            sola solución.
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
                  className={`bg-tertiary-light rounded-2xl p-8 lg:p-10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-primary/50 mb-6">
                    Incluye
                  </h3>
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
