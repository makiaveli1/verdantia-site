type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M31.2 51.8C29 39.8 23.5 25.2 7.7 10.2c11.4 1.3 20.5 15.4 23.5 30.2 3-14.8 12.1-28.9 23.5-30.2C38.9 25.2 33.4 39.8 31.2 51.8Z"
        fill="currentColor"
      />
      <path
        d="M10.5 40.5c10.4-10.7 31-10.7 41.4 0"
        fill="none"
        stroke="var(--brand-gold)"
        strokeLinecap="round"
        strokeWidth="4.2"
      />
    </svg>
  );
}
