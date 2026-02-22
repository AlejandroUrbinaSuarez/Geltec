"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const consultTypes = [
  "Riesgos y Compliance",
  "Contabilidad y Tributación",
  "Anticorrupción y Ética",
  "Asesoría Legal",
  "Otro",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactoPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      type: formData.get("type") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Error al enviar el mensaje");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Error inesperado. Intente nuevamente."
      );
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-primary py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary/70 mb-4">
            Contáctenos
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">
            Hablemos sobre el{" "}
            <span className="text-secondary">futuro</span> de su empresa
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-2xl">
            Complete el formulario o contáctenos directamente. Responderemos en
            menos de 24 horas hábiles.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">
                Envíenos un mensaje
              </h2>

              {status === "success" ? (
                <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-green-800 mb-2">
                    Mensaje enviado con éxito
                  </h3>
                  <p className="text-green-600">
                    Gracias por contactarnos. Nos comunicaremos con usted
                    a la brevedad posible.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-dark/70 mb-2"
                      >
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                        placeholder="Su nombre"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark/70 mb-2"
                      >
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-dark/70 mb-2"
                      >
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-dark/70 mb-2"
                      >
                        Tipo de consulta *
                      </label>
                      <select
                        id="type"
                        name="type"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
                      >
                        <option value="">Seleccione una opción</option>
                        {consultTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-dark/70 mb-2"
                    >
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-secondary/30 bg-white text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all resize-none"
                      placeholder="Describa brevemente su consulta..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                      <AlertCircle size={20} className="text-red-500 shrink-0" />
                      <p className="text-sm text-red-600">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold text-sm tracking-wide rounded-lg hover:bg-primary-light transition-all duration-200 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-primary mb-8">
                Información de contacto
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark mb-1">Email</h3>
                    <p className="text-dark/60">contacto@geltec.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark mb-1">Teléfono</h3>
                    <p className="text-dark/60">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark mb-1">Ubicación</h3>
                    <p className="text-dark/60">Ciudad, País</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-dark mb-1">Horario</h3>
                    <p className="text-dark/60">Lunes a Viernes</p>
                    <p className="text-dark/60">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 h-64 rounded-2xl bg-tertiary border border-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary/30 mx-auto mb-2" />
                  <p className="text-sm text-dark/40">
                    Mapa — Configure con Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
