import type { Metadata } from "next";

export const metadata: Metadata = {
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

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
