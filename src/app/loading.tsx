export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div
        className="h-8 w-8 rounded-full border-[3px] border-secondary border-t-primary animate-spin"
        role="status"
        aria-label="Cargando"
      />
    </div>
  );
}
