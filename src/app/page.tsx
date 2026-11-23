import Link from "next/link";
import { AceFinancePreview } from "@/components/home/AceFinancePreview";
import { HeroMonogram } from "@/components/home/HeroMonogram";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon, PlusIcon } from "@/components/ui/Icons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HOME_CONTACT_CTA, HOME_HERO, HOME_PROJECTS, HOME_TRAJECTORY } from "@/data/home";
import { getSocialLinks } from "@/data/site";

export default function HomePage() {
  const socialLinks = getSocialLinks();

  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="home-hero-heading" className="pt-4 pb-14 sm:pt-8 sm:pb-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {HOME_HERO.eyebrow}
            </p>

            <h1 id="home-hero-heading" className="text-ink">
              <span className="font-display block text-[5rem] leading-[0.84] tracking-tight sm:text-[7.5rem] lg:text-[9.5rem] xl:text-[10.5rem]">
                {HOME_HERO.firstName}
                <span
                  className="bg-cobalt ml-1.5 inline-block h-4 w-4 align-baseline sm:h-5 sm:w-5 lg:h-6 lg:w-6"
                  aria-hidden="true"
                />
              </span>
              <span className="font-condensed mt-1.5 block text-[2.6rem] leading-[0.92] font-medium tracking-tight sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[4.85rem]">
                {HOME_HERO.lastName}
              </span>
            </h1>

            <p className="text-ink/90 mt-6 max-w-lg text-2xl leading-[1.2] font-normal sm:text-3xl lg:text-[2.15rem]">
              {HOME_HERO.subtitle}
            </p>

            <div className="mt-8">
              <Link
                href={HOME_HERO.ctaHref}
                className="bg-cobalt hover:bg-cobalt-hover inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-white transition-colors sm:text-base"
              >
                <span>{HOME_HERO.ctaLabel}</span>
                <ArrowUpRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroMonogram />
          </div>
        </div>
      </section>

      {/* Trabalhos */}
      <section aria-labelledby="home-trabalhos-heading" className="pt-2 pb-14 sm:pb-20">
        <SectionHeader title="Trabalhos" count="02" headingId="home-trabalhos-heading" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
          {HOME_PROJECTS.map((project) => {
            const isFeatured = project.status === "featured" && project.href;

            return (
              <article key={project.index} className="group flex flex-col">
                {isFeatured && project.href ? (
                  <Link href={project.href} className="block overflow-hidden">
                    <AceFinancePreview />
                  </Link>
                ) : (
                  <div
                    className="border-rule bg-paper flex aspect-[16/10] w-full items-center justify-center border"
                    aria-hidden="true"
                  >
                    <PlusIcon className="text-ink/70 h-9 w-9" />
                  </div>
                )}

                <div className="mt-6 flex items-start gap-5">
                  <span className="font-condensed text-ink/90 text-4xl leading-none font-normal tabular-nums sm:text-5xl">
                    {project.index}
                  </span>

                  <div className="border-rule flex flex-1 items-end justify-between gap-4 border-l pl-5">
                    <div>
                      <p className="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">
                        {project.category}
                      </p>
                      <h3 className="text-ink mt-1.5 text-2xl font-bold tracking-tight">
                        {isFeatured && project.href ? (
                          <Link href={project.href} className="hover:text-cobalt transition-colors">
                            {project.title}
                          </Link>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <p className="text-muted mt-2 text-sm leading-relaxed sm:text-[15px]">
                        {project.description}
                      </p>
                    </div>

                    {isFeatured && project.href ? (
                      <Link
                        href={project.href}
                        aria-label={`Ver projeto ${project.title}`}
                        className="text-ink hover:text-cobalt shrink-0 p-1 transition-colors"
                      >
                        <ArrowUpRightIcon className="h-5 w-5" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Trajetória */}
      <section aria-labelledby="home-trajetoria-heading" className="pt-2 pb-14 sm:pb-20">
        <SectionHeader title="Trajetória" count="03" headingId="home-trajetoria-heading" />

        <div className="divide-rule grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {HOME_TRAJECTORY.map((item, idx) => (
            <Link
              key={item.organization}
              href={item.href}
              className={`group flex items-end justify-between gap-4 py-5 transition-colors md:py-2 ${
                idx === 0 ? "md:pr-8" : idx === HOME_TRAJECTORY.length - 1 ? "md:pl-8" : "md:px-8"
              }`}
            >
              <div>
                <h3 className="text-ink group-hover:text-cobalt text-xl font-bold tracking-tight transition-colors lg:text-2xl">
                  {item.organization}
                </h3>
                <p className="text-muted mt-1 text-sm sm:text-base">{item.role}</p>
              </div>
              <ArrowUpRightIcon className="text-ink group-hover:text-cobalt h-5 w-5 shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Contato */}
      <section
        aria-labelledby="home-contato-heading"
        className="border-rule border-t pt-12 sm:pt-16"
      >
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          <div className="flex items-end gap-5 md:col-span-7">
            <h2
              id="home-contato-heading"
              className="font-display text-ink text-5xl leading-[0.88] tracking-tight uppercase sm:text-7xl lg:text-[5.75rem]"
            >
              <span className="block">{HOME_CONTACT_CTA.headingLine1}</span>
              <span className="block">{HOME_CONTACT_CTA.headingLine2}</span>
            </h2>

            <Link
              href={HOME_CONTACT_CTA.href}
              aria-label="Ir para a página de contato"
              className="bg-cobalt hover:bg-cobalt-hover mb-1.5 inline-flex h-14 w-14 shrink-0 items-center justify-center text-white transition-colors sm:h-16 sm:w-16 lg:h-20 lg:w-20"
            >
              <ArrowUpRightIcon className="h-6 w-6 lg:h-7 lg:w-7" />
            </Link>
          </div>

          <div className="border-rule flex flex-col justify-between gap-7 border-t pt-6 md:col-span-5 md:border-t-0 md:border-l md:pt-0 md:pl-10">
            <p className="text-ink/90 max-w-sm text-base leading-relaxed lg:text-lg">
              {HOME_CONTACT_CTA.description}
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-2.5">
              {socialLinks.map((social) =>
                social.external ? (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-ink text-ink hover:border-cobalt hover:text-cobalt inline-flex items-center gap-1.5 border-b pb-0.5 text-sm font-medium transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="border-ink text-ink hover:border-cobalt hover:text-cobalt inline-flex items-center gap-1.5 border-b pb-0.5 text-sm font-medium transition-colors"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
