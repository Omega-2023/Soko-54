"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash() {
  const { hash } = window.location;
  if (!hash || hash.length < 2) return;
  const id = decodeURIComponent(hash.slice(1));
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/** Scrolls to `#id` on `/` when the hash is present or changes (cross-page or in-page). */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    scrollToHash();
    const t = window.setTimeout(scrollToHash, 80);

    const onHashChange = () => scrollToHash();
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
