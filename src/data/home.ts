export interface HomeProjectItem {
  readonly index: string;
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly status: "featured" | "planned";
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
  },
  {
    index: "02",
    category: "EM PLANEJAMENTO",
    title: "Novo Projeto",
    description: "Em breve, um novo projeto por aqui.",
    status: "planned",
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
