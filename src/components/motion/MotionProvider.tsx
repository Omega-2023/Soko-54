"use client";

import { MotionConfig } from "framer-motion";

const defaultTransition = {
  type: "tween" as const,
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1] as const,
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={defaultTransition}>
      {children}
    </MotionConfig>
  );
}
