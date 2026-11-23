import { SITE_CONFIG } from "@/data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="mt-16 w-full pb-8 sm:mt-20">
      <Container>
        <div className="border-rule flex flex-col items-start justify-between gap-3 border-t pt-5 sm:flex-row sm:items-center">
          <div className="text-ink flex items-baseline gap-2.5">
            <span className="font-display text-base leading-none tracking-tight">
              {SITE_CONFIG.brandShort}
            </span>
            <span className="text-ink/60 text-[11px]" aria-hidden="true">
              /
            </span>
            <span className="text-ink/80 text-[11px] font-medium tracking-[0.22em] uppercase">
              {SITE_CONFIG.brandLabel}
            </span>
          </div>

          <p className="text-muted text-xs">
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.ownerName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
