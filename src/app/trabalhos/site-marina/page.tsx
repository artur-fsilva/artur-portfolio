import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  HighlightIconSvg,
  OverviewIcon,
} from "@/components/case-study/CaseStudyIcons";
import { HeroMonogram } from "@/components/home/HeroMonogram";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  SITE_MARINA_DETAILS,
  SITE_MARINA_HERO,
  SITE_MARINA_HIGHLIGHTS,
  SITE_MARINA_META,
  SITE_MARINA_NARRATIVE,
  SITE_MARINA_NEXT_CTA,
  SITE_MARINA_OVERVIEW,
  SITE_MARINA_RESULTS,
} from "@/data/site-marina";

export const metadata: Metadata = {
  title: SITE_MARINA_META.title,
  description: SITE_MARINA_META.description,
};

export default function SiteMarinaCaseStudyPage() {
  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="site-marina-hero-heading" className="pt-4 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href={SITE_MARINA_HERO.backHref}
            className="text-muted hover:text-cobalt inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase transition-colors"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            <span>{SITE_MARINA_HERO.backLabel}</span>
          </Link>

          <a
            href={SITE_MARINA_HERO.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-ink text-ink hover:border-cobalt hover:bg-cobalt inline-flex items-center gap-2 border px-4 py-2 text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-white"
          >
            <span>{SITE_MARINA_HERO.visitLabel}</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {SITE_MARINA_HERO.eyebrow}
            </p>

            <h1
              id="site-marina-hero-heading"
              className="font-display text-ink text-[3.75rem] leading-[0.88] tracking-tight sm:text-[5.5rem] lg:text-[6.75rem] xl:text-[7.5rem]"
            >
              {SITE_MARINA_HERO.title}
              <span
                className="bg-cobalt ml-1.5 inline-block h-3.5 w-3.5 align-baseline sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                aria-hidden="true"
              />
            </h1>

            <p className="text-ink/90 mt-6 max-w-xl text-xl leading-[1.3] font-normal sm:text-2xl">
              {SITE_MARINA_HERO.subtitle}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
              {SITE_MARINA_HERO.meta.map((item, idx) => (
                <div
                  key={item.label}
                  className={
                    idx > 0
                      ? "border-rule border-t pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-5"
                      : "sm:pr-5"
                  }
                >
                  <dt className="text-muted text-[10px] font-medium tracking-[0.22em] uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-ink mt-1 text-sm leading-snug font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <HeroMonogram />
          </div>
        </div>
      </section>

      {/* 01 — Visão Geral */}
      <section aria-labelledby="site-marina-visao-geral-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={SITE_MARINA_OVERVIEW.eyebrow}
          count={SITE_MARINA_OVERVIEW.index}
          headingId="site-marina-visao-geral-heading"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start lg:col-span-6 lg:pr-8">
            <h3 className="font-display text-ink shrink-0 text-4xl leading-[0.9] tracking-tight sm:text-5xl">
              VISÃO
              <br />
              GERAL
            </h3>
            <p className="border-rule text-ink/85 text-sm leading-relaxed sm:border-l sm:pl-5 sm:text-[15px]">
              {SITE_MARINA_OVERVIEW.description}
            </p>
          </div>

          <ul className="border-rule grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4 lg:col-span-6 lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0">
            {SITE_MARINA_OVERVIEW.pillars.map((pillar, idx) => (
              <li
                key={pillar.id}
                className={`flex flex-col items-center justify-center px-3 text-center ${
                  idx > 0 ? "lg:border-rule lg:border-l" : ""
                }`}
              >
                <OverviewIcon name={pillar.icon} className="text-ink h-7 w-7" />
                <span className="text-ink/90 mt-3 text-xs leading-snug font-medium sm:text-sm">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 02 — Projeto em Detalhe */}
      <section aria-labelledby="site-marina-detalhe-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={SITE_MARINA_DETAILS.eyebrow}
          count={SITE_MARINA_DETAILS.index}
          headingId="site-marina-detalhe-heading"
        />

        <p className="text-muted mb-6 text-xs tracking-wide">{SITE_MARINA_DETAILS.note}</p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SITE_MARINA_DETAILS.screenshots.map((shot) => (
            <figure key={shot.id} className="flex flex-col">
              <div className="border-rule relative aspect-[16/11] w-full overflow-hidden border bg-white">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <figcaption className="mt-3 flex flex-col gap-1">
                <span className="text-ink text-sm font-semibold">{shot.title}</span>
                <p className="text-muted text-xs leading-relaxed">{shot.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 03, 04, 05 — Minha Atuação, Desafios, Soluções */}
      <section aria-label="Atuação, desafios e soluções" className="pb-12 sm:pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {SITE_MARINA_NARRATIVE.map((block) => (
            <div key={block.index} className="flex flex-col">
              <SectionHeader title={block.eyebrow} count={block.index} />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <h3 className="font-display text-ink shrink-0 text-3xl leading-[0.92] tracking-tight sm:text-4xl">
                  {block.title}
                </h3>
                <p className="border-rule text-ink/85 text-sm leading-relaxed sm:border-l sm:pl-4">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06 — Resultados */}
      <section aria-labelledby="site-marina-resultados-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={SITE_MARINA_RESULTS.eyebrow}
          count={SITE_MARINA_RESULTS.index}
          headingId="site-marina-resultados-heading"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start lg:col-span-5 lg:pr-8">
            <h3 className="font-display text-ink shrink-0 text-4xl leading-[0.9] tracking-tight sm:text-5xl">
              {SITE_MARINA_RESULTS.title}
            </h3>
            <p className="border-rule text-ink/85 text-sm leading-relaxed sm:border-l sm:pl-5">
              {SITE_MARINA_RESULTS.description}
            </p>
          </div>

          <div className="border-rule grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3 lg:col-span-7 lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0">
            {SITE_MARINA_RESULTS.outcomes.map((outcome, idx) => (
              <div
                key={outcome.id}
                className={`flex flex-col justify-center lg:px-6 ${
                  idx > 0 ? "sm:border-rule sm:border-l sm:pl-6" : ""
                }`}
              >
                <p className="font-display text-cobalt text-3xl leading-none tracking-tight sm:text-4xl">
                  {outcome.emphasis}
                </p>
                <p className="text-ink/85 mt-2 text-xs leading-snug font-medium sm:text-sm">
                  {outcome.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Destaques do Projeto */}
      <section aria-labelledby="site-marina-destaques-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={SITE_MARINA_HIGHLIGHTS.eyebrow}
          count={SITE_MARINA_HIGHLIGHTS.index}
          headingId="site-marina-destaques-heading"
        />

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {SITE_MARINA_HIGHLIGHTS.items.map((item, idx) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 lg:px-5 ${
                idx === 0 ? "lg:pl-0" : "lg:border-rule lg:border-l"
              }`}
            >
              <HighlightIconSvg name={item.icon} className="text-ink h-5 w-5 shrink-0" />
              <span className="text-ink text-sm leading-tight font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Navegação final */}
      <section
        aria-labelledby="site-marina-proximo-projeto-heading"
        className="border-rule border-t pt-10 pb-8 sm:pt-12 sm:pb-12"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex items-end gap-5 lg:col-span-5">
            <h2
              id="site-marina-proximo-projeto-heading"
              className="font-display text-ink text-4xl leading-[0.9] tracking-tight sm:text-5xl"
            >
              VER PRÓXIMO
              <br />
              PROJETO
            </h2>

            <Link
              href={SITE_MARINA_NEXT_CTA.href}
              aria-label={`Ver estudo de caso ${SITE_MARINA_NEXT_CTA.nextTitle}`}
              className="bg-cobalt hover:bg-cobalt-hover flex h-12 w-12 shrink-0 items-center justify-center text-white transition-colors"
            >
              <ArrowUpRightIcon className="h-6 w-6" />
            </Link>
          </div>

          <div className="border-rule flex flex-col justify-between gap-4 border-t pt-6 lg:col-span-7 lg:flex-row lg:items-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <p className="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">
                {SITE_MARINA_NEXT_CTA.eyebrow}
              </p>

              <Link
                href={SITE_MARINA_NEXT_CTA.href}
                className="group mt-2 inline-flex items-center gap-3"
              >
                <span className="font-display text-ink group-hover:text-cobalt text-4xl leading-none tracking-tight transition-colors sm:text-5xl">
                  {SITE_MARINA_NEXT_CTA.nextTitle}
                </span>
                <ArrowRightIcon className="text-ink group-hover:text-cobalt h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="text-muted mt-2 text-xs">{SITE_MARINA_NEXT_CTA.nextNote}</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

