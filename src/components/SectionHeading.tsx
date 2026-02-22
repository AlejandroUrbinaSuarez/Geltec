export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
            light ? "text-secondary" : "text-primary/60"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-dark/60"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
