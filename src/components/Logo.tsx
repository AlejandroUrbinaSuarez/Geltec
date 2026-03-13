import Image from "next/image";

const variants = {
  color: { src: "/logo-geltec.png", ratio: 235 / 211 },
  white: { src: "/logo-geltec-white.png", ratio: 235 / 211 },
  icon: { src: "/logo-geltec-icon.png", ratio: 95 / 121 },
} as const;

type LogoVariant = keyof typeof variants;

export default function Logo({
  className = "",
  height = 40,
  variant = "color",
}: {
  className?: string;
  height?: number;
  variant?: LogoVariant;
}) {
  const { src, ratio } = variants[variant];
  return (
    <Image
      src={src}
      alt="Geltec Consultores"
      height={height}
      width={Math.round(height * ratio)}
      className={`object-contain ${className}`}
      priority
    />
  );
}
