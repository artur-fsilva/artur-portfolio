import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <Container>
      <section className="py-16 sm:py-24">
        <p className="text-muted text-[11px] font-medium tracking-[0.24em] uppercase">
          ERRO 404 • PÁGINA NÃO ENCONTRADA
        </p>

        <h1 className="font-display text-ink mt-4 text-[4rem] leading-[0.9] tracking-tight sm:text-[6rem]">
          404
          <span
            className="bg-cobalt ml-1.5 inline-block h-3.5 w-3.5 align-baseline sm:h-5 sm:w-5"
            aria-hidden="true"
          />
        </h1>

        <p className="text-ink/85 mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
          A página que você tentou acessar não existe ou foi movida.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="bg-cobalt hover:bg-cobalt-hover inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-medium tracking-[0.18em] text-white uppercase transition-colors"
          >
            <span>Voltar para a Home</span>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>

          <Link
            href="/trabalhos"
            className="border-ink text-ink hover:border-cobalt hover:bg-cobalt inline-flex items-center gap-2.5 border px-6 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-colors hover:text-white"
          >
            <span>Ver Trabalhos</span>
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
