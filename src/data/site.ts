export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface SocialLink {
  readonly label: string;
  readonly href: string;
  readonly external: boolean;
}

export const SITE_CONFIG = {
  brandShort: "AF",
  brandLabel: "PORTFÓLIO",
  ownerName: "Artur Ferreira Silva",
  copyrightYear: 2026,
  title: "Artur Ferreira Silva",
  description:
    "Portfólio profissional de Artur Ferreira Silva. Tecnologia aplicada a problemas reais, sistemas e segurança de aplicações.",
} as const;

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "Trabalhos", href: "/trabalhos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;

function sanitizeExternalUrl(url: string | undefined): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" || parsed.protocol === "mailto:") {
      return parsed.toString();
    }
    return null;
  } catch {
    return null;
  }
}

export function getSocialLinks(): readonly SocialLink[] {
  const linkedin = sanitizeExternalUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL);
  const github = sanitizeExternalUrl(process.env.NEXT_PUBLIC_GITHUB_URL);
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  const mailto = email ? sanitizeExternalUrl(`mailto:${email}`) : null;

  return [
    {
      label: "LinkedIn",
      href: linkedin ?? "/contato",
      external: Boolean(linkedin),
    },
    {
      label: "GitHub",
      href: github ?? "/contato",
      external: Boolean(github),
    },
    {
      label: "E-mail",
      href: mailto ?? "/contato",
      external: Boolean(mailto),
    },
  ];
}
