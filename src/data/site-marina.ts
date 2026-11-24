import type {
  CaseStudyMetaItem,
  HighlightIcon,
  NarrativeBlock,
  OutcomeItem,
  OverviewPillarIcon,
} from "@/data/ace-finance";

export interface SiteMarinaOverviewPillar {
  readonly id: string;
  readonly icon: OverviewPillarIcon;
  readonly label: string;
}

export interface SiteMarinaScreenshot {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
  readonly title: string;
  readonly caption: string;
}

export interface SiteMarinaHighlight {
  readonly id: string;
  readonly icon: HighlightIcon;
  readonly label: string;
}

export const SITE_MARINA_META = {
  title: "Site Marina — Estudo de Caso | Artur Ferreira Silva",
  description:
    "Estudo de caso do Site Marina Ferreira: proposta de site institucional para fisioterapia especializada em zumbido, com foco em UX, clareza informacional e estrutura de pré-agendamento.",
} as const;

export const SITE_MARINA_HERO = {
  backHref: "/trabalhos",
  backLabel: "Voltar para Trabalhos",
  eyebrow: "ESTUDO DE CASO / PROPOSTA DE SOLUÇÃO DIGITAL",
  title: "SITE MARINA",
  subtitle:
    "Site institucional desenvolvido como proposta comercial para apresentação profissional em fisioterapia especializada no cuidado do zumbido.",
  visitUrl: "https://marina-ferreira-fisio.vercel.app/",
  visitLabel: "Visitar site",
  meta: [
    {
      label: "TIPO",
      value: "Proposta comercial",
    },
    {
      label: "FOCO",
      value: "UX, clareza clínica e presença digital",
    },
    {
      label: "STATUS",
      value: "Versão publicada para apresentação",
    },
  ] satisfies readonly CaseStudyMetaItem[],
} as const;

export const SITE_MARINA_OVERVIEW = {
  index: "01",
  eyebrow: "VISÃO GERAL",
  title: "VISÃO GERAL",
  description:
    "Proposta de site institucional criada para apresentar a atuação da fisioterapeuta Marina Ferreira no cuidado do zumbido somatossensorial, organizando sinais, etapas da avaliação, diferenciais e interface de pré-agendamento com transparência sobre privacidade.",
  pillars: [
    { id: "ux", icon: "dashboard", label: "Organização clínica" },
    { id: "positioning", icon: "ai", label: "Apresentação profissional" },
    { id: "scheduling", icon: "subscriptions", label: "Pré-agendamento" },
    { id: "privacy", icon: "auth", label: "Transparência de dados" },
  ] satisfies readonly SiteMarinaOverviewPillar[],
} as const;

export const SITE_MARINA_DETAILS = {
  index: "02",
  eyebrow: "PROJETO EM DETALHE",
  note: "Capturas reais da interface publicada em produção, sem preenchimento de dados pessoais ou clínicos.",
  screenshots: [
    {
      id: "home",
      src: "/images/site-marina/home.png",
      alt: "Captura da página inicial do Site Marina Ferreira apresentando o cuidado fisioterapêutico especializado em zumbido",
      title: "Página inicial",
      caption:
        "Proposta de valor acolhedora, navegação por âncoras e síntese da abordagem fisioterapêutica.",
    },
    {
      id: "sobre",
      src: "/images/site-marina/sobre-diferenciais.png",
      alt: "Captura da seção Sobre a Profissional e diferenciais do atendimento no Site Marina Ferreira",
      title: "Apresentação e diferenciais",
      caption:
        "Diretrizes da prática clínica, fundamentação científica e posicionamento ético sem promessas de cura.",
    },
    {
      id: "pre-agendamento",
      src: "/images/site-marina/pre-agendamento.png",
      alt: "Captura da área de pré-agendamento do Site Marina Ferreira exibindo campos vazios e aviso de transparência de privacidade",
      title: "Área de pré-agendamento",
      caption:
        "Interface de solicitação com questionário inicial e aviso explícito de privacidade e uso de dados.",
    },
  ] satisfies readonly SiteMarinaScreenshot[],
} as const;

export const SITE_MARINA_NARRATIVE: readonly NarrativeBlock[] = [
  {
    index: "03",
    eyebrow: "MINHA ATUAÇÃO",
    title: "MINHA ATUAÇÃO",
    description:
      "Estruturação da arquitetura de informação, desenho de interface editorial acolhedora, desenvolvimento do site institucional e publicação da versão de demonstração.",
  },
  {
    index: "04",
    eyebrow: "DESAFIOS",
    title: "DESAFIOS",
    description:
      "Comunicar um tema clínico sensível com linguagem acessível, equilibrar acolhimento com rigor ético e estruturar o fluxo de contato sem gerar promessas irreais.",
  },
  {
    index: "05",
    eyebrow: "SOLUÇÕES",
    title: "SOLUÇÕES",
    description:
      "Jornada clara dividida em sinais e sintomas, etapas da avaliação, diferenciais, FAQ, orientações de atendimento e formulários com avisos transparentes de privacidade.",
  },
] as const;

export const SITE_MARINA_RESULTS = {
  index: "06",
  eyebrow: "RESULTADOS",
  title: "RESULTADOS",
  description:
    "O projeto resultou em uma proposta digital publicada e navegável, pronta para demonstração comercial. Como ainda não foi adquirido pela profissional, os resultados apresentados são estritamente qualitativos.",
  outcomes: [
    {
      id: "published",
      emphasis: "Publicado",
      label: "Versão online acessível para demonstração",
    },
    {
      id: "structure",
      emphasis: "Jornada",
      label: "Conteúdo clínico organizado em seções claras",
    },
    {
      id: "ethics",
      emphasis: "Ética & LGPD",
      label: "Avisos claros sobre privacidade e limites clínicos",
    },
  ] satisfies readonly OutcomeItem[],
} as const;

export const SITE_MARINA_HIGHLIGHTS = {
  index: "07",
  eyebrow: "DESTAQUES DO PROJETO",
  items: [
    { id: "product", icon: "product", label: "Site institucional" },
    { id: "ux", icon: "ux", label: "UX e clareza clínica" },
    { id: "integrations", icon: "integrations", label: "Navegação responsiva" },
    { id: "ai", icon: "ai", label: "Diferenciais e FAQ" },
    { id: "subscriptions", icon: "subscriptions", label: "Interface de pré-agendamento" },
  ] satisfies readonly SiteMarinaHighlight[],
} as const;

export const SITE_MARINA_NEXT_CTA = {
  leftHeading: "VER PRÓXIMO PROJETO",
  eyebrow: "/ PRÓXIMO ESTUDO DE CASO",
  nextTitle: "ACE FINANCE",
  nextNote: "Produto digital autoral com foco em dashboard, assinaturas e IA aplicada",
  href: "/trabalhos/ace-finance",
} as const;

