import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-[8rem] leading-none font-bold text-secondary sm:text-[10rem]">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-primary sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-4 max-w-md text-lg text-primary-light">
        Lo sentimos, la página que busca no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="mt-10 inline-block rounded-2xl bg-primary px-8 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
