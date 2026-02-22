import type { Metadata } from "next";
import { Target, Eye, Heart, Shield, Lightbulb, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conozca a Geltec: nuestra misión, visión, valores y el equipo de profesionales que respalda cada solución.",
};

const values = [
  {
    icon: Shield,
    title: "Integridad",
    description:
      "Actuamos con transparencia y honestidad en cada interacción, manteniendo los más altos estándares éticos.",
  },
  {
    icon: Lightbulb,
    title: "Excelencia",
    description:
      "Buscamos la mejora continua en cada servicio, aplicando las mejores prácticas y metodologías internacionales.",
  },
  {
    icon: Handshake,
    title: "Compromiso",
    description:
      "Nos involucramos profundamente con cada cliente, entendiendo sus desafíos como propios.",
  },
];

const team = [
  {
    name: "Director General",
    role: "Dirección Estratégica",
    description: "Liderazgo en gestión de riesgos y compliance corporativo con más de 20 años de experiencia.",
  },
  {
    name: "Director de Compliance",
    role: "Cumplimiento Normativo",
    description: "Especialista en programas de prevención de lavado de activos y regulación financiera.",
  },
  {
    name: "Director Contable",
    role: "Servicios Contables y Tributarios",
    description: "Experto en planificación tributaria y normas internacionales de información financiera.",
  },
  {
    name: "Director Legal",
    role: "Asesoría Legal Corporativa",
    description: "Amplia experiencia en derecho corporativo, contratos y gobierno corporativo.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70 mb-4">
            Quiénes somos
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Profesionales comprometidos con la{" "}
            <span className="text-secondary">excelencia</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl">
            Somos un equipo multidisciplinario dedicado a proteger y fortalecer
            la integridad de las organizaciones.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <Target size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-dark/60 leading-relaxed text-lg">
                Brindar asesoría integral de excelencia en gestión de riesgos,
                compliance, anticorrupción y servicios contables, ayudando a
                nuestros clientes a operar con transparencia, cumplir con la
                normativa vigente y generar valor sostenible para sus
                organizaciones y la sociedad.
              </p>
            </div>

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <Eye size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-dark/60 leading-relaxed text-lg">
                Ser la firma de referencia en asesoría de riesgos y compliance
                en la región, reconocida por la calidad de nuestros servicios,
                la integridad de nuestro equipo y el impacto positivo que
                generamos en la cultura corporativa de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-tertiary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Lo que nos define"
            title="Nuestros Valores"
            subtitle="Principios que guían cada decisión y cada interacción con nuestros clientes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 lg:p-10 bg-white rounded-2xl border border-secondary/15 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <value.icon
                    size={28}
                    className="text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-dark/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nuestro Equipo"
            title="Liderazgo y experiencia"
            subtitle="Un equipo de profesionales con amplia trayectoria en sus áreas de especialización."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group text-center"
              >
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center border-4 border-white shadow-lg">
                  <span className="font-heading text-2xl font-bold text-primary/50">
                    {member.name.split(" ").map((w) => w[0]).join("")}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary/50 uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-dark/50 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quiere conocer más sobre nuestro equipo?"
        subtitle="Estamos listos para conversar sobre cómo podemos ayudar a su empresa."
      />
    </>
  );
}
