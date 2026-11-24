export type OverviewPillarIcon = "dashboard" | "ai" | "subscriptions" | "auth";

export type HighlightIcon = "product" | "ux" | "integrations" | "ai" | "subscriptions";

export interface CaseStudyMetaItem {
  readonly label: string;
  readonly value: string;
}

export interface OverviewPillar {
  readonly id: string;
  readonly icon: OverviewPillarIcon;
  readonly label: string;
}

export interface DetailPreviewItem {
  readonly id: "dashboard" | "assistant" | "subscription";
  readonly badge: string;
  readonly title: string;
  readonly caption: string;
}

export interface NarrativeBlock {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface OutcomeItem {
  readonly id: string;
  readonly emphasis: string;
  readonly label: string;
}

export interface ProjectHighlight {
  readonly id: string;
  readonly icon: HighlightIcon;
  readonly label: string;
}

export const ACE_FINANCE_META = {
  title: "Ace Finance — Estudo de Caso | Artur Ferreira Silva",
  description:
    "Estudo de caso do Ace Finance: produto digital autoral de organização financeira com foco em dashboard, assinaturas, experiência SaaS e IA aplicada.",
} as const;

export const ACE_FINANCE_HERO = {
  backHref: "/trabalhos",
  backLabel: "Voltar para Trabalhos",
  eyebrow: "ESTUDO DE CASO / PROJETO AUTORAL",
  title: "ACE FINANCE",
  subtitle:
    "Produto digital de organização financeira com foco em dashboard, assinaturas, experiência SaaS e inteligência artificial aplicada.",
  meta: [
    {
      label: "TIPO",
      value: "Produto autoral",
    },
    {
      label: "STACK",
      value: "Web moderna, TypeScript e arquitetura SaaS",
    },
    {
      label: "FOCO",
      value: "Finanças, IA e produto",
    },
  ] satisfies readonly CaseStudyMetaItem[],
} as const;

export const ACE_FINANCE_OVERVIEW = {
  index: "01",
  eyebrow: "VISÃO GERAL",
  title: "VISÃO GERAL",
  description:
    "Ace Finance é um produto digital de organização financeira pessoal pensado para reunir controle de gastos, planejamento inteligente e uma experiência SaaS estruturada com assinaturas e recursos de IA.",
  pillars: [
    { id: "dashboard", icon: "dashboard", label: "Dashboard financeiro" },
    { id: "ai", icon: "ai", label: "IA aplicada" },
    { id: "subscriptions", icon: "subscriptions", label: "Assinaturas" },
    { id: "auth", icon: "auth", label: "Autenticação" },
  ] satisfies readonly OverviewPillar[],
} as const;

export const ACE_FINANCE_DETAILS = {
  index: "02",
  eyebrow: "PROJETO EM DETALHE",
  disclaimer: "Prévias ilustrativas de interface — sem dados reais de usuários ou métricas.",
  items: [
    {
      id: "dashboard",
      badge: "Prévia ilustrativa",
      title: "Dashboard financeiro",
      caption: "Estrutura visual para acompanhamento consolidado de saldo e despesas.",
    },
    {
      id: "assistant",
      badge: "Prévia ilustrativa",
      title: "Assistente de IA",
      caption: "Fluxo conversacional orientado a metas, análise de gastos e economia.",
    },
    {
      id: "subscription",
      badge: "Prévia ilustrativa",
      title: "Gestão de assinatura",
      caption: "Visualização de plano ativo, status da conta e limites de uso.",
    },
  ] satisfies readonly DetailPreviewItem[],
} as const;

export const ACE_FINANCE_NARRATIVE: readonly NarrativeBlock[] = [
  {
    index: "03",
    eyebrow: "MINHA ATUAÇÃO",
    title: "MINHA ATUAÇÃO",
    description:
      "Concepção do produto, definição de funcionalidades, desenho de UX/UI, modelagem da experiência SaaS e estruturação do MVP.",
  },
  {
    index: "04",
    eyebrow: "DESAFIOS",
    title: "DESAFIOS",
    description:
      "Equilibrar simplicidade e profundidade nas funcionalidades, integrar IA de forma realmente útil no dia a dia e estruturar um modelo sustentável de assinaturas.",
  },
  {
    index: "05",
    eyebrow: "SOLUÇÕES",
    title: "SOLUÇÕES",
    description:
      "Uma experiência clara e escalável, com dashboard objetivo, assistente focado em clareza prática e arquitetura preparada para autenticação e planos recorrentes.",
  },
] as const;

export const ACE_FINANCE_RESULTS = {
  index: "06",
  eyebrow: "RESULTADOS",
  title: "RESULTADOS",
  description:
    "O projeto consolidou uma base consistente de produto e interface para controle financeiro. Indicadores quantitativos serão publicados conforme validação em produção.",
  outcomes: [
    {
      id: "architecture",
      emphasis: "MVP",
      label: "Fluxo principal de produto estruturado",
    },
    {
      id: "experience",
      emphasis: "SaaS",
      label: "Jornada pensada para uso recorrente",
    },
    {
      id: "validation",
      emphasis: "Em validação",
      label: "Métricas reais a confirmar com usuários",
    },
  ] satisfies readonly OutcomeItem[],
} as const;

export const ACE_FINANCE_HIGHLIGHTS = {
  index: "07",
  eyebrow: "DESTAQUES DO PROJETO",
  items: [
    { id: "product", icon: "product", label: "Produto digital" },
    { id: "ux", icon: "ux", label: "UX e posicionamento" },
    { id: "integrations", icon: "integrations", label: "Integrações" },
    { id: "ai", icon: "ai", label: "IA aplicada" },
    { id: "subscriptions", icon: "subscriptions", label: "Modelo de assinaturas" },
  ] satisfies readonly ProjectHighlight[],
} as const;

export const ACE_FINANCE_NEXT_CTA = {
  leftHeading: "VER PRÓXIMO PROJETO",
  eyebrow: "/ PRÓXIMO ESTUDO DE CASO",
  nextTitle: "VER TRABALHOS",
  nextNote: "Site Marina em breve — voltar para a galeria de projetos",
  href: "/trabalhos",
} as const;

