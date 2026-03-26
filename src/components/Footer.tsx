import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/[0.06] px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 sm:flex-row sm:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold transition-opacity duration-200 ease-out hover:opacity-90"
        >
          <Logo size={30} className="shrink-0 opacity-95" />
          <span className="text-[15px]">Soko 54</span>
        </Link>
        <p className="max-w-md text-center text-[13px] leading-relaxed text-muted sm:text-left">
          Vision deck concept — not investment advice. Markets involve risk.
        </p>
        <div className="flex gap-8 text-[13px] font-medium text-muted">
          <Link
            href="/demo"
            className="transition-colors duration-200 ease-out hover:text-foreground"
          >
            Demo
          </Link>
          <Link
            href="/#vision"
            className="transition-colors duration-200 ease-out hover:text-foreground"
          >
            Vision
          </Link>
        </div>
      </div>
    </footer>
  );
}
