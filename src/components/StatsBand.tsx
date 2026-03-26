import { SectionImageBg } from "@/components/SectionImageBg";
import { Reveal } from "@/components/motion/Reveal";
import { siteImages } from "@/lib/site-images";

const stats = [
  {
    value: "$2.4T",
    label: "Combined market cap ready for digitization and deeper liquidity.",
  },
  {
    value: "1.4B",
    label: "Young population — the next generation of global retail investors.",
  },
  {
    value: "100M+",
    label: "Addressable retail & diaspora investors seeking reliable access.",
  },
];

export function StatsBand() {
  return (
    <section
      id="markets"
      className="relative overflow-hidden border-b border-white/[0.06] px-4 py-20 sm:px-6"
    >
      <SectionImageBg
        src={siteImages.marketsTerminal}
        overlay="dark"
        strength="medium"
      />
      <div
        className="bg-grid-fine pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={0.06 * i} y={12}>
            <div className="group h-full rounded-2xl border border-white/[0.08] bg-accent-dim/20 p-8 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-[0_20px_48px_-14px_rgba(0,0,0,0.5)]">
              <p className="font-mono text-4xl font-semibold tabular-nums tracking-tight text-accent sm:text-[2.75rem] sm:leading-none">
                {s.value}
              </p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
