import Link from "next/link";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { MarketPreview } from "@/components/MarketPreview";
import { Reveal } from "@/components/motion/Reveal";

const btnEase =
  "transition-[transform,box-shadow,background-color,border-color,color,opacity] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] px-4 pb-24 pt-14 sm:px-6 sm:pt-20 lg:pb-32">
      <HeroBackdrop />
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div>
          <Reveal delay={0} y={12}>
            <p className="mb-5 inline-flex items-center rounded-full border border-white/[0.09] bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent backdrop-blur-sm">
              Africa connected, trade empowered
            </p>
          </Reveal>
          <Reveal delay={0.04} y={12}>
            <h1 className="text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.02em] sm:text-5xl lg:text-[3.35rem] lg:leading-[1.05]">
              Unifying Africa&apos;s capital markets — one simple app.
            </h1>
          </Reveal>
          <Reveal delay={0.1} y={12}>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-muted">
              38+ exchanges. $2.4 trillion in market cap. Soko 54 is the
              retail-first platform to invest across the continent with the
              same clarity and speed you expect from global trading apps —
              built for AfCFTA-era compliance from day one.
            </p>
          </Reveal>
          <Reveal delay={0.16} y={12}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/#waitlist"
                className={`${btnEase} inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-background shadow-lg shadow-accent/18 hover:-translate-y-px hover:shadow-xl hover:shadow-accent/22 active:translate-y-0 active:scale-[0.99]`}
              >
                Get early access
              </Link>
              <Link
                href="/demo"
                className={`${btnEase} inline-flex h-11 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] px-7 text-sm font-medium backdrop-blur-sm hover:border-accent/35 hover:bg-white/[0.06] hover:text-accent active:scale-[0.99]`}
              >
                See app preview
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.22} y={12}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-white/[0.08] pt-12 sm:max-w-md">
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Exchanges
                </dt>
                <dd className="mt-1.5 font-mono text-2xl font-semibold tabular-nums tracking-tight text-foreground">
                  38+
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Market cap
                </dt>
                <dd className="mt-1.5 font-mono text-2xl font-semibold tabular-nums tracking-tight text-foreground">
                  $2.4T
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  Retail today
                </dt>
                <dd className="mt-1.5 font-mono text-2xl font-semibold tabular-nums tracking-tight text-accent">
                  &lt;3%
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
        <div className="flex justify-center lg:justify-end">
          <MarketPreview />
        </div>
      </div>
    </section>
  );
}
