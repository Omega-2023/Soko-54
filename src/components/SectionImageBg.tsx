"use client";

import Image from "next/image";

type SectionImageBgProps = {
  src: string;
  /** 0–1 visual strength of the photo */
  strength?: "subtle" | "medium";
  priority?: boolean;
  /** Extra gradient / scrim layers */
  overlay: "dark" | "darker" | "emerald";
};

const strengthClass = {
  subtle: "opacity-[0.12] sm:opacity-[0.16]",
  medium: "opacity-[0.18] sm:opacity-[0.24]",
} as const;

const overlayClass = {
  dark: "bg-gradient-to-b from-background/45 via-background/90 to-background",
  darker: "bg-gradient-to-b from-background/62 via-background/93 to-background",
  emerald:
    "bg-gradient-to-br from-background/72 via-background/86 to-emerald-950/28",
} as const;

export function SectionImageBg({
  src,
  strength = "subtle",
  priority = false,
  overlay,
}: SectionImageBgProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        quality={78}
        loading={priority ? "eager" : "lazy"}
        className={`object-cover ${strengthClass[strength]}`}
        priority={priority}
      />
      <div className={`absolute inset-0 ${overlayClass[overlay]}`} />
    </div>
  );
}
