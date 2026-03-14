import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geltec.com"),
  title: {
    default: "Geltec Consultores | Asesoría en Riesgos, Compliance y Servicios Contables",
    template: "%s | Geltec Consultores",
  },
  description:
    "Geltec Consultores ofrece servicios profesionales de consultoría en riesgos, compliance, anticorrupción, contabilidad y tributación para empresas que buscan operar con transparencia.",
  keywords: [
    "compliance",
    "riesgos",
    "anticorrupción",
    "contabilidad",
    "tributación",
    "asesoría legal",
    "gestión de riesgos",
    "ética empresarial",
  ],
  openGraph: {
    title: "Geltec Consultores | Asesoría en Riesgos, Compliance y Servicios Contables",
    description:
      "Servicios profesionales de consultoría en riesgos, compliance, anticorrupción y servicios contables.",
    url: "https://www.geltec.com",
    siteName: "Geltec Consultores",
    locale: "es_CO",
    type: "website",
    images: ["/logo-geltec.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geltec Consultores | Asesoría en Riesgos, Compliance y Servicios Contables",
    description:
      "Servicios profesionales de consultoría en riesgos, compliance, anticorrupción y servicios contables.",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-geltec-icon.png",
    apple: "/logo-geltec-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#432818",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.geltec.com/#organization",
  name: "Geltec Consultores",
  url: "https://www.geltec.com",
  logo: "https://www.geltec.com/logo-geltec.png",
  description:
    "Firma colombiana de consultoría especializada en gestión de riesgos, compliance, anticorrupción, auditoría, servicios contables y tributarios para empresas que buscan operar con transparencia y cumplimiento normativo.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+573209104055",
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "contacto@geltec-consultores.com",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: [
    process.env.NEXT_PUBLIC_FACEBOOK_URL,
    process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    process.env.NEXT_PUBLIC_TWITTER_URL,
    process.env.NEXT_PUBLIC_TIKTOK_URL,
  ].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    addressCountry: "CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} antialiased grain-overlay`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Ir al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main id="main-content" className="pt-24 md:pt-32">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
