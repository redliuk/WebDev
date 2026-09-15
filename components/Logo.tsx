export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="1.5" opacity="0.35" />
      <path
        d="M24 39V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 26c-7 0-11-4-11-11 7 0 11 4 11 11Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M24 21c0-6 4-10 11-10 0 6-4 10-11 10Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
