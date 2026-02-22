import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad y protección de datos personales de Geltec Consultores.",
};

export default function PrivacidadPage() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
          Política de Privacidad
        </h1>
        <p className="text-sm text-dark/40 mb-12">
          Última actualización: Febrero 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="font-heading text-xl font-bold text-primary mb-3">
              1. Información que Recopilamos
            </h2>
            <p className="text-dark/60 leading-relaxed">
              Recopilamos información que usted nos proporciona directamente a
              través de nuestro formulario de contacto, incluyendo su nombre,
              correo electrónico, número de teléfono y el contenido de su
              mensaje. No recopilamos información de navegación de forma
              automática más allá de lo estrictamente necesario para el
              funcionamiento del sitio.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-primary mb-3">
              2. Uso de la Información
            </h2>
            <p className="text-dark/60 leading-relaxed">
              La información recopilada se utiliza exclusivamente para responder
              a sus consultas, proporcionarle información sobre nuestros
              servicios y mejorar la experiencia de usuario en nuestro sitio web.
              No compartimos su información con terceros sin su consentimiento
              expreso.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-primary mb-3">
              3. Protección de Datos
            </h2>
            <p className="text-dark/60 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas
              adecuadas para proteger su información personal contra acceso no
              autorizado, alteración, divulgación o destrucción. Mantenemos
              prácticas de seguridad alineadas con los estándares de la
              industria.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-primary mb-3">
              4. Sus Derechos
            </h2>
            <p className="text-dark/60 leading-relaxed">
              Usted tiene derecho a acceder, rectificar, cancelar u oponerse al
              tratamiento de sus datos personales. Para ejercer estos derechos o
              realizar cualquier consulta relacionada con su privacidad, puede
              contactarnos a través de nuestro formulario de contacto o
              directamente al correo contacto@geltec.com.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-primary mb-3">
              5. Cambios en esta Política
            </h2>
            <p className="text-dark/60 leading-relaxed">
              Nos reservamos el derecho de actualizar esta política de
              privacidad en cualquier momento. Cualquier cambio será publicado en
              esta página con la fecha de última actualización correspondiente.
            </p>
          </div>

          <div className="pt-8 border-t border-secondary/20">
            <p className="text-sm text-dark/40">
              Si tiene preguntas sobre esta política de privacidad, contáctenos
              en contacto@geltec.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
