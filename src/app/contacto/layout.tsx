import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contacto" },
  title: "Contacto",
  description:
    "Contáctenos para una consulta personalizada en riesgos, compliance, contabilidad o asesoría legal. Responderemos en menos de 24 horas.",
  openGraph: {
    title: "Contacto",
    description:
      "Contáctenos para una consulta personalizada en riesgos, compliance, contabilidad o asesoría legal. Responderemos en menos de 24 horas.",
    url: "https://www.geltec.com/contacto",
    siteName: "Geltec Consultores",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto",
    description:
      "Contáctenos para una consulta personalizada en riesgos, compliance, contabilidad o asesoría legal. Responderemos en menos de 24 horas.",
  },
};

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
      name: "Contacto",
      item: "https://www.geltec.com/contacto",
    },
  ],
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}
