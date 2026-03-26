"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { siteImages } from "@/lib/site-images";

const ease = [0.16, 1, 0.3, 1] as const;

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/[0.1] bg-surface-elevated/90 px-4 py-3 text-[15px] text-foreground outline-none transition-[border-color,box-shadow] duration-200 ease-out placeholder:text-muted/55 focus:border-accent/35 focus:ring-2 focus:ring-[var(--ring)] focus:ring-offset-2 focus:ring-offset-background";

export function WaitlistForm() {
  const reduceMotion = useReducedMotion();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("done");
  }

  return (
    <section
      id="waitlist"
      className="px-4 py-24 sm:px-6"
      aria-labelledby="waitlist-heading"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal y={12}>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] shadow-[0_28px_64px_-20px_rgba(0,0,0,0.55)] ring-1 ring-inset ring-white/[0.04]">
            <div className="pointer-events-none absolute inset-0" aria-hidden>
              <Image
                src={siteImages.waitlistNight}
                alt=""
                fill
                sizes="(max-width: 1152px) 100vw, 1152px"
                quality={78}
                className="object-cover object-center opacity-[0.22]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background/94 to-emerald-950/18" />
              <div className="bg-grid-fine absolute inset-0 opacity-32" />
            </div>
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 transform-gpu rounded-full bg-accent/18 blur-[72px] will-change-transform"
                animate={{ opacity: [0.3, 0.48, 0.3], scale: [1, 1.06, 1] }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: [0.45, 0, 0.55, 1],
                }}
                aria-hidden
              />
            )}
            <div className="relative p-8 sm:p-12 lg:p-14">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div>
                  <h2
                    id="waitlist-heading"
                    className="text-balance text-3xl font-semibold tracking-[-0.02em] sm:text-4xl"
                  >
                    Join the waitlist
                  </h2>
                  <p className="mt-5 text-[15px] leading-relaxed text-muted">
                    Be first to know when Soko 54 opens in your market. No spam
                    — product updates and launch regions only.
                  </p>
                  <ul className="mt-8 space-y-3 text-[14px] leading-snug text-muted">
                    <li className="flex gap-2.5">
                      <span className="text-accent">→</span>
                      Early app access in pilot countries
                    </li>
                    <li className="flex gap-2.5">
                      <span className="text-accent">→</span>
                      Educational content on cross-border investing
                    </li>
                  </ul>
                </div>
                {status === "done" ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease }}
                    className="rounded-2xl border border-accent/28 bg-accent-dim/25 p-8 text-center shadow-inner ring-1 ring-inset ring-white/[0.04] backdrop-blur-sm"
                  >
                    <p className="text-lg font-semibold text-accent">
                      You&apos;re on the list.
                    </p>
                    <p className="mt-2 text-[14px] text-muted">
                      We&apos;ll reach out at {email} when your region goes
                      live.
                    </p>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 rounded-2xl border border-white/[0.09] bg-background/50 p-6 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] ring-1 ring-inset ring-white/[0.03] backdrop-blur-sm sm:p-8"
                  >
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Email
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={fieldClass}
                      />
                    </label>
                    <label className="block">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Country (optional)
                      </span>
                      <input
                        type="text"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. Nigeria, UK, US"
                        className={fieldClass}
                      />
                    </label>
                    <button
                      type="submit"
                      className="mt-1 rounded-xl bg-accent py-3.5 text-sm font-semibold text-background shadow-md shadow-accent/15 transition-[transform,opacity,box-shadow] duration-200 ease-out hover:opacity-95 hover:shadow-accent/22 active:scale-[0.99]"
                    >
                      Request access
                    </button>
                    <p className="text-center text-[12px] leading-relaxed text-muted">
                      Demo only — connect a backend (e.g. Resend, Supabase) to
                      store signups.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
