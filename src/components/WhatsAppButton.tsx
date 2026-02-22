"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+1234567890";
  const message = encodeURIComponent(
    "Hola, me gustaría obtener más información sobre los servicios de Geltec."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
    </a>
  );
}
