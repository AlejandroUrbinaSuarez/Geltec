import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Geltec | Asesoría en Riesgos, Compliance y Servicios Contables",
    template: "%s | Geltec",
  },
  description:
    "Geltec ofrece servicios profesionales de consultoría en riesgos, compliance, anticorrupción, contabilidad y tributación para empresas que buscan operar con transparencia.",
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
    title: "Geltec | Asesoría en Riesgos, Compliance y Servicios Contables",
    description:
      "Servicios profesionales de consultoría en riesgos, compliance, anticorrupción y servicios contables.",
    type: "website",
    locale: "es_ES",
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
        className={`${playfair.variable} ${dmSans.variable} antialiased grain-overlay`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
