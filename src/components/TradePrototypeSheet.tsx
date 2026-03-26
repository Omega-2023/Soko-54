"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import type { MockHolding } from "@/data/mock-holdings";

const ease = [0.16, 1, 0.3, 1] as const;

type TradeMode = "buy" | "sell";

type TradePrototypeSheetProps = {
  mode: TradeMode | null;
  onClose: () => void;
  holdings: MockHolding[];
};

export function TradePrototypeSheet({
  mode,
  onClose,
  holdings,
}: TradePrototypeSheetProps) {
  const titleId = useId();
  const [symbol, setSymbol] = useState(holdings[0]?.sym ?? "");
  const [qty, setQty] = useState("10");
  const [phase, setPhase] = useState<"form" | "submitting" | "done">("form");

  const handleClose = useCallback(() => {
    setPhase("form");
    setQty("10");
    setSymbol(holdings[0]?.sym ?? "");
    onClose();
  }, [holdings, onClose]);

  useEffect(() => {
    if (!mode) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mode, handleClose]);

  useEffect(() => {
    if (!mode) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mode]);

  const selected = holdings.find((h) => h.sym === symbol) ?? holdings[0];
  const qtyNum = Math.max(1, parseInt(qty, 10) || 1);

  function handleConfirm() {
    if (!mode || !selected) return;
    setPhase("submitting");
    window.setTimeout(() => setPhase("done"), 650);
  }

  function handleDone() {
    handleClose();
  }

  if (typeof document === "undefined") return null;

  const sheet = (
    <AnimatePresence>
      {mode && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-center p-4 sm:items-center"
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
        >
          <motion.button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/65 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-[380px] overflow-hidden rounded-2xl border border-white/[0.1] bg-surface-elevated shadow-[0_24px_64px_-12px_rgba(0,0,0,0.75)] ring-1 ring-inset ring-white/[0.05]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ type: "tween", duration: 0.32, ease }}
          >
            <div className="border-b border-white/[0.08] px-5 py-4">
              <p
                id={titleId}
                className="text-lg font-semibold tracking-tight text-foreground"
              >
                {mode === "buy" ? "Buy" : "Sell"}{" "}
                <span className="text-muted">(prototype)</span>
              </p>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">
                Simulated order only — no exchange, no cash movement.
              </p>
            </div>

            {phase === "done" ? (
              <div className="px-5 py-6">
                <div className="rounded-xl border border-accent/25 bg-accent-dim/30 px-4 py-4 text-center">
                  <p className="text-sm font-semibold text-accent">
                    {mode === "buy" ? "Buy" : "Sell"} queued (demo)
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {mode === "buy" ? "Bought" : "Sold"}{" "}
                    <span className="font-mono font-medium text-foreground">
                      {qtyNum}
                    </span>{" "}
                    share{qtyNum === 1 ? "" : "s"} of{" "}
                    <span className="font-mono font-medium text-foreground">
                      {selected?.sym}
                    </span>{" "}
                    on {selected?.ex}.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleDone}
                  className="mt-4 w-full rounded-xl bg-accent py-3 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-95 active:scale-[0.99]"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="px-5 py-5">
                <label className="block">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                    Security
                  </span>
                  <select
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    disabled={phase === "submitting"}
                    className="mt-2 w-full cursor-pointer rounded-xl border border-white/[0.1] bg-background/80 px-3 py-2.5 text-[15px] outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent/35 focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-surface-elevated disabled:opacity-50"
                  >
                    {holdings.map((h) => (
                      <option key={h.sym} value={h.sym}>
                        {h.sym} — {h.name} ({h.ex})
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-4 block">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                    Shares (mock)
                  </span>
                  <input
                    type="number"
                    min={1}
                    step={1}
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    disabled={phase === "submitting"}
                    className="mt-2 w-full rounded-xl border border-white/[0.1] bg-background/80 px-3 py-2.5 font-mono tabular-nums text-[15px] outline-none transition-[border-color,box-shadow] duration-200 focus:border-accent/35 focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-surface-elevated disabled:opacity-50"
                  />
                </label>
                <div className="mt-5 flex gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    disabled={phase === "submitting"}
                    className="flex-1 rounded-xl border border-white/[0.12] bg-white/[0.04] py-3 text-sm font-medium transition-opacity duration-200 hover:bg-white/[0.06] disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirm}
                    disabled={phase === "submitting"}
                    className="flex-1 rounded-xl bg-accent py-3 text-sm font-semibold text-background transition-opacity duration-200 hover:opacity-95 disabled:opacity-70"
                  >
                    {phase === "submitting" ? "Processing…" : "Confirm"}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return createPortal(sheet, document.body);
}
