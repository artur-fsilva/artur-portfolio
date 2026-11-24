import type { Metadata } from "next";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { HeroMonogram } from "@/components/home/HeroMonogram";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import {
  CONTACT_AVAILABILITY,
  CONTACT_BOTTOM_CTA,
  CONTACT_CARDS,
  CONTACT_HERO,
  CONTACT_META,
} from "@/data/contact";

export const metadata: Metadata = {
  description: CONTACT_META.description,
};

function ColumnSectionHeading({ title, id }: { title: string; id?: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="bg-cobalt inline-block h-[2.5px] w-5" aria-hidden="true" />
      <h2 id={id} className="text-ink text-[11px] font-medium tracking-[0.22em] uppercase">
        {title}
      </h2>
    </div>
  );
}

export default function ContatoPage() {
  const isResendConfigured = Boolean(
    process.env.RESEND_API_KEY?.trim() && process.env.CONTACT_FROM_EMAIL?.trim()
  );

  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="contato-hero-heading" className="pt-4 pb-10 sm:pt-8 sm:pb-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="text-muted mb-4 text-[11px] font-medium tracking-[0.24em] uppercase sm:text-xs">
              {CONTACT_HERO.eyebrow}
            </p>

            <h1
              id="contato-hero-heading"
              className="font-display text-ink text-[3.5rem] leading-[0.94] tracking-[0.01em] uppercase sm:text-[5rem] lg:text-[5.75rem] xl:text-[6.5rem]"
            >
              <span className="block">{CONTACT_HERO.titleLine1}</span>
              <span className="block">
                {CONTACT_HERO.titleLine2}
                <span
                  className="bg-cobalt ml-1.5 inline-block h-3.5 w-3.5 align-baseline sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
              </span>
            </h1>

            <p className="text-ink/90 mt-6 max-w-xl text-lg leading-[1.4] font-normal sm:text-xl">
              {CONTACT_HERO.subtitle}
            </p>
          </div>

          <div className="lg:col-span-5">
            <HeroMonogram />
          </div>
        </div>
      </section>

      {/* Área principal em duas colunas: FALE COMIGO (esquerda) + ENVIE UMA MENSAGEM (direita) */}
      <section
        aria-label="Canais de contato e formulário"
        className="border-rule border-t pt-8 pb-10 sm:pt-10 sm:pb-12"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-0">
          {/* Coluna esquerda: FALE COMIGO + 5 cartões arquitetônicos */}
          <div className="flex flex-col lg:col-span-6 lg:pr-10">
            <ColumnSectionHeading title="Fale comigo" id="fale-comigo-heading" />

            <div className="flex flex-col gap-3">
              {CONTACT_CARDS.map((card) => (
                <ContactCard key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* Coluna direita: ENVIE UMA MENSAGEM + Formulário */}
          <div className="border-rule border-t pt-8 lg:col-span-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <ColumnSectionHeading title="Envie uma mensagem" id="envie-mensagem-heading" />
            <ContactForm isConfigured={isResendConfigured} />
          </div>
        </div>
      </section>

      {/* Disponibilidade */}
      <section
        aria-labelledby="disponibilidade-heading"
        className="border-rule border-t pt-8 pb-10 sm:pt-9 sm:pb-11"
      >
        <ColumnSectionHeading title={CONTACT_AVAILABILITY.eyebrow} id="disponibilidade-heading" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {CONTACT_AVAILABILITY.items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-start gap-3 ${
                idx > 0
                  ? "border-rule border-t pt-5 md:border-t-0 md:border-l md:pt-0 md:pl-7"
                  : "md:pr-7"
              } ${idx === 1 ? "md:pr-7" : ""}`}
            >
              <ArrowUpRightIcon className="text-cobalt mt-1 h-4 w-4 shrink-0" />
              <div>
                <h3 className="text-ink text-lg leading-tight font-bold tracking-tight sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-muted mt-1.5 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA inferior */}
      <section
        aria-labelledby="contato-cta-heading"
        className="border-rule border-t pt-8 pb-8 sm:pt-10 sm:pb-10"
      >
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2
              id="contato-cta-heading"
              className="font-display text-ink text-4xl leading-[0.94] tracking-[0.01em] uppercase sm:text-[2.75rem]"
            >
              <span className="block">{CONTACT_BOTTOM_CTA.titleLine1}</span>
              <span className="block">{CONTACT_BOTTOM_CTA.titleLine2}</span>
            </h2>
          </div>

          <div className="border-rule flex flex-col justify-between gap-6 border-t pt-5 sm:flex-row sm:items-center lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <p className="text-ink/85 max-w-sm text-sm leading-relaxed sm:text-base">
              {CONTACT_BOTTOM_CTA.description}
            </p>

            <a
              href={CONTACT_BOTTOM_CTA.href}
              className="bg-cobalt hover:bg-cobalt-hover inline-flex shrink-0 items-center justify-center gap-3 px-7 py-3.5 text-sm font-medium text-white transition-colors"
            >
              <span>{CONTACT_BOTTOM_CTA.buttonLabel}</span>
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
