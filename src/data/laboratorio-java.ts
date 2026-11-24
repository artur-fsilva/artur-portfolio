import type { CaseStudyMetaItem } from "@/data/ace-finance";

export interface PlannedStudyLayer {
  readonly id: "core" | "api" | "security";
  readonly badge: string;
  readonly title: string;
  readonly caption: string;
  readonly topics: readonly string[];
}

export interface PlannedFeatureItem {
  readonly id: string;
  readonly label: string;
}

export interface NextStepItem {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export const LABORATORIO_JAVA_META = {
  title: "Laboratório Java — Planejamento de Estudos | Artur Ferreira Silva",
  description:
    "Planejamento inicial do Laboratório Java: projeto pessoal em preparação voltado ao estudo prático de Java, Spring Boot, desenvolvimento back-end e segurança de aplicações.",
} as const;

export const LABORATORIO_JAVA_HERO = {
  backHref: "/trabalhos",
  backLabel: "Voltar para Trabalhos",
  eyebrow: "PROJETO PESSOAL DE APRENDIZADO / EM PREPARAÇÃO",
  title: "LABORATÓRIO JAVA",
  subtitle:
    "Planejamento de estudos práticos voltados ao desenvolvimento back-end com Java, Spring Boot e boas práticas de segurança de aplicações.",
  meta: [
    {
      label: "CATEGORIA",
      value: "Projeto pessoal de aprendizado",
    },
    {
      label: "STATUS",
      value: "Em preparação",
    },
    {
      label: "ÁREA DE INTERESSE",
      value: "Java, back-end e segurança de aplicações",
    },
  ] satisfies readonly CaseStudyMetaItem[],
} as const;

export const LABORATORIO_JAVA_OBJECTIVE = {
  index: "01",
  eyebrow: "OBJETIVO",
  title: "OBJETIVO",
  description:
    "Desenvolver conhecimentos práticos em Java e construir aplicações back-end progressivamente mais completas, unindo fundamentos sólidos de linguagem, APIs REST, persistência de dados, testes automatizados e segurança.",
} as const;

export const LABORATORIO_JAVA_ARCHITECTURE = {
  index: "02",
  eyebrow: "ARQUITETURA",
  disclaimer:
    "Conteúdo planejado — representação ilustrativa da trilha técnica prevista antes do início do desenvolvimento.",
  layers: [
    {
      id: "core",
      badge: "Conteúdo planejado",
      title: "Base Java & POO",
      caption: "Domínio da linguagem, modelagem orientada a objetos e organização de código.",
      topics: ["Fundamentos de Java", "Programação orientada a objetos", "Estrutura de pacotes"],
    },
    {
      id: "api",
      badge: "Conteúdo planejado",
      title: "Spring Boot & Dados",
      caption: "Construção de APIs REST estruturadas e integração com banco de dados relacional.",
      topics: ["Endpoints REST", "Validação de entrada", "Persistência de dados"],
    },
    {
      id: "security",
      badge: "Conteúdo planejado",
      title: "Segurança & Testes",
      caption: "Autenticação, controle de acesso, testes automatizados e boas práticas.",
      topics: ["Autenticação e autorização", "Boas práticas de segurança", "Testes automatizados"],
    },
  ] satisfies readonly PlannedStudyLayer[],
} as const;

export const LABORATORIO_JAVA_PLANNED_FEATURES = {
  index: "03",
  eyebrow: "FUNCIONALIDADES PLANEJADAS",
  title: "OBJETIVOS DE ESTUDO",
  note: "Os itens abaixo representam objetivos de estudo previstos para o laboratório — ainda não são funcionalidades implementadas.",
  items: [
    { id: "java-fundamentals", label: "Fundamentos de Java" },
    { id: "oop", label: "Programação orientada a objetos" },
    { id: "spring-rest", label: "APIs REST com Spring Boot" },
    { id: "persistence", label: "Persistência de dados" },
    { id: "auth", label: "Autenticação e autorização" },
    { id: "tests", label: "Testes automatizados" },
    { id: "security", label: "Boas práticas de segurança" },
  ] satisfies readonly PlannedFeatureItem[],
} as const;

export const LABORATORIO_JAVA_LEARNINGS = {
  index: "04",
  eyebrow: "APRENDIZADOS",
  title: "APRENDIZADOS",
  message:
    "Esta seção será atualizada conforme o desenvolvimento dos primeiros projetos e a evolução dos estudos.",
} as const;

export const LABORATORIO_JAVA_NEXT_STEPS = {
  index: "05",
  eyebrow: "PRÓXIMOS PASSOS",
  note: "Planejamento inicial de progressão de estudos — não representa um histórico de entregas concluídas.",
  steps: [
    {
      step: "01",
      title: "Fundamentos de Java",
      description: "Sintaxe, tipos, coleções, exceções e boas práticas iniciais da linguagem.",
    },
    {
      step: "02",
      title: "Orientação a objetos",
      description: "Encapsulamento, composição, interfaces e modelagem limpa de domínio.",
    },
    {
      step: "03",
      title: "Spring Boot e APIs REST",
      description: "Criação de serviços web, rotas, DTOs e tratamento consistente de erros.",
    },
    {
      step: "04",
      title: "Banco de dados e persistência",
      description: "Modelagem relacional, consultas e integração com camada de persistência.",
    },
    {
      step: "05",
      title: "Autenticação e segurança",
      description: "Controle de acesso, proteção de rotas e prevenção de vulnerabilidades comuns.",
    },
    {
      step: "06",
      title: "Testes e publicação prática",
      description: "Testes automatizados e publicação de uma aplicação back-end funcional.",
    },
  ] satisfies readonly NextStepItem[],
} as const;

export const LABORATORIO_JAVA_NEXT_CTA = {
  leftHeading: "EXPLORAR PORTFÓLIO",
  eyebrow: "/ CONTINUAR NAVEGAÇÃO",
  nextTitle: "VER TODOS OS TRABALHOS",
  nextNote: "Voltar para a vitrine completa de projetos e estudos de caso",
  href: "/trabalhos",
} as const;
