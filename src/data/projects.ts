export type ProjectPreviewVariant =
  "yousafer-flow" | "laboratorio-java" | "site-marina" | "ace-finance";

export interface ProjectItem {
  readonly index: string;
  readonly slug: ProjectPreviewVariant;
  readonly href: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly caseStudyReady: boolean;
  readonly image?: {
    readonly src: string;
    readonly alt: string;
  };
}

export const PROJECTS_HERO = {
  eyebrow: "PORTFÓLIO • PROJETOS • ESTUDOS DE CASO",
  title: "TRABALHOS",
  subtitle: "Esta seção reúne projetos e estudos de caso.",
} as const;

export const PROJECTS_LIST: readonly ProjectItem[] = [
  {
    index: "01",
    slug: "yousafer-flow",
    href: "/trabalhos/yousafer-flow",
    category: "EXPERIÊNCIA PROFISSIONAL",
    title: "YouSafer Flow",
    description: "Plataforma de processos, formulários, integrações e controle de permissões.",
    caseStudyReady: false,
  },
  {
    index: "02",
    slug: "laboratorio-java",
    href: "/trabalhos/laboratorio-java",
    category: "EM DESENVOLVIMENTO",
    title: "Laboratório Java",
    description: "Estudos práticos com Java e Spring Boot, focados em boas práticas e segurança.",
    caseStudyReady: false,
  },
  {
    index: "03",
    slug: "site-marina",
    href: "/trabalhos/site-marina",
    category: "PROJETO PARA CLIENTE",
    title: "Site Marina",
    description:
      "Site institucional com foco em apresentação profissional, experiência do usuário e presença digital.",
    caseStudyReady: false,
  },
  {
    index: "04",
    slug: "ace-finance",
    href: "/trabalhos/ace-finance",
    category: "PRODUTO DIGITAL",
    title: "Ace Finance",
    description: "Dashboard financeiro com IA, assinaturas, autenticação e experiência SaaS.",
    caseStudyReady: true,
  },
] as const;
