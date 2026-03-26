import { SectionImageBg } from "@/components/SectionImageBg";
import { Reveal } from "@/components/motion/Reveal";
import { siteImages } from "@/lib/site-images";

const problems = [
  {
    title: "Fragmented exchanges",
    body: "38 independent markets with different rules, settlement, and currencies make cross-border investing slow and expensive.",
  },
  {
    title: "Retail locked out",
    body: "Retail participation sits under 3%. Most liquidity stays with institutions while everyday investors lack a clear path in.",
  },
  {
    title: "Diaspora capital idle",
    body: "Over $53B in remittances each year — with few seamless ways to recycle that capital into listed African companies.",
  },
];

const solutions = [
  {
    title: "Single access point",
    body: "One account to reach multiple African exchanges — from Lagos to Johannesburg — in a unified mobile-first experience.",
  },
  {
    title: "Frictionless UX",
    body: "Fast digital onboarding, transparent pricing, and settlement designed for clarity, not paperwork.",
  },
  {
    title: "Retail inclusion",
    body: "Built so millions of Africans and the diaspora can own a stake in the continent’s growth story.",
  },
  {
    title: "AfCFTA alignment",
    body: "Structured for compliance with the AfCFTA Investment Protocol as markets harmonize.",
  },
];

const cardEase =
  "transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]";

export function ProblemSolution() {
  return (
    <section
      id="vision"
      className="relative overflow-hidden border-b border-white/[0.06] px-4 py-24 sm:px-6"
    >
      <SectionImageBg src={siteImages.visionGlobe} overlay="emerald" />
      <div
        className="bg-grid-fine pointer-events-none absolute inset-0 opacity-35"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <Reveal y={12}>
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl sm:leading-[1.12]">
              Fragmented access means lost opportunity
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65] text-muted">
              Today’s infrastructure limits wealth creation and capital mobility
              across Africa. Soko 54 exists to remove that friction.
            </p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3 md:gap-6">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i} y={12}>
              <article
                className={`${cardEase} h-full rounded-2xl border border-white/[0.08] bg-surface/75 p-6 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.03] backdrop-blur-sm hover:-translate-y-0.5 hover:border-gold/25`}
              >
                <h3 className="text-[15px] font-semibold text-gold">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08} y={12}>
          <h3 className="mt-28 text-2xl font-semibold tracking-[-0.02em]">
            The Soko 54 platform
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
            Robinhood-grade simplicity meets pan-African reach — one stack for
            discovery, execution, and transparent reporting.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={0.06 * i} y={12}>
              <article
                className={`${cardEase} flex h-full gap-4 rounded-2xl border border-white/[0.08] bg-surface-elevated/45 p-6 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.4)] ring-1 ring-inset ring-white/[0.03] backdrop-blur-sm hover:-translate-y-px hover:border-accent/22`}
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-dim text-sm text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                <div>
                  <h4 className="text-[15px] font-semibold">{s.title}</h4>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {s.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
