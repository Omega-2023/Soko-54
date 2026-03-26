"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MOCK_HOLDINGS } from "@/data/mock-holdings";
import { TradePrototypeSheet } from "@/components/TradePrototypeSheet";

const ease = [0.16, 1, 0.3, 1] as const;
const floatEase = [0.45, 0, 0.55, 1] as const;

export function MarketPreview() {
  const reduce = useReducedMotion();
  const [tradeMode, setTradeMode] = useState<"buy" | "sell" | null>(null);
  const [sheetInstance, setSheetInstance] = useState(0);

  function openTrade(mode: "buy" | "sell") {
    setSheetInstance((n) => n + 1);
    setTradeMode(mode);
  }

  return (
    <>
      <TradePrototypeSheet
        key={sheetInstance}
        mode={tradeMode}
        onClose={() => setTradeMode(null)}
        holdings={MOCK_HOLDINGS}
      />
      <motion.div
        className="relative w-full max-w-[340px]"
        initial={reduce ? false : { opacity: 0, y: 18, scale: 0.99 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ type: "tween", duration: 0.55, ease }}
      >
        <motion.div
          className="relative w-full transform-gpu will-change-transform"
          animate={reduce ? undefined : { y: [0, -5, 0] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: floatEase,
          }}
        >
          <div
            className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-accent/28 via-transparent to-gold/18 opacity-80 blur-md"
            aria-hidden
          />
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-surface-elevated/[0.92] shadow-[0_24px_56px_-16px_rgba(0,0,0,0.62)] backdrop-blur-sm"
            whileHover={reduce ? undefined : { scale: 1.006 }}
            transition={{ type: "tween", duration: 0.22, ease }}
          >
            <div className="border-b border-white/[0.07] px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Portfolio
              </p>
              <p className="mt-1.5 font-mono text-[1.65rem] font-semibold tabular-nums leading-none tracking-tight text-foreground sm:text-3xl">
                GH₵428,560
              </p>
              <p className="mt-2 text-sm tabular-nums text-accent">
                +GH₵2,786 (0.65%) today
              </p>
            </div>
            <div className="px-2 py-3">
              <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                Holdings
              </p>
              <ul className="space-y-px">
                {MOCK_HOLDINGS.map((h, i) => (
                  <motion.li
                    key={h.sym}
                    initial={reduce ? false : { opacity: 0, x: -10 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      type: "tween",
                      delay: 0.05 * i,
                      duration: 0.38,
                      ease,
                    }}
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors duration-200 ease-out hover:bg-white/[0.04]"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-dim text-[11px] font-bold text-accent">
                        {h.sym.slice(0, 2)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[15px] font-medium leading-snug">
                          {h.sym}
                        </p>
                        <p className="truncate text-xs leading-snug text-muted">
                          {h.name} · {h.ex}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 text-sm tabular-nums ${
                        h.up ? "text-accent" : "text-rose-400"
                      }`}
                    >
                      {h.ch}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-2 border-t border-white/[0.07] p-4">
              <button
                type="button"
                onClick={() => openTrade("buy")}
                className="rounded-xl bg-accent py-3 text-sm font-semibold text-background transition-[transform,opacity] duration-200 ease-out hover:opacity-95 active:scale-[0.98]"
              >
                Buy
              </button>
              <button
                type="button"
                onClick={() => openTrade("sell")}
                className="rounded-xl border border-white/[0.11] bg-white/[0.04] py-3 text-sm font-medium text-foreground transition-[border-color,background-color] duration-200 ease-out hover:border-accent/30 hover:bg-white/[0.06] active:scale-[0.98]"
              >
                Sell
              </button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
