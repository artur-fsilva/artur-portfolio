import type { CaseStudyMetaItem, NarrativeBlock, OutcomeItem } from "@/data/ace-finance";

export type YouSaferOverviewIcon = "form" | "automation" | "subscriptions" | "auth";

export type YouSaferHighlightIcon = "search" | "ux" | "integrations" | "auth";

export interface YouSaferOverviewPillar {
  readonly id: string;
  readonly icon: YouSaferOverviewIcon;
  readonly label: string;
}

export interface YouSaferPreviewItem {
  readonly id: "dashboard" | "form" | "workflow";
  readonly badge: string;
  readonly title: string;
  readonly caption: string;
}

export interface YouSaferHighlight {
  readonly id: string;
  readonly icon: YouSaferHighlightIcon;
  readonly label: string;
}

export const YOUSAFER_FLOW_META = {
  title: "YouSafer Flow — Estudo de Caso | Artur Ferreira Silva",
  description:
    "Estudo de caso da atuação como Desenvolvedor de Sistemas na evolução do YouSafer Flow: plataforma de gestão de processos, formulários, automações, integrações e controle de permissões.",
} as const;

export const YOUSAFER_FLOW_HERO = {
  backHref: "/trabalhos",
  backLabel: "Voltar para Trabalhos",
  eyebrow: "ESTUDO DE CASO / EXPERIÊNCIA PROFISSIONAL",
  title: "YOUSAFER FLOW",
  subtitle:
    "Atuação no desenvolvimento e na evolução de plataforma de processos com foco em formulários, automações, integrações e controle de permissões.",
  meta: [
    {
      label: "FUNÇÃO",
      value: "Desenvolvedor de Sistemas",
    },
    {
      label: "CONTEXTO",
      value: "YouSafer",
    },
    {
      label: "FOCO",
      value: "Desenvolvimento e evolução de sistemas",
    },
  ] satisfies readonly CaseStudyMetaItem[],
} as const;

export const YOUSAFER_FLOW_OVERVIEW = {
  index: "01",
  eyebrow: "VISÃO GERAL",
  title: "VISÃO GERAL",
  description:
    "Contribuição na construção, manutenção e evolução do YouSafer Flow, plataforma de gestão de processos que centraliza formulários, etapas de trabalho, automações, integrações com serviços externos e regras de acesso.",
  pillars: [
    { id: "forms", icon: "form", label: "Formulários inteligentes" },
    { id: "automations", icon: "automation", label: "Automações de processos" },
    { id: "integrations", icon: "subscriptions", label: "Integrações com sistemas" },
    { id: "permissions", icon: "auth", label: "Controle de permissões" },
  ] satisfies readonly YouSaferOverviewPillar[],
} as const;

export const YOUSAFER_FLOW_DETAILS = {
  index: "02",
  eyebrow: "PROJETO EM DETALHE",
  disclaimer:
    "Representações ilustrativas próprias — sem capturas reais ou dados internos da empresa.",
  items: [
    {
      id: "dashboard",
      badge: "Prévia ilustrativa",
      title: "Dashboard de processos",
      caption: "Visão estrutural para acompanhamento de fluxos, etapas e andamento operacional.",
    },
    {
      id: "form",
      badge: "Prévia ilustrativa",
      title: "Novo formulário",
      caption: "Estruturação de campos, validações e tipos de solicitação por processo.",
    },
    {
      id: "workflow",
      badge: "Prévia ilustrativa",
      title: "Fluxo do processo",
      caption: "Encadeamento de etapas entre solicitação, validação e aprovação com permissões.",
    },
  ] satisfies readonly YouSaferPreviewItem[],
} as const;

export const YOUSAFER_FLOW_NARRATIVE: readonly NarrativeBlock[] = [
  {
    index: "03",
    eyebrow: "MINHA ATUAÇÃO",
    title: "MINHA ATUAÇÃO",
    description:
      "Responsável pelo desenvolvimento do YouSafer Flow desde sua estrutura inicial, incluindo a implementação de funcionalidades, formulários, automações, integrações com sistemas externos e controle de permissões.\n\nAtualmente, também atuo na manutenção, evolução da plataforma e implementação de melhorias.",
  },
  {
    index: "04",
    eyebrow: "DESAFIOS",
    title: "DESAFIOS",
    description:
      "Manter a consistência dos dados entre etapas, lidar com comportamentos inesperados em automações e integrações externas, investigar falhas em processos e preservar regras de negócio e controle de acesso durante alterações.",
  },
  {
    index: "05",
    eyebrow: "SOLUÇÕES",
    title: "SOLUÇÕES",
    description:
      "Análise de causa raiz em incidentes, implementação de ajustes em formulários, fluxos e integrações, revisão de regras de permissão e realização de testes e validações antes de cada publicação.",
  },
] as const;

export const YOUSAFER_FLOW_RESULTS = {
  index: "06",
  eyebrow: "RESULTADOS",
  title: "RESULTADOS",
  description:
    "Entregas técnicas voltadas à estabilidade dos fluxos e à confiabilidade das validações e acessos, sem divulgação de métricas internas confidenciais.",
  outcomes: [
    {
      id: "features",
      emphasis: "Funcionalidades",
      label: "Implementação e manutenção de fluxos, formulários e regras de negócio",
    },
    {
      id: "fixes",
      emphasis: "Correções",
      label: "Investigação e resolução de falhas em validações e permissões",
    },
    {
      id: "validations",
      emphasis: "Integrações",
      label: "Ajustes em serviços externos, testes e validação de melhorias publicadas",
    },
  ] satisfies readonly OutcomeItem[],
} as const;

export const YOUSAFER_FLOW_HIGHLIGHTS = {
  index: "07",
  eyebrow: "DESTAQUES DA ATUAÇÃO",
  items: [
    { id: "incidents", icon: "search", label: "Investigação de incidentes" },
    { id: "validation", icon: "ux", label: "Validação de melhorias" },
    { id: "integrations", icon: "integrations", label: "Integrações e APIs" },
    { id: "permissions", icon: "auth", label: "Ajustes de permissões" },
  ] satisfies readonly YouSaferHighlight[],
} as const;

export const YOUSAFER_FLOW_NEXT_CTA = {
  leftHeading: "VER PRÓXIMO PROJETO",
  eyebrow: "/ PRÓXIMO ESTUDO DE CASO",
  nextTitle: "LABORATÓRIO JAVA",
  nextNote: "Planejamento de estudos práticos em Java, Spring Boot e segurança de aplicações",
  href: "/trabalhos/laboratorio-java",
} as const;
