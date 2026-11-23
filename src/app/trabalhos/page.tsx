import type { Metadata } from "next";
import { HeroMonogram } from "@/components/home/HeroMonogram";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROJECTS_HERO, PROJECTS_LIST } from "@/data/projects";

export const metadata: Metadata = {
  title: "Trabalhos — Artur Ferreira Silva",
  description:
    "Projetos e estudos de caso de Artur Ferreira Silva: YouSafer Flow, Laboratório Java, Site Marina e Ace Finance.",
};

export default function TrabalhosPage() {
  const firstRow = PROJECTS_LIST.slice(0, 2);
  const secondRow = PROJECTS_LIST.slice(2, 4);

  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="trabalhos-hero-heading" className="pt-4 pb-12 sm:pt-8 sm:pb-16">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {PROJECTS_HERO.eyebrow}
            </p>

            <h1
              id="trabalhos-hero-heading"
              className="font-display text-ink text-[4.5rem] leading-[0.86] tracking-tight sm:text-[6.75rem] lg:text-[8.5rem] xl:text-[9.5rem]"
            >
              {PROJECTS_HERO.title}
              <span
                className="bg-cobalt ml-1.5 inline-block h-4 w-4 align-baseline sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                aria-hidden="true"
              />
            </h1>

            <p className="text-ink/90 mt-6 max-w-lg text-2xl leading-[1.2] font-normal sm:text-3xl lg:text-[2.1rem]">
              {PROJECTS_HERO.subtitle}
            </p>
          </div>

          <div className="lg:col-span-5">
            <HeroMonogram />
          </div>
        </div>
      </section>

      {/* Projetos em destaque */}
      <section aria-labelledby="projetos-destaque-heading" className="pt-2 pb-8 sm:pb-12">
        <SectionHeader
          title="Projetos em destaque"
          count="04"
          headingId="projetos-destaque-heading"
        />

        <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2 lg:gap-10 lg:pb-12">
          {firstRow.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="border-rule grid grid-cols-1 gap-8 border-t pt-10 md:grid-cols-2 lg:gap-10 lg:pt-12">
          {secondRow.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
