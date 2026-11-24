import Image from "next/image";
import type { PortraitImageConfig } from "@/data/about";

interface AboutPortraitProps {
  portrait: PortraitImageConfig | null;
}

export function AboutPortrait({ portrait }: AboutPortraitProps) {
  if (portrait) {
    return (
      <div
        className="relative aspect-[5/4] w-full max-w-[440px] overflow-hidden bg-[#121212] lg:ml-auto"
        style={{ clipPath: "polygon(16% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      >
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          priority
          sizes="(min-width: 1024px) 440px, 100vw"
          className="object-cover object-[52%_15%]"
        />
      </div>
    );
  }

  return (
    <div
      className="border-rule relative flex aspect-[4/5] w-full flex-col justify-between overflow-hidden border bg-[#141414] p-6 select-none sm:p-8"
      aria-label="Composição geométrica editorial da identidade AF"
      role="img"
    >
      {/* Bloco geométrico azul cobalto */}
      <div
        className="bg-cobalt pointer-events-none absolute -top-10 -right-10 h-52 w-52 sm:h-60 sm:w-60"
        aria-hidden="true"
      />

      {/* Faixa diagonal arquitetônica */}
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px -rotate-12 bg-white/15"
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-between text-[10px] font-medium tracking-[0.22em] text-white/60 uppercase">
        <span>AF / IDENTIDADE</span>
        <span>01</span>
      </div>

      <div className="relative z-10 my-auto flex flex-col items-start">
        <span className="font-display text-[6.5rem] leading-[0.82] tracking-tight text-white sm:text-[8rem]">
          AF
          <span className="bg-cobalt ml-1.5 inline-block h-4 w-4 align-baseline" />
        </span>
      </div>

      <div className="relative z-10 flex items-end justify-between border-t border-white/15 pt-4 text-[11px] text-white/65">
        <div>
          <p className="font-medium text-white/90">Artur Ferreira Silva</p>
          <p className="mt-0.5 text-[10px] tracking-[0.16em] uppercase">
            Desenvolvedor de Sistemas
          </p>
        </div>
        <span className="bg-cobalt inline-block h-3 w-8" aria-hidden="true" />
      </div>
    </div>
  );
}
