import type { Metadata } from "next";
import { Target, Eye, Shield, Lightbulb, Handshake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ObjectiveCard from "@/components/ObjectiveCard";

export const metadata: Metadata = {
  alternates: { canonical: "/nosotros" },
  title: "Nosotros",
  description:
    "Conozca a Geltec Consultores: nuestra misión, visión, valores y el equipo de profesionales que respalda cada solución.",
  openGraph: {
    title: "Nosotros",
    description:
      "Conozca a Geltec Consultores: nuestra misión, visión, valores y el equipo de profesionales que respalda cada solución.",
    url: "https://www.geltec.com/nosotros",
    siteName: "Geltec Consultores",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros",
    description:
      "Conozca a Geltec Consultores: nuestra misión, visión, valores y el equipo de profesionales que respalda cada solución.",
  },
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://www.geltec.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Nosotros",
      item: "https://www.geltec.com/nosotros",
    },
  ],
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {/* Header */}
      <section className="relative bg-tertiary-light py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/60 mb-4">
            Quiénes somos
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary max-w-3xl">
            Profesionales comprometidos con la{" "}
            <span className="text-secondary">excelencia</span>
          </h1>
          <p className="mt-6 text-lg text-dark/60 max-w-2xl">
            Somos un equipo multidisciplinario dedicado a proteger y fortalecer
            la integridad de las organizaciones.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Subtle atmosphere */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Misión */}
            <div className="relative lg:pr-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <Target size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  Nuestra Misión
                </h2>
              </div>
              <p className="text-dark/60 leading-relaxed text-lg">
                La firma redefine el ejercicio estratégico legal, tributario y
                financiero, cuestionando lo establecido y reconstruyendo
                soluciones desde cero para impulsar a sus clientes más allá del
                cumplimiento: hacia la expansión, la ventaja competitiva y el
                liderazgo empresarial. Actuamos con intensidad, disciplina y
                ejecución implacable, porque no entramos al mercado a participar,
                entramos a transformar.
              </p>
            </div>

            {/* Vertical divider (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-secondary/30" />

            {/* Visión */}
            <div className="relative lg:pl-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <Eye size={28} className="text-primary" strokeWidth={1.5} />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                  Nuestra Visión
                </h2>
              </div>
              <p className="text-dark/60 leading-relaxed text-lg">
                Ser la firma que redefine el estándar del sector en Colombia,
                reconocida no solo por su excelencia técnica, sino por su
                pensamiento audaz, su acción decidida y su capacidad de convertir
                la presión en crecimiento. Construimos liderazgo a través del
                coraje sostenido, donde cada desafío es una oportunidad de
                reconstrucción y cada fracaso es retroalimentación para
                evolucionar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="relative py-24 lg:py-32 bg-tertiary-light overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-3xl translate-y-1/3" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hacia dónde vamos"
            title="Objetivos Estratégicos"
            subtitle="Los pilares que guían nuestra evolución y el impacto que generamos en cada cliente."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            <ObjectiveCard
              number="01"
              title="Liderazgo y Posicionamiento"
              items={[
                "Redefinir el estándar del sector mediante la creación y difusión de metodologías propias en estrategia legal, tributaria y financiera.",
                "Expandir la presencia nacional e internacional, posicionando a Geltec como referente en pensamiento audaz y ejecución intrépida.",
                "Construir autoridad técnica a través de publicaciones, análisis especializados y participación en escenarios de alto impacto empresarial.",
                "Convertirse en la firma elegida por grandes organizaciones que buscan crecimiento sin importar la presión, no solo cumplimiento.",
              ]}
            />
            <ObjectiveCard
              number="02"
              title="Innovación y Reconstrucción Estratégica"
              items={[
                "Cuestionar sistemáticamente las suposiciones del sector, incorporando procesos de análisis crítico en cada proyecto.",
                "Desmantelar limitaciones estructurales en los modelos legales, tributarios y financieros de los clientes para habilitar nuevas ventajas competitivas.",
                "Diseñar soluciones desde cero, evitando enfoques tradicionales cuando no generan diferenciación o expansión.",
                "Transformar cada desafío en un laboratorio de reconstrucción, documentando aprendizajes y modelos replicables.",
              ]}
            />
            <ObjectiveCard
              number="03"
              title="Ejecución y Resultados"
              items={[
                "Operar con intensidad, disciplina y acción implacable en todos los proyectos, garantizando entregables de alto impacto.",
                "Convertir la presión en crecimiento, estableciendo métricas que midan la capacidad de respuesta en escenarios complejos.",
                "Integrar el fracaso como retroalimentación estratégica, con ciclos de revisión que fortalezcan la toma de decisiones.",
                "Asegurar que cada cliente experimente expansión real, ya sea en eficiencia, competitividad, estructura o liderazgo.",
              ]}
            />
            <ObjectiveCard
              number="04"
              title="Cultura y Talento"
              items={[
                "Fomentar una cultura de pensamiento audaz, donde las ideas disruptivas sean la norma, no la excepción.",
                "Promover la acción decidida, evitando la parálisis por análisis y privilegiando la ejecución estratégica.",
                "Desarrollar equipos capaces de sostener el coraje en el tiempo, incluso en escenarios de alta presión.",
                "Instalar la mentalidad de que el verdadero espíritu empresarial comienza donde termina la comodidad, impulsando la evolución continua.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-secondary/15">
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
                className="p-8 lg:p-10 bg-secondary/10 rounded-2xl border border-secondary/15 text-center"
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
