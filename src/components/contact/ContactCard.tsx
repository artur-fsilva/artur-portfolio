import { ArrowUpRightIcon } from "@/components/ui/Icons";
import type { ContactCardItem } from "@/data/contact";

interface ContactCardProps {
  card: ContactCardItem;
}

function CardIcon({ id }: { id: ContactCardItem["id"] }) {
  switch (id) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d="M4.5 3A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3h-15ZM8.25 9.75v7.5H6v-7.5h2.25Zm-1.12-1.1a1.32 1.32 0 1 1 0-2.64 1.32 1.32 0 0 1 0 2.64Zm10.87 8.6h-2.25v-3.7c0-.88-.02-2.01-1.23-2.01-1.23 0-1.42.96-1.42 1.95v3.76H10.85v-7.5H13v1.03h.03c.3-.57 1.03-1.17 2.13-1.17 2.28 0 2.84 1.5 2.84 3.45v4.19Z" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
          />
        </svg>
      );
    case "email":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="M4 6.5L12 12.5L20 6.5" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-7 w-7">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91A9.85 9.85 0 0 0 19.05 4.9 9.85 9.85 0 0 0 12.04 2Zm0 18.17h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.25-8.22 8.25Zm4.52-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.38-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z" />
        </svg>
      );
    case "resume":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <path d="M6 3.5h8.5L19 8v12.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
          <path d="M14 3.5V8.5H19" />
          <path d="M8.5 13H15.5" />
          <path d="M8.5 16.5H13.5" />
        </svg>
      );
  }
}

function ArchitecturalBackdrop({ variant }: { variant: ContactCardItem["id"] }) {
  return (
    <svg
      viewBox="0 0 520 96"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={`card-concrete-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2A2A2A" />
          <stop offset="50%" stopColor="#6E6E6A" />
          <stop offset="100%" stopColor="#3B3B38" />
        </linearGradient>
      </defs>

      {/* Base preta */}
      <rect width="520" height="96" fill="#0A0A0A" />

      {/* Composição arquitetônica em concreto cinza com diagonais */}
      {variant === "linkedin" ? (
        <>
          <polygon
            points="240,0 385,0 470,96 290,96"
            fill={`url(#card-concrete-${variant})`}
            opacity="0.62"
          />
          <polygon points="365,0 520,0 520,96 450,96" fill="#181818" opacity="0.92" />
          <line x1="295" y1="0" x2="380" y2="96" stroke="#111" strokeWidth="1.2" opacity="0.7" />
        </>
      ) : null}

      {variant === "github" ? (
        <>
          <polygon
            points="220,0 520,0 520,96 310,96"
            fill={`url(#card-concrete-${variant})`}
            opacity="0.38"
          />
          <line x1="260" y1="0" x2="325" y2="96" stroke="#8A8A86" strokeWidth="1" opacity="0.32" />
          <line x1="295" y1="0" x2="360" y2="96" stroke="#8A8A86" strokeWidth="1" opacity="0.32" />
          <line x1="330" y1="0" x2="395" y2="96" stroke="#8A8A86" strokeWidth="1" opacity="0.32" />
          <line x1="365" y1="0" x2="430" y2="96" stroke="#8A8A86" strokeWidth="1" opacity="0.32" />
          <line x1="400" y1="0" x2="465" y2="96" stroke="#8A8A86" strokeWidth="1" opacity="0.32" />
        </>
      ) : null}

      {variant === "email" ? (
        <>
          <polygon
            points="270,0 520,0 520,96 210,96"
            fill={`url(#card-concrete-${variant})`}
            opacity="0.58"
          />
          <polygon points="210,96 390,0 430,0 260,96" fill="#121212" opacity="0.55" />
          <line x1="350" y1="0" x2="350" y2="96" stroke="#111" strokeWidth="1" opacity="0.45" />
          <line x1="430" y1="0" x2="430" y2="96" stroke="#111" strokeWidth="1" opacity="0.45" />
        </>
      ) : null}

      {variant === "whatsapp" ? (
        <>
          <polygon
            points="250,0 440,0 520,96 310,96"
            fill={`url(#card-concrete-${variant})`}
            opacity="0.54"
          />
          <polygon points="340,0 415,0 320,96 250,96" fill="#141414" opacity="0.6" />
          <line x1="305" y1="0" x2="390" y2="96" stroke="#111" strokeWidth="1.1" opacity="0.6" />
        </>
      ) : null}

      {variant === "resume" ? (
        <>
          <polygon
            points="340,0 520,0 520,96 340,96"
            fill={`url(#card-concrete-${variant})`}
            opacity="0.52"
          />
          <polygon points="295,0 385,0 385,96 295,96" fill="#232322" opacity="0.7" />
          <line x1="385" y1="0" x2="385" y2="96" stroke="#0C0C0C" strokeWidth="1.2" opacity="0.7" />
        </>
      ) : null}

      {/* Triângulo azul cobalto no canto inferior direito */}
      <polygon points="455,96 520,38 520,96" fill="#001AFF" />
    </svg>
  );
}

export function ContactCard({ card }: ContactCardProps) {
  const inner = (
    <>
      <ArchitecturalBackdrop variant={card.id} />

      <div className="relative z-10 flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex items-center gap-4 sm:gap-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
            <CardIcon id={card.id} />
          </span>

          <div className="border-l border-white/25 pl-4 sm:pl-5">
            <p className="text-lg leading-tight font-bold tracking-tight text-white sm:text-xl">
              {card.label}
            </p>
            <p className="mt-0.5 text-xs text-white/75 sm:text-sm">{card.subtitle}</p>
          </div>
        </div>

        <ArrowUpRightIcon className="h-5 w-5 shrink-0 text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </>
  );

  if (!card.href) {
    return (
      <div
        aria-disabled="true"
        title={card.pendingNote}
        className="relative flex w-full cursor-not-allowed items-center overflow-hidden opacity-85"
      >
        {inner}
      </div>
    );
  }

  return (
    <a
      href={card.href}
      download={card.download ? true : undefined}
      target={card.external ? "_blank" : undefined}
      rel={card.external ? "noopener noreferrer" : undefined}
      className="group relative flex w-full items-center overflow-hidden transition-opacity hover:opacity-95"
    >
      {inner}
    </a>
  );
}
