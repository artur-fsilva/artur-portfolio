export interface HomeProjectItem {
  readonly index: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly status: "featured" | "planned";
  readonly image?: {
    readonly src: string;
    readonly alt: string;
  };
}

export interface HomeTrajectoryItem {
  readonly organization: string;
  readonly role: string;
  readonly href: string;
}

export const HOME_HERO = {
  eyebrow: "TECNOLOGIA • SISTEMAS • SEGURANÇA",
  firstName: "ARTUR",
  lastName: "FERREIRA SILVA",
  subtitle: "Tecnologia aplicada a problemas reais.",
  ctaLabel: "Explorar trabalhos",
  ctaHref: "/trabalhos",
} as const;

export const HOME_PROJECTS: readonly HomeProjectItem[] = [
  {
    index: "01",
    category: "PRODUTO DIGITAL",
    title: "Ace Finance",
    description: "Dashboard financeiro com IA, assinaturas, autenticação e experiência SaaS.",
    href: "/trabalhos/ace-finance",
    status: "featured",
    image: {
      src: "/images/ace-finance/landing.png",
      alt: "Prévia da landing page do Ace Finance",
    },
  },
  {
    index: "02",
    category: "SITE PROFISSIONAL",
    title: "Site Marina",
    description:
      "Site de fisioterapia com foco em experiência do usuário, apresentação de serviços e agendamento.",
    href: "/trabalhos/site-marina",
    status: "featured",
    image: {
      src: "/images/site-marina/home.png",
      alt: "Prévia da página inicial do Site Marina Ferreira",
    },
  },
] as const;

export const HOME_TRAJECTORY: readonly HomeTrajectoryItem[] = [
  {
    organization: "YouSafer",
    role: "Desenvolvedor de Sistemas",
    href: "/sobre",
  },
  {
    organization: "Instituto Federal",
    role: "Estágio",
    href: "/sobre",
  },
  {
    organization: "PUC Minas",
    role: "Sistemas de Informação",
    href: "/sobre",
  },
] as const;

export const HOME_CONTACT_CTA = {
  headingLine1: "VAMOS",
  headingLine2: "CONVERSAR?",
  href: "/contato",
  description: "Aberto a novas oportunidades e conexões na área de tecnologia.",
} as const;
