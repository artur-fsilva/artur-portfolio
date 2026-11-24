import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/case-study/CaseStudyIcons";
import { LaboratorioJavaPlanVisual } from "@/components/case-study/LaboratorioJavaPlanVisual";
import { HeroMonogram } from "@/components/home/HeroMonogram";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  LABORATORIO_JAVA_ARCHITECTURE,
  LABORATORIO_JAVA_HERO,
  LABORATORIO_JAVA_LEARNINGS,
  LABORATORIO_JAVA_META,
  LABORATORIO_JAVA_NEXT_CTA,
  LABORATORIO_JAVA_NEXT_STEPS,
  LABORATORIO_JAVA_OBJECTIVE,
  LABORATORIO_JAVA_PLANNED_FEATURES,
} from "@/data/laboratorio-java";

export const metadata: Metadata = {
  title: LABORATORIO_JAVA_META.title,
  description: LABORATORIO_JAVA_META.description,
};

export default function LaboratorioJavaPage() {
  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="lab-java-hero-heading" className="pt-4 pb-12 sm:pt-8 sm:pb-16">
        <div className="mb-6">
          <Link
            href={LABORATORIO_JAVA_HERO.backHref}
            className="text-muted hover:text-cobalt inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase transition-colors"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            <span>{LABORATORIO_JAVA_HERO.backLabel}</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {LABORATORIO_JAVA_HERO.eyebrow}
            </p>

            <h1
              id="lab-java-hero-heading"
              className="font-display text-ink text-[3.25rem] leading-[0.88] tracking-tight sm:text-[5rem] lg:text-[6rem] xl:text-[6.75rem]"
            >
              {LABORATORIO_JAVA_HERO.title}
              <span
                className="bg-cobalt ml-1.5 inline-block h-3.5 w-3.5 align-baseline sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                aria-hidden="true"
              />
            </h1>

            <p className="text-ink/90 mt-6 max-w-xl text-xl leading-[1.3] font-normal sm:text-2xl">
              {LABORATORIO_JAVA_HERO.subtitle}
            </p>

            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
              {LABORATORIO_JAVA_HERO.meta.map((item, idx) => (
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

      {/* 01 — Objetivo */}
      <section aria-labelledby="lab-java-objetivo-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={LABORATORIO_JAVA_OBJECTIVE.eyebrow}
          count={LABORATORIO_JAVA_OBJECTIVE.index}
          headingId="lab-java-objetivo-heading"
        />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <h3 className="font-display text-ink shrink-0 text-4xl leading-[0.9] tracking-tight sm:text-5xl">
            {LABORATORIO_JAVA_OBJECTIVE.title}
          </h3>
          <p className="border-rule text-ink/85 max-w-3xl text-sm leading-relaxed sm:border-l sm:pl-6 sm:text-base">
            {LABORATORIO_JAVA_OBJECTIVE.description}
          </p>
        </div>
      </section>

      {/* 02 — Arquitetura (Planejamento técnico) */}
      <section aria-labelledby="lab-java-arquitetura-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={LABORATORIO_JAVA_ARCHITECTURE.eyebrow}
          count={LABORATORIO_JAVA_ARCHITECTURE.index}
          headingId="lab-java-arquitetura-heading"
        />

        <p className="text-muted mb-6 text-xs tracking-wide">
          {LABORATORIO_JAVA_ARCHITECTURE.disclaimer}
        </p>

        <LaboratorioJavaPlanVisual layers={LABORATORIO_JAVA_ARCHITECTURE.layers} />
      </section>

      {/* 03 — Funcionalidades planejadas & 04 — Aprendizados */}
      <section aria-label="Funcionalidades planejadas e aprendizados" className="pb-12 sm:pb-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeader
              title={LABORATORIO_JAVA_PLANNED_FEATURES.eyebrow}
              count={LABORATORIO_JAVA_PLANNED_FEATURES.index}
            />

            <p className="text-muted mb-5 text-xs leading-relaxed">
              {LABORATORIO_JAVA_PLANNED_FEATURES.note}
            </p>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LABORATORIO_JAVA_PLANNED_FEATURES.items.map((item) => (
                <li
                  key={item.id}
                  className="border-rule text-ink flex items-center gap-3 border-b pb-3 text-sm font-medium"
                >
                  <span
                    className="bg-cobalt inline-block h-1.5 w-1.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <SectionHeader
              title={LABORATORIO_JAVA_LEARNINGS.eyebrow}
              count={LABORATORIO_JAVA_LEARNINGS.index}
            />

            <div className="border-rule border p-6">
              <p className="font-display text-ink text-2xl leading-none tracking-tight sm:text-3xl">
                {LABORATORIO_JAVA_LEARNINGS.title}
              </p>
              <p className="text-muted mt-4 text-sm leading-relaxed">
                {LABORATORIO_JAVA_LEARNINGS.message}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Próximos Passos */}
      <section aria-labelledby="lab-java-proximos-passos-heading" className="pb-12 sm:pb-16">
        <SectionHeader
          title={LABORATORIO_JAVA_NEXT_STEPS.eyebrow}
          count={LABORATORIO_JAVA_NEXT_STEPS.index}
          headingId="lab-java-proximos-passos-heading"
        />

        <p className="text-muted mb-6 text-xs tracking-wide">{LABORATORIO_JAVA_NEXT_STEPS.note}</p>

        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LABORATORIO_JAVA_NEXT_STEPS.steps.map((item) => (
            <li key={item.step} className="border-rule flex flex-col border-t pt-4">
              <span className="text-cobalt font-mono text-xs font-semibold tracking-wider">
                /{item.step}
              </span>
              <h3 className="text-ink mt-2 text-base font-bold tracking-tight">{item.title}</h3>
              <p className="text-muted mt-1.5 text-sm leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Navegação final */}
      <section
        aria-labelledby="lab-java-proximo-projeto-heading"
        className="border-rule border-t pt-10 pb-8 sm:pt-12 sm:pb-12"
      >
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="flex items-end gap-5 lg:col-span-5">
            <h2
              id="lab-java-proximo-projeto-heading"
              className="font-display text-ink text-4xl leading-[0.9] tracking-tight sm:text-5xl"
            >
              EXPLORAR
              <br />
              PORTFÓLIO
            </h2>

            <Link
              href={LABORATORIO_JAVA_NEXT_CTA.href}
              aria-label="Ver todos os trabalhos"
              className="bg-cobalt hover:bg-cobalt-hover flex h-12 w-12 shrink-0 items-center justify-center text-white transition-colors"
            >
              <ArrowUpRightIcon className="h-6 w-6" />
            </Link>
          </div>

          <div className="border-rule flex flex-col justify-between gap-4 border-t pt-6 lg:col-span-7 lg:flex-row lg:items-center lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <p className="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">
                {LABORATORIO_JAVA_NEXT_CTA.eyebrow}
              </p>

              <Link
                href={LABORATORIO_JAVA_NEXT_CTA.href}
                className="group mt-2 inline-flex items-center gap-3"
              >
                <span className="font-display text-ink group-hover:text-cobalt text-4xl leading-none tracking-tight transition-colors sm:text-5xl">
                  {LABORATORIO_JAVA_NEXT_CTA.nextTitle}
                </span>
                <ArrowRightIcon className="text-ink group-hover:text-cobalt h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="text-muted mt-2 text-xs">{LABORATORIO_JAVA_NEXT_CTA.nextNote}</p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
