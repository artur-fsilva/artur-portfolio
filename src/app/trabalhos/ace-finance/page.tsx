import type { Metadata } from "next";
import Link from "next/link";
import { AceFinanceDetailPreviews } from "@/components/case-study/AceFinanceDetailPreviews";
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
  ACE_FINANCE_DETAILS,
  ACE_FINANCE_HERO,
  ACE_FINANCE_HIGHLIGHTS,
  ACE_FINANCE_META,
  ACE_FINANCE_NARRATIVE,
  ACE_FINANCE_NEXT_CTA,
  ACE_FINANCE_OVERVIEW,
  ACE_FINANCE_RESULTS,
} from "@/data/ace-finance";

export const metadata: Metadata = {
  title: ACE_FINANCE_META.title,
  description: ACE_FINANCE_META.description,
};

export default function AceFinanceCaseStudyPage() {
  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="ace-finance-hero-heading" className="pt-4 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Link
            href={ACE_FINANCE_HERO.backHref}
            className="text-muted hover:text-cobalt inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase transition-colors"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            <span>{ACE_FINANCE_HERO.backLabel}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {ACE_FINANCE_HERO.eyebrow}
            </p>

            <h1
              id="ace-finance-hero-heading"
              className="font-display text-ink text-[3.75rem] leading-[0.88] tracking-tight sm:text-[5.5rem] lg:text-[6.75rem] xl:text-[7.5rem]"
            >
              {ACE_FINANCE_HERO.title}
              <span
                className="bg-cobalt ml-1.5 inline-block h-3.5 w-3.5 align-baseline sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                aria-hidden="true"
              />
            </h1>

            <p className="text-ink/90 mt-6 max-w-xl text-xl leading-[1.3] font-normal sm:text-2xl">
              {ACE_FINANCE_HERO.subtitle}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
              {ACE_FINANCE_HERO.meta.map((item, idx) => (
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
      <section aria-labelledby="visao-geral-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ACE_FINANCE_OVERVIEW.eyebrow}
          count={ACE_FINANCE_OVERVIEW.index}
          headingId="visao-geral-heading"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start lg:col-span-6 lg:pr-8">
            <h3 className="font-display text-ink shrink-0 text-4xl leading-[0.9] tracking-tight sm:text-5xl">
              VISÃO
              <br />
              GERAL
            </h3>
            <p className="border-rule text-ink/85 text-sm leading-relaxed sm:border-l sm:pl-5 sm:text-[15px]">
              {ACE_FINANCE_OVERVIEW.description}
            </p>
          </div>

          <ul className="border-rule grid grid-cols-2 gap-6 border-t pt-6 sm:grid-cols-4 lg:col-span-6 lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0">
            {ACE_FINANCE_OVERVIEW.pillars.map((pillar, idx) => (
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
      <section aria-labelledby="projeto-detalhe-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ACE_FINANCE_DETAILS.eyebrow}
          count={ACE_FINANCE_DETAILS.index}
          headingId="projeto-detalhe-heading"
        />

        <p className="text-muted mb-6 text-xs tracking-wide">{ACE_FINANCE_DETAILS.disclaimer}</p>

        <AceFinanceDetailPreviews items={ACE_FINANCE_DETAILS.items} />
      </section>

      {/* 03, 04, 05 — Minha Atuação, Desafios, Soluções */}
      <section aria-label="Atuação, desafios e soluções" className="pb-12 sm:pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {ACE_FINANCE_NARRATIVE.map((block) => (
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
      <section aria-labelledby="resultados-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ACE_FINANCE_RESULTS.eyebrow}
          count={ACE_FINANCE_RESULTS.index}
          headingId="resultados-heading"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start lg:col-span-5 lg:pr-8">
            <h3 className="font-display text-ink shrink-0 text-4xl leading-[0.9] tracking-tight sm:text-5xl">
              {ACE_FINANCE_RESULTS.title}
            </h3>
            <p className="border-rule text-ink/85 text-sm leading-relaxed sm:border-l sm:pl-5">
              {ACE_FINANCE_RESULTS.description}
            </p>
          </div>

          <div className="border-rule grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3 lg:col-span-7 lg:gap-0 lg:border-t-0 lg:border-l lg:pt-0">
            {ACE_FINANCE_RESULTS.outcomes.map((outcome, idx) => (
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
      <section aria-labelledby="destaques-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={ACE_FINANCE_HIGHLIGHTS.eyebrow}
          count={ACE_FINANCE_HIGHLIGHTS.index}
          headingId="destaques-heading"
        />

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {ACE_FINANCE_HIGHLIGHTS.items.map((item, idx) => (
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
        aria-labelledby="proximo-projeto-heading"
        className="border-rule border-t pt-10 pb-8 sm:pt-12 sm:pb-12"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex items-end gap-5 lg:col-span-5">
            <h2
              id="proximo-projeto-heading"
              className="font-display text-ink text-4xl leading-[0.9] tracking-tight sm:text-5xl"
            >
              VER PRÓXIMO
              <br />
              PROJETO
            </h2>

            <Link
              href={ACE_FINANCE_NEXT_CTA.href}
              aria-label="Voltar para a página de Trabalhos"
              className="bg-cobalt hover:bg-cobalt-hover flex h-12 w-12 shrink-0 items-center justify-center text-white transition-colors"
            >
              <ArrowUpRightIcon className="h-6 w-6" />
            </Link>
          </div>

          <div className="border-rule flex flex-col justify-between gap-4 border-t pt-6 lg:col-span-7 lg:flex-row lg:items-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <p className="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">
                {ACE_FINANCE_NEXT_CTA.eyebrow}
              </p>

              <Link
                href={ACE_FINANCE_NEXT_CTA.href}
                className="group mt-2 inline-flex items-center gap-3"
              >
                <span className="font-display text-ink group-hover:text-cobalt text-4xl leading-none tracking-tight transition-colors sm:text-5xl">
                  {ACE_FINANCE_NEXT_CTA.nextTitle}
                </span>
                <ArrowRightIcon className="text-ink group-hover:text-cobalt h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="text-muted mt-2 text-xs">{ACE_FINANCE_NEXT_CTA.nextNote}</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

