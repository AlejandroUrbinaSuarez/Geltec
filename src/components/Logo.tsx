export default function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield shape */}
      <path
        d="M60 8L16 28V58C16 84.5 35 108 60 114C85 108 104 84.5 104 58V28L60 8Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M60 8L16 28V58C16 84.5 35 108 60 114C85 108 104 84.5 104 58V28L60 8Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* G letter inside */}
      <path
        d="M72 54H62V64H72C72 72.8 64.8 80 56 80C47.2 80 40 72.8 40 64V56C40 47.2 47.2 40 56 40C61.2 40 65.8 42.4 68.8 46.2"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
