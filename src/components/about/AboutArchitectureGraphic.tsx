export function AboutArchitectureGraphic() {
  return (
    <div className="mt-4 w-full max-w-md overflow-hidden select-none" aria-hidden="true">
      <svg
        viewBox="0 0 480 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block h-auto w-full"
      >
        <defs>
          <linearGradient id="about-concrete-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C8C7C2" />
            <stop offset="55%" stopColor="#A5A49F" />
            <stop offset="100%" stopColor="#85847F" />
          </linearGradient>

          <linearGradient id="about-concrete-shadow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3B3B39" />
            <stop offset="100%" stopColor="#141413" />
          </linearGradient>

          <filter id="about-concrete-grain" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              seed="11"
              result="noise"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.08
                      0 0 0 0 0.08
                      0 0 0 0 0.08
                      0 0 0 0.22 0"
              in="noise"
              result="monoNoise"
            />
            <feComposite in="monoNoise" in2="SourceGraphic" operator="in" />
          </filter>
        </defs>

        {/* Fundo azul cobalto intenso */}
        <rect x="0" y="0" width="480" height="144" fill="#001AFF" />

        {/* Fachada esquerda iluminada de concreto */}
        <polygon points="0,138 318,22 318,144 0,144" fill="url(#about-concrete-light)" />

        {/* Abertura arquitetônica em sombra profunda na face esquerda */}
        <polygon points="105,144 226,98 226,144" fill="#0D0D0D" />
        <polygon points="226,98 242,104 242,144 226,144" fill="#2A2A28" />

        {/* Juntas sutis de placas de concreto na fachada esquerda */}
        <line x1="60" y1="116" x2="318" y2="22" stroke="#5E5D59" strokeWidth="0.9" opacity="0.45" />
        <line x1="120" y1="121" x2="318" y2="48" stroke="#5E5D59" strokeWidth="0.9" opacity="0.4" />
        <line
          x1="185"
          y1="122"
          x2="318"
          y2="74"
          stroke="#5E5D59"
          strokeWidth="0.9"
          opacity="0.35"
        />
        <line x1="258" y1="44" x2="258" y2="144" stroke="#5E5D59" strokeWidth="0.9" opacity="0.4" />
        <line x1="290" y1="32" x2="290" y2="144" stroke="#5E5D59" strokeWidth="0.9" opacity="0.4" />

        {/* Fachada direita em sombra de alto contraste */}
        <polygon points="318,22 480,114 480,144 318,144" fill="url(#about-concrete-shadow)" />

        {/* Aresta vertical de alto contraste entre as duas faces */}
        <line x1="318" y1="22" x2="318" y2="144" stroke="#111111" strokeWidth="1.5" opacity="0.7" />

        {/* Textura sutil de concreto aplicada sobre a estrutura */}
        <polygon
          points="0,138 318,22 480,114 480,144 0,144"
          fill="#000000"
          filter="url(#about-concrete-grain)"
        />
      </svg>
    </div>
  );
}
