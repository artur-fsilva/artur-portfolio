import type { DetailPreviewItem } from "@/data/ace-finance";

interface PreviewProps {
  items: readonly DetailPreviewItem[];
}

function DashboardIllustration() {
  return (
    <div
      className="relative flex aspect-[16/11] w-full flex-col justify-between overflow-hidden bg-[#070B18] p-4 text-white"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-8 -left-8 h-32 w-32 rounded-full bg-[#001AFF]/45 blur-2xl" />
      <div className="pointer-events-none absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-[#001AFF]/35 blur-2xl" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="bg-cobalt inline-block h-2.5 w-2.5 rounded-xs" />
          <span className="text-xs font-semibold tracking-tight text-white/95">Ace Finance</span>
        </div>
        <span className="rounded-sm border border-white/15 bg-white/5 px-2 py-0.5 text-[9px] tracking-[0.16em] text-white/65 uppercase">
          Prévia ilustrativa
        </span>
      </div>

      <div className="relative z-10 grid flex-1 grid-cols-12 gap-3 pt-3">
        <div className="col-span-2 flex flex-col items-center gap-2 rounded-sm border border-white/10 bg-white/[0.03] py-2.5">
          <span className="bg-cobalt h-2.5 w-2.5 rounded-xs" />
          <span className="h-2.5 w-2.5 rounded-xs bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-xs bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-xs bg-white/20" />
        </div>

        <div className="col-span-10 flex flex-col justify-between gap-2.5">
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[10px] text-white/55">Saldo consolidado</p>
              <div className="mt-2 h-2.5 w-20 rounded-xs bg-white/75" />
              <div className="mt-2 h-1.5 w-12 rounded-xs bg-emerald-400/60" />
            </div>
            <div className="rounded-sm border border-white/10 bg-white/[0.04] p-2.5">
              <p className="text-[10px] text-white/55">Gastos do período</p>
              <div className="mt-2 h-2.5 w-16 rounded-xs bg-white/75" />
              <div className="mt-2 h-1.5 w-10 rounded-xs bg-white/30" />
            </div>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/[0.04] p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-white/55">Fluxo mensal</span>
              <span className="text-[9px] text-white/40">Visão estrutural</span>
            </div>
            <div className="mt-2.5 flex h-10 items-end gap-1.5">
              <span className="h-4 flex-1 rounded-t-xs bg-white/15" />
              <span className="h-6 flex-1 rounded-t-xs bg-white/20" />
              <span className="h-5 flex-1 rounded-t-xs bg-white/20" />
              <span className="bg-cobalt/70 h-8 flex-1 rounded-t-xs" />
              <span className="h-7 flex-1 rounded-t-xs bg-white/25" />
              <span className="bg-cobalt h-10 flex-1 rounded-t-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AssistantIllustration() {
  const prompts = [
    "Planejar metas financeiras",
    "Analisar categorias de gastos",
    "Sugerir ajustes de economia",
  ];

  return (
    <div
      className="relative flex aspect-[16/11] w-full flex-col justify-between overflow-hidden bg-[#070B18] p-4 text-white"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -top-10 right-0 h-32 w-32 rounded-full bg-[#001AFF]/40 blur-2xl" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-cobalt text-sm leading-none">✦</span>
          <span className="text-xs font-semibold tracking-tight text-white/95">
            Assistente de IA
          </span>
        </div>
        <span className="rounded-sm border border-white/15 bg-white/5 px-2 py-0.5 text-[9px] tracking-[0.16em] text-white/65 uppercase">
          Prévia ilustrativa
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-2.5 pt-3">
        <div className="rounded-sm border border-white/15 bg-white/[0.05] px-3 py-2 text-[11px] text-white/60">
          Como posso ajudar no seu planejamento hoje?
        </div>

        <div className="flex flex-col gap-1.5">
          {prompts.map((prompt) => (
            <div
              key={prompt}
              className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[11px] text-white/80"
            >
              <span>{prompt}</span>
              <span className="text-white/40">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubscriptionIllustration() {
  return (
    <div
      className="relative flex aspect-[16/11] w-full flex-col justify-between overflow-hidden bg-[#070B18] p-4 text-white"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute -right-8 -bottom-10 h-36 w-36 rounded-full bg-[#001AFF]/45 blur-2xl" />

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
        <span className="text-xs font-semibold tracking-tight text-white/95">Assinatura</span>
        <span className="rounded-sm border border-white/15 bg-white/5 px-2 py-0.5 text-[9px] tracking-[0.16em] text-white/65 uppercase">
          Prévia ilustrativa
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center gap-3 pt-3">
        <div className="flex items-center justify-between rounded-sm border border-white/15 bg-white/[0.05] p-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-cobalt flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold text-white">
              ✓
            </span>
            <div>
              <p className="text-xs font-semibold text-white">Plano recorrente</p>
              <p className="text-[10px] text-white/55">Status de assinatura ativa</p>
            </div>
          </div>
          <span className="text-xs text-white/40">•••</span>
        </div>

        <div className="rounded-sm border border-white/10 bg-white/[0.04] p-3">
          <div className="flex items-center justify-between text-[10px] text-white/65">
            <span>Uso de recursos do plano</span>
            <span>Em andamento</span>
          </div>
          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="bg-cobalt h-full w-3/5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function AceFinanceDetailPreviews({ items }: PreviewProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item) => (
        <figure key={item.id} className="flex flex-col">
          <div className="border-rule overflow-hidden border">
            {item.id === "dashboard" ? <DashboardIllustration /> : null}
            {item.id === "assistant" ? <AssistantIllustration /> : null}
            {item.id === "subscription" ? <SubscriptionIllustration /> : null}
          </div>

          <figcaption className="mt-3 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-ink text-sm font-semibold">{item.title}</span>
              <span className="text-muted text-[10px] font-medium tracking-[0.16em] uppercase">
                {item.badge}
              </span>
            </div>
            <p className="text-muted text-xs leading-relaxed">{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

