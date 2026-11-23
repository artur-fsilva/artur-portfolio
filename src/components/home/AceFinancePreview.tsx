export function AceFinancePreview() {
  return (
    <div
      className="bg-cobalt relative aspect-[16/10] w-full overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Fundo azul cobalto com iluminação direcional fiel ao wireframe */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,#2340ff_0%,#001aff_42%,#040714_100%)]" />

      {/* Janela principal do dashboard em perspectiva */}
      <div className="absolute inset-x-5 top-5 -bottom-5 origin-top-left -rotate-3 rounded-t-2xl border border-white/15 bg-[#101218] p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.65)] sm:inset-x-7 sm:top-6 sm:p-5 lg:inset-x-8 lg:top-7 lg:p-6">
        <div className="flex h-full gap-4 sm:gap-5">
          {/* Sidebar com ícones reais */}
          <div className="flex w-10 shrink-0 flex-col items-center gap-3.5 border-r border-white/10 pt-2 pr-3.5 sm:w-12 sm:pr-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-md text-white/45">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path d="M3 9.5L10 3.5L17 9.5V16.5H12.5V12H7.5V16.5H3V9.5Z" />
              </svg>
            </span>
            <span className="bg-cobalt flex h-7 w-7 items-center justify-center rounded-md text-white shadow-[0_0_16px_rgba(0,26,255,0.6)]">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <rect x="3" y="3" width="5.5" height="5.5" rx="1" />
                <rect x="11.5" y="3" width="5.5" height="5.5" rx="1" />
                <rect x="3" y="11.5" width="5.5" height="5.5" rx="1" />
                <rect x="11.5" y="11.5" width="5.5" height="5.5" rx="1" />
              </svg>
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-md text-white/45">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <path d="M4 15V10M10 15V6M16 15V8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-md text-white/45">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-4 w-4"
              >
                <circle cx="9" cy="9" r="5" />
                <path d="M13 13L16.5 16.5" strokeLinecap="round" />
              </svg>
            </span>
          </div>

          {/* Área principal do painel (sem valores monetários fictícios) */}
          <div className="flex flex-1 flex-col gap-3 sm:gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2.5">
                <span className="bg-cobalt/20 text-cobalt flex h-5 w-5 items-center justify-center rounded">
                  <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                    <path d="M8 2L14 13H2L8 2Z" />
                  </svg>
                </span>
                <span className="text-sm font-semibold tracking-tight text-white">Ace Finance</span>
              </div>
              <span className="rounded border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] tracking-wider text-white/60 uppercase">
                SaaS
              </span>
            </div>

            <div className="text-xs font-medium text-white/75">Visão financeira</div>

            {/* Cards estruturais sem métricas inventadas */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/55">Receita</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="mt-2.5 flex items-end gap-1.5">
                  <span className="h-3 w-20 rounded-sm bg-white/80" />
                  <span className="h-2 w-8 rounded-sm bg-emerald-400/40" />
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-white/55">Despesas</span>
                  <span className="bg-cobalt h-1.5 w-1.5 rounded-full" />
                </div>
                <div className="mt-2.5 flex items-end gap-1.5">
                  <span className="h-3 w-16 rounded-sm bg-white/70" />
                  <span className="h-2 w-7 rounded-sm bg-white/25" />
                </div>
              </div>
            </div>

            {/* Gráfico em curva azul cobalto */}
            <div className="mt-auto overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] pt-3">
              <svg viewBox="0 0 280 68" fill="none" className="h-14 w-full sm:h-16">
                <defs>
                  <linearGradient id="ace-chart-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#001AFF" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#001AFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="22" x2="280" y2="22" stroke="#FFFFFF" strokeOpacity="0.06" />
                <line x1="0" y1="44" x2="280" y2="44" stroke="#FFFFFF" strokeOpacity="0.06" />
                <path
                  d="M0 54C36 52 54 28 92 32C128 36 148 14 184 22C220 30 244 12 280 18V68H0V54Z"
                  fill="url(#ace-chart-fill)"
                />
                <path
                  d="M0 54C36 52 54 28 92 32C128 36 148 14 184 22C220 30 244 12 280 18"
                  stroke="#334EFF"
                  strokeWidth="2.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
