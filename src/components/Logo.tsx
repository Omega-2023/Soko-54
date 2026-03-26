type LogoProps = {
  /** Pixel width & height */
  size?: number;
  className?: string;
};

/**
 * Soko 54 mark: rising bars on an emerald tile — reads as markets + growth.
 */
export function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect width="32" height="32" rx="9" className="fill-accent" />
      <rect
        x="8"
        y="18"
        width="4"
        height="8"
        rx="1.25"
        className="fill-background"
      />
      <rect
        x="14"
        y="13"
        width="4"
        height="13"
        rx="1.25"
        className="fill-background"
      />
      <rect
        x="20"
        y="8"
        width="4"
        height="18"
        rx="1.25"
        className="fill-background"
      />
      <circle cx="25" cy="7" r="2.25" className="fill-gold" />
    </svg>
  );
}
