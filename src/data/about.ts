import { RESUME_PDF_PATH } from "@/data/site";

export interface PortraitImageConfig {
  readonly src: string;
  readonly alt: string;
}

export interface ExperienceItem {
  readonly index: string;
  readonly company: string;
  readonly role: string;
  readonly description: string;
  readonly caseStudyLink?: {
    readonly label: string;
    readonly href: string;
  };
}

export interface DirectionItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const ABOUT_META = {
  title: "Sobre — Artur Ferreira Silva",
  description:
    "Trajetória, experiência profissional como Desenvolvedor de Sistemas na YouSafer, formação em Sistemas de Informação na PUC Minas e direção profissional de Artur Ferreira Silva.",
} as const;

export const ABOUT_HERO = {
  eyebrow: "SOBRE / TRAJETÓRIA PROFISSIONAL",
  title: "Trajetória, visão e construção de carreira.",
  intro:
    "Sou Artur Ferreira Silva, Desenvolvedor de Sistemas na YouSafer e estudante de Sistemas de Informação na PUC Minas. Atuo no desenvolvimento e evolução de aplicações, integrações e soluções digitais, utilizando inteligência artificial como parte do meu processo de trabalho. Busco ampliar meus conhecimentos em desenvolvimento back-end, Java e segurança de aplicações.",
  /**
   * Para incluir uma fotografia real futuramente, salve a imagem em `public/images/`
   * e preencha `{ src: "/images/...", alt: "Retrato de Artur Ferreira Silva" }`.
   */
  portrait: {
    src: "/images/about/artur-portrait.webp",
    alt: "Retrato em preto e branco de Artur Ferreira Silva com detalhe geométrico azul cobalto ao fundo",
  } as PortraitImageConfig | null,
} as const;

export const ABOUT_WHO_AM_I = {
  index: "01",
  eyebrow: "QUEM SOU",
  title: "QUEM SOU",
  description:
    "Atuo no desenvolvimento de sistemas e na criação de soluções para problemas reais. Tenho experiência com aplicações web, integrações, automações e utilização prática de inteligência artificial no desenvolvimento, análise e resolução de problemas. Valorizo código organizado, segurança, aprendizado contínuo e soluções que gerem valor.",
} as const;

export const ABOUT_EXPERIENCE = {
  index: "02",
  eyebrow: "EXPERIÊNCIA PROFISSIONAL",
  items: [
    {
      index: "01",
      company: "YouSafer",
      role: "Desenvolvedor de Sistemas",
      description:
        "Atuação no desenvolvimento, manutenção e evolução de diferentes sistemas web, integrações e automações, participando da implementação de funcionalidades, investigação de problemas técnicos e melhoria contínua de plataformas digitais.",
      caseStudyLink: {
        label: "Ver estudo de caso YouSafer Flow",
        href: "/trabalhos/yousafer-flow",
      },
    },
    {
      index: "02",
      company: "Instituto Federal",
      role: "Estagiário",
      description:
        "Experiência anterior em ambiente institucional, contribuindo para minha base profissional e organização no trabalho em equipe.",
    },
  ] satisfies readonly ExperienceItem[],
} as const;

export const ABOUT_EDUCATION = {
  index: "03",
  eyebrow: "FORMAÇÃO ACADÊMICA",
  institution: "PUC Minas",
  course: "Sistemas de Informação",
  status: "Graduação em andamento",
  expectedGraduation: "Previsão de conclusão: 2028",
} as const;

export const ABOUT_DIRECTION = {
  index: "04",
  eyebrow: "DIREÇÃO PROFISSIONAL",
  items: [
    {
      id: "backend",
      title: "Desenvolvimento back-end",
      description:
        "Interesse em aprofundar conhecimentos em arquitetura de aplicações, APIs, modelagem de dados e engenharia de software.",
    },
    {
      id: "java-spring",
      title: "Java e Spring Boot",
      description:
        "Área de estudo e desenvolvimento profissional planejada para os próximos meses, com foco em construir projetos práticos progressivamente mais completos.",
    },
    {
      id: "cybersecurity",
      title: "Cibersegurança",
      description:
        "Interesse em segurança de aplicações, autenticação, controle de acesso, prevenção de vulnerabilidades e boas práticas de desenvolvimento seguro.",
    },
  ] satisfies readonly DirectionItem[],
} as const;

export const ABOUT_ACTIONS = {
  resumeLabel: "Baixar currículo",
  resumeHref: RESUME_PDF_PATH as string | null,
  resumePendingNote: "Currículo em PDF em breve",

  /**
   * Quando a rota `/contato` for implementada (Etapa 8), atualize `contactHref` para `"/contato"`.
   */
  contactLabel: "Entrar em contato",
  contactHref: "/contato" as string | null,
  contactPendingNote: "Página de contato em breve",
} as const;
