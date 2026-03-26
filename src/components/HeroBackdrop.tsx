"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteImages } from "@/lib/site-images";

const easeInOut = [0.45, 0, 0.55, 1] as const;

export function HeroBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <Image
        src={siteImages.heroSkyline}
        alt=""
        fill
        priority
        quality={82}
        sizes="100vw"
        className="object-cover object-center opacity-[0.28] sm:opacity-[0.34]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/85" />
      <div className="bg-grid-fine absolute inset-0 opacity-45" />
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-1/4 top-0 h-[min(480px,75vw)] w-[min(480px,75vw)] transform-gpu rounded-full bg-accent/22 blur-[88px] will-change-transform md:blur-[100px]"
            animate={{ scale: [1, 1.06, 1], opacity: [0.32, 0.46, 0.32] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: easeInOut,
            }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-0 h-[min(400px,65vw)] w-[min(400px,65vw)] transform-gpu rounded-full bg-gold/12 blur-[76px] will-change-transform md:blur-[88px]"
            animate={{ scale: [1.04, 1, 1.04], opacity: [0.22, 0.36, 0.22] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: easeInOut,
              delay: 3,
            }}
          />
        </>
      )}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_-15%,rgba(52,211,153,0.1),transparent)]" />
    </div>
  );
}
