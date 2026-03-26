"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionImageBg } from "@/components/SectionImageBg";
import { Reveal } from "@/components/motion/Reveal";
import { siteImages } from "@/lib/site-images";

const milestones = [
  {
    period: "Q4 2025",
    title: "Regulatory alignment",
    body: "Full alignment with the AfCFTA framework and pilot-country approvals.",
  },
  {
    period: "Q2 2026",
    title: "Pilot launch",
    body: "Live testing in Ghana, Nigeria, and South Africa.",
  },
  {
    period: "Q4 2026",
    title: "Beta rollout",
    body: "Retail and diaspora onboarding with secure transaction flows.",
  },
  {
    period: "2027",
    title: "Pan-African scale",
    body: "Unified market access across the continent, built for rapid growth.",
  },
];

export function Roadmap() {
  const reduce = useReducedMotion();

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden border-b border-white/[0.06] px-4 py-24 sm:px-6"
    >
      <SectionImageBg
        src={siteImages.roadmapAbstract}
        overlay="darker"
        strength="subtle"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(52,211,153,0.07),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal y={12}>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl sm:leading-[1.12]">
            Integration roadmap
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            From regulatory groundwork to retail launch — a clear path to a
            connected, investable Africa.
          </p>
        </Reveal>
        <ol className="relative mt-16 space-y-0 border-l border-white/[0.1] pl-8 md:pl-10">
          {milestones.map((m, i) => (
            <li key={m.period} className="relative pb-14 last:pb-0">
              <motion.span
                className="absolute -left-[calc(0.5rem+1px)] top-1.5 z-10 flex h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-accent shadow-[0_0_14px_rgba(52,211,153,0.35)] md:-left-[calc(0.625rem+1px)]"
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: 0.05 * i,
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                  mass: 0.85,
                }}
                aria-hidden
              />
              <Reveal delay={0.06 * i} y={10}>
                <div>
                  <p className="font-mono text-[13px] font-semibold tabular-nums text-accent">
                    {m.period}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight">
                    {m.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-muted">
                    {m.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
