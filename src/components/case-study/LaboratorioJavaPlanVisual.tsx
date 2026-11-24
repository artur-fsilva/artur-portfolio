import type { PlannedStudyLayer } from "@/data/laboratorio-java";

interface PlanVisualProps {
  layers: readonly PlannedStudyLayer[];
}

export function LaboratorioJavaPlanVisual({ layers }: PlanVisualProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {layers.map((layer, idx) => (
        <figure key={layer.id} className="flex flex-col">
          <div
            className="border-rule relative flex aspect-[16/11] w-full flex-col justify-between overflow-hidden border bg-[#070B18] p-4 text-white"
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-[#001AFF]/40 blur-2xl" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] font-semibold text-white/60">
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold tracking-tight text-white/95">
                  {layer.title}
                </span>
              </div>
              <span className="rounded-sm border border-white/15 bg-white/5 px-2 py-0.5 text-[9px] tracking-[0.16em] text-white/65 uppercase">
                {layer.badge}
              </span>
            </div>

            <ul className="relative z-10 flex flex-1 flex-col justify-center gap-2 pt-3">
              {layer.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-center gap-2.5 rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] text-white/85"
                >
                  <span className="bg-cobalt inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          <figcaption className="mt-3 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-2">
              <span className="text-ink text-sm font-semibold">{layer.title}</span>
              <span className="text-muted text-[10px] font-medium tracking-[0.16em] uppercase">
                {layer.badge}
              </span>
            </div>
            <p className="text-muted text-xs leading-relaxed">{layer.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
