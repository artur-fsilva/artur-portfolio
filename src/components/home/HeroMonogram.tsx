export function HeroMonogram() {
  return (
    <div className="relative flex w-full items-center justify-end select-none" aria-hidden="true">
      <svg
        viewBox="0 0 560 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full max-w-[640px]"
      >
        <defs>
          <linearGradient id="af-concrete-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B8B7B2" />
            <stop offset="48%" stopColor="#8F8E8A" />
            <stop offset="100%" stopColor="#5D5D5A" />
          </linearGradient>

          <filter id="af-concrete-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72"
              numOctaves="4"
              seed="7"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.12
                      0 0 0 0 0.12
                      0 0 0 0 0.12
                      0 0 0 0.28 0"
              in="noise"
              result="monoNoise"
            />
            <feComposite in="monoNoise" in2="SourceGraphic" operator="in" />
          </filter>

          <clipPath id="af-letterform">
            {/* Letra A monumental inclinada */}
            <path d="M12 432L174 8H288L254 432H158L168 332H112L74 432H12ZM136 254H174L184 128L136 254Z" />
            {/* Letra F monumental inclinada */}
            <path d="M276 432L344 8H552L536 96H416L400 186H510L494 270H384L358 432H276Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#af-letterform)">
          {/* Base de concreto arquitetônico */}
          <rect x="0" y="0" width="560" height="440" fill="url(#af-concrete-base)" />

          {/* Placas e juntas sutis de concreto */}
          <rect
            x="0"
            y="0"
            width="560"
            height="440"
            fill="#000000"
            filter="url(#af-concrete-grain)"
          />
          <line
            x1="0"
            y1="110"
            x2="560"
            y2="110"
            stroke="#2D2D2B"
            strokeWidth="1.25"
            opacity="0.45"
          />
          <line
            x1="0"
            y1="225"
            x2="560"
            y2="225"
            stroke="#2D2D2B"
            strokeWidth="1.25"
            opacity="0.45"
          />
          <line
            x1="0"
            y1="340"
            x2="560"
            y2="340"
            stroke="#2D2D2B"
            strokeWidth="1.25"
            opacity="0.4"
          />
          <line
            x1="190"
            y1="0"
            x2="190"
            y2="440"
            stroke="#2D2D2B"
            strokeWidth="1.25"
            opacity="0.35"
          />
          <line
            x1="380"
            y1="0"
            x2="380"
            y2="440"
            stroke="#2D2D2B"
            strokeWidth="1.25"
            opacity="0.35"
          />

          {/* Bloco geométrico azul cobalto no topo direito */}
          <polygon points="315,0 560,0 560,152 245,255" fill="#001AFF" />

          {/* Faixa diagonal preta de alto contraste */}
          <polygon points="0,360 560,36 560,145 0,440" fill="#0C0C0C" />

          {/* Sombra diagonal superior esquerda */}
          <polygon points="0,0 225,0 0,185" fill="#0C0C0C" opacity="0.88" />
        </g>
      </svg>
    </div>
  );
}
