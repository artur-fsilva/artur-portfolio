import type { Metadata } from "next";
import Link from "next/link";
import { AboutArchitectureGraphic } from "@/components/about/AboutArchitectureGraphic";
import { AboutPortrait } from "@/components/about/AboutPortrait";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ABOUT_ACTIONS,
  ABOUT_DIRECTION,
  ABOUT_EDUCATION,
  ABOUT_EXPERIENCE,
  ABOUT_HERO,
  ABOUT_META,
  ABOUT_WHO_AM_I,
} from "@/data/about";

export const metadata: Metadata = {
  description: ABOUT_META.description,
};

export default function SobrePage() {
  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="sobre-hero-heading" className="pt-4 pb-10 sm:pt-8 sm:pb-12">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {ABOUT_HERO.eyebrow}
            </p>

            <h1
              id="sobre-hero-heading"
              className="font-display text-ink text-[2.5rem] leading-[1.08] tracking-[0.01em] uppercase sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem]"
            >
              {ABOUT_HERO.title}
            </h1>

            <p className="text-ink/85 mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
              {ABOUT_HERO.intro}
            </p>
          </div>

          <div className="w-full lg:col-span-5">
            <AboutPortrait portrait={ABOUT_HERO.portrait} />
          </div>
        </div>
      </section>

      {/* 01 — Quem Sou */}
      <section aria-labelledby="quem-sou-heading" className="pb-8 sm:pb-9">
        <SectionHeader
          title={ABOUT_WHO_AM_I.eyebrow}
          count={ABOUT_WHO_AM_I.index}
          headingId="quem-sou-heading"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <h3 className="font-display text-ink text-4xl leading-[0.9] tracking-tight sm:text-5xl">
              {ABOUT_WHO_AM_I.title}
            </h3>
            <AboutArchitectureGraphic />
          </div>

          <div className="border-rule lg:col-span-8 lg:border-l lg:pl-8">
            <p className="text-ink/85 text-base leading-relaxed sm:text-lg">
              {ABOUT_WHO_AM_I.description}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Experiência Profissional */}
      <section aria-labelledby="experiencia-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ABOUT_EXPERIENCE.eyebrow}
          count={ABOUT_EXPERIENCE.index}
          headingId="experiencia-heading"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {ABOUT_EXPERIENCE.items.map((item, idx) => (
            <article
              key={item.company}
              className={`flex items-start gap-5 ${
                idx > 0 ? "border-rule border-t pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8" : ""
              }`}
            >
              <span className="font-condensed text-ink/90 text-4xl leading-none font-normal tabular-nums sm:text-5xl">
                {item.index}
              </span>

              <div className="border-rule flex-1 border-l pl-5">
                <p className="text-cobalt text-[11px] font-semibold tracking-[0.2em] uppercase">
                  {item.role}
                </p>
                <h3 className="text-ink mt-1 text-2xl font-bold tracking-tight">{item.company}</h3>
                <p className="text-ink/85 mt-3 text-sm leading-relaxed sm:text-[15px]">
                  {item.description}
                </p>

                {item.caseStudyLink ? (
                  <Link
                    href={item.caseStudyLink.href}
                    className="text-ink hover:text-cobalt mt-4 inline-flex items-center gap-1.5 text-xs font-medium tracking-[0.16em] uppercase transition-colors"
                  >
                    <span>{item.caseStudyLink.label}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 — Formação Acadêmica */}
      <section aria-labelledby="formacao-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ABOUT_EDUCATION.eyebrow}
          count={ABOUT_EDUCATION.index}
          headingId="formacao-heading"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">
              {ABOUT_EDUCATION.status}
            </p>
            <h3 className="font-display text-ink mt-2 text-4xl leading-[0.9] tracking-tight sm:text-5xl">
              {ABOUT_EDUCATION.institution}
            </h3>
          </div>

          <div className="border-rule lg:col-span-7 lg:border-l lg:pl-8">
            <p className="text-ink text-xl font-semibold tracking-tight sm:text-2xl">
              {ABOUT_EDUCATION.course}
            </p>
            <p className="text-muted mt-2 inline-flex items-center gap-2 text-sm font-medium">
              <span className="bg-cobalt inline-block h-1.5 w-1.5 shrink-0" aria-hidden="true" />
              <span>{ABOUT_EDUCATION.expectedGraduation}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 04 — Direção Profissional */}
      <section aria-labelledby="direcao-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ABOUT_DIRECTION.eyebrow}
          count={ABOUT_DIRECTION.index}
          headingId="direcao-heading"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {ABOUT_DIRECTION.items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                idx > 0
                  ? "border-rule border-t pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-7"
                  : "md:pr-7"
              } ${idx === 1 ? "md:pr-7" : ""}`}
            >
              <span className="bg-cobalt mb-3 inline-block h-1 w-6" aria-hidden="true" />
              <h3 className="text-ink text-lg font-bold tracking-tight sm:text-xl">{item.title}</h3>
              <p className="text-ink/85 mt-2 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ações finais */}
      <section
        aria-label="Currículo e contato"
        className="border-rule border-t pt-10 pb-8 sm:pb-12"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {ABOUT_ACTIONS.resumeHref ? (
              <a
                href={ABOUT_ACTIONS.resumeHref}
                download
                className="bg-cobalt hover:bg-cobalt-hover inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-[0.18em] text-white uppercase transition-colors"
              >
                <span>{ABOUT_ACTIONS.resumeLabel}</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={ABOUT_ACTIONS.resumePendingNote}
                className="bg-ink/10 text-ink/50 inline-flex cursor-not-allowed items-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-[0.18em] uppercase"
              >
                <span>{ABOUT_ACTIONS.resumeLabel}</span>
                <span className="text-[10px] tracking-[0.14em] normal-case">(em breve)</span>
              </button>
            )}

            {ABOUT_ACTIONS.contactHref ? (
              <Link
                href={ABOUT_ACTIONS.contactHref}
                className="border-ink text-ink hover:border-cobalt hover:bg-cobalt inline-flex items-center gap-2.5 border px-6 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-white"
              >
                <span>{ABOUT_ACTIONS.contactLabel}</span>
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                title={ABOUT_ACTIONS.contactPendingNote}
                className="border-rule text-ink/50 inline-flex cursor-not-allowed items-center gap-2.5 border px-6 py-3.5 text-xs font-medium tracking-[0.18em] uppercase"
              >
                <span>{ABOUT_ACTIONS.contactLabel}</span>
                <span className="text-[10px] tracking-[0.14em] normal-case">(em breve)</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
}
