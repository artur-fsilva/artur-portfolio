import Link from "next/link";
import { MAIN_NAV_ITEMS, SITE_CONFIG } from "@/data/site";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

export function SiteHeader() {
  return (
    <header className="w-full py-6 sm:py-7">
      <Container>
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          <Link
            href="/"
            aria-label={`${SITE_CONFIG.brandShort} — Página inicial`}
            className="text-ink flex shrink-0 items-baseline gap-2.5 transition-opacity hover:opacity-80"
          >
            <span className="font-display text-xl leading-none tracking-tight">
              {SITE_CONFIG.brandShort}
            </span>
            <span className="text-ink/70 text-xs tracking-[0.2em] uppercase" aria-hidden="true">
              /
            </span>
            <span className="text-ink/85 text-[11px] font-medium tracking-[0.22em] uppercase">
              {SITE_CONFIG.brandLabel}
            </span>
          </Link>

          <div className="bg-rule hidden h-px flex-1 sm:block" aria-hidden="true" />

          <nav
            aria-label="Navegação principal"
            className="flex shrink-0 items-center gap-5 sm:gap-8"
          >
            {MAIN_NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
