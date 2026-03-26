import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MarketPreview } from "@/components/MarketPreview";

const watchlist = [
  { sym: "ACCESS", name: "Access Bank", price: "₦27.45", ch: "+0.55%", up: true },
  { sym: "SBK", name: "Standard Bank", price: "R185.20", ch: "-0.12%", up: false },
  { sym: "EGL", name: "Ecobank", price: "₵8.12", ch: "+1.02%", up: true },
];

export default function DemoPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex-1 max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <Link
          href="/"
          className="text-[13px] font-medium text-muted transition-colors duration-200 ease-out hover:text-accent"
        >
          ← Back to home
        </Link>
        <h1 className="mt-8 text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
          App preview
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
          Static mock of a Robinhood-style experience for African listings —
          not connected to live markets.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <MarketPreview />
          </div>
          <div className="rounded-3xl border border-white/[0.09] bg-surface-elevated/40 p-7 shadow-[0_20px_48px_-16px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.04] backdrop-blur-sm sm:p-8">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Watchlist
            </h2>
            <ul className="mt-5 divide-y divide-white/[0.06]">
              {watchlist.map((w) => (
                <li
                  key={w.sym}
                  className="flex items-center justify-between py-4 first:pt-0 transition-colors duration-200 hover:bg-white/[0.02] sm:px-1"
                >
                  <div>
                    <p className="text-[15px] font-semibold">{w.sym}</p>
                    <p className="text-[13px] text-muted">{w.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-sm tabular-nums">{w.price}</p>
                    <p
                      className={`text-sm tabular-nums ${
                        w.up ? "text-accent" : "text-rose-400"
                      }`}
                    >
                      {w.ch}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border border-dashed border-white/[0.1] bg-background/25 p-4 text-center text-[13px] leading-relaxed text-muted">
              Chart, orders, and KYC would plug in here in a production build.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
