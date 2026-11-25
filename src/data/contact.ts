import { RESUME_PDF_PATH } from "@/data/site";

export interface ContactCardItem {
  readonly id: "linkedin" | "github" | "email" | "whatsapp" | "resume";
  readonly label: string;
  readonly subtitle: string;
  readonly href: string | null;
  readonly external: boolean;
  readonly download?: boolean;
  readonly pendingNote?: string;
}

export interface AvailabilityItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export const CONTACT_META = {
  title: "Contato — Artur Ferreira Silva",
  description:
    "Entre em contato com Artur Ferreira Silva para oportunidades profissionais, projetos freelance e parcerias.",
} as const;

export const CONTACT_HERO = {
  eyebrow: "CONTATO •",
  titleLine1: "VAMOS",
  titleLine2: "CONVERSAR?",
  subtitle:
    "Artur está aberto a novas oportunidades, conexões e conversas na área de tecnologia, desenvolvimento e segurança.",
} as const;

export const CONTACT_CARDS: readonly ContactCardItem[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    subtitle: "Conecte-se comigo",
    href: "https://www.linkedin.com/in/artur-ferreira-silva-181105358/",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    subtitle: "Confira meus projetos",
    href: "https://github.com/artur-fsilva",
    external: true,
  },
  {
    id: "email",
    label: "E-mail",
    subtitle: "Envie uma mensagem direta",
    href: "mailto:arturfer2006@hotmail.com",
    external: false,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    subtitle: "Vamos conversar",
    href: "https://wa.me/5531998359590",
    external: true,
  },
  {
    id: "resume",
    label: "Currículo",
    subtitle: "Baixe meu currículo (PDF)",
    href: RESUME_PDF_PATH,
    external: false,
    download: true,
  },
] as const;

export const CONTACT_FORM_LIMITS = {
  nameMin: 2,
  nameMax: 100,
  emailMin: 5,
  emailMax: 160,
  messageMin: 10,
  messageMax: 2000,
} as const;

export const CONTACT_AVAILABILITY = {
  eyebrow: "DISPONIBILIDADE",
  items: [
    {
      id: "opportunities",
      title: "Oportunidades",
      description: "Aberto a novos desafios profissionais.",
    },
    {
      id: "networking",
      title: "Projetos & parcerias",
      description: "Desenvolvimento de soluções e trabalhos freelance.",
    },
    {
      id: "location",
      title: "Localização",
      description: "Grande BH, Minas Gerais · Remoto.",
    },
  ] satisfies readonly AvailabilityItem[],
} as const;

export const CONTACT_BOTTOM_CTA = {
  titleLine1: "VAMOS TIRAR UMA",
  titleLine2: "IDEIA DO PAPEL?",
  description:
    "Tem uma oportunidade, um projeto ou uma proposta? Entre em contato e vamos conversar.",
  buttonLabel: "Entrar em contato",
  href: "mailto:arturfer2006@hotmail.com",
} as const;
