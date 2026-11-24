import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

function getMetadataBase(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured && configured.startsWith("https://")) {
    return new URL(configured);
  }

  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelUrl) {
    return new URL(`https://${vercelUrl.replace(/^https?:\/\//, "")}`);
  }

  return undefined;
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.ownerName,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${anton.variable} ${barlowCondensed.variable}`}
    >
      <body className="bg-paper text-ink flex min-h-screen flex-col antialiased">
        <a
          href="#conteudo-principal"
          className="focus:bg-cobalt sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Pular para o conteúdo principal
        </a>
        <SiteHeader />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
