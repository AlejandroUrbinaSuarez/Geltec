"use client";

import { useEffect } from "react";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary-light">
          <AlertTriangle className="h-10 w-10 text-primary" strokeWidth={1.5} />
        </div>

        <h1 className="mb-3 text-2xl font-bold text-primary md:text-3xl">
          Algo sali&oacute; mal
        </h1>

        <p className="mb-8 text-base text-primary-light/80">
          Lo sentimos, ha ocurrido un error inesperado. Por favor, intente
          nuevamente.
        </p>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reintentar
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-secondary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary-light focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <Home className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </section>
  );
}
