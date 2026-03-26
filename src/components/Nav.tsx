import Link from "next/link";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/#vision", label: "Vision" },
  { href: "/#markets", label: "Markets" },
  { href: "/#roadmap", label: "Roadmap" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-background/80 backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color] duration-300 ease-out supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-[3.625rem] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight transition-opacity duration-200 ease-out hover:opacity-90"
        >
          <Logo size={30} className="shrink-0 shadow-md shadow-accent/12" />
          <span className="text-[15px]">Soko 54</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-[13px] font-medium text-muted transition-colors duration-200 ease-out hover:bg-white/[0.04] hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/demo"
            className="hidden text-[13px] font-medium text-muted transition-colors duration-200 ease-out hover:text-foreground sm:inline"
          >
            App preview
          </Link>
          <Link
            href="/#waitlist"
            className="rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-background shadow-md shadow-accent/18 transition-[transform,opacity,box-shadow] duration-200 ease-out hover:opacity-95 hover:shadow-accent/25 active:scale-[0.98]"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
