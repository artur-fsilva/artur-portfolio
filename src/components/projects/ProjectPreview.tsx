import Image from "next/image";
import { AceFinancePreview } from "@/components/home/AceFinancePreview";
import type { ProjectItem } from "@/data/projects";

interface ProjectPreviewProps {
  project: ProjectItem;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.image) {
    return (
      <div className="bg-ink relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (project.slug === "ace-finance") {
    return <AceFinancePreview />;
  }

  if (project.slug === "yousafer-flow") {
    return (
      <div
        className="bg-cobalt relative aspect-[16/10] w-full overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,#2340ff_0%,#001aff_44%,#060812_100%)]" />
        <div className="absolute inset-x-5 top-5 -bottom-5 origin-top-left -rotate-3 rounded-t-2xl border border-white/15 bg-[#121318] p-5 text-white shadow-2xl sm:inset-x-7 sm:top-6">
          <div className="flex h-full gap-4">
            <div className="flex w-9 shrink-0 flex-col items-center gap-3.5 border-r border-white/10 pt-2 pr-3">
              <span className="h-4 w-4 rounded-sm border border-white/35" />
              <span className="h-4 w-4 rounded-sm border border-white/35" />
              <span className="h-4 w-4 rounded-sm border border-white/35" />
              <span className="h-4 w-4 rounded-full border border-white/35" />
            </div>
            <div className="flex flex-1 flex-col gap-4 pt-1">
              <div className="flex items-center gap-2.5">
                <span className="border-cobalt h-4 w-4 rotate-45 rounded-xs border-2" />
                <span className="text-sm font-semibold tracking-tight">YouSafer Flow</span>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="bg-cobalt h-2.5 w-3/5 rounded-full" />
                <div className="mt-3 h-2 w-4/5 rounded-full bg-white/35" />
                <div className="mt-2.5 h-2 w-2/3 rounded-full bg-white/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === "laboratorio-java") {
    return (
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0C14] p-5 font-mono text-xs text-white/85 select-none sm:p-6"
        aria-hidden="true"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,#001aff_0%,transparent_52%)] opacity-80" />
        <div className="relative flex h-full flex-col justify-center gap-1.5 leading-relaxed">
          <div>
            <span className="mr-4 text-white/30">42</span>
            <span className="text-[#9B8CFF]">@RestController</span>
          </div>
          <div>
            <span className="mr-4 text-white/30">43</span>
            <span className="text-[#7AA2FF]">public class</span> UsuarioController {"{"}
          </div>
          <div>
            <span className="mr-4 text-white/30">44</span>
          </div>
          <div>
            <span className="mr-4 text-white/30">45</span>
            <span className="ml-4 text-[#9B8CFF]">@GetMapping</span>(
            <span className="text-[#8CE0B0]">&quot;/usuarios&quot;</span>)
          </div>
          <div>
            <span className="mr-4 text-white/30">46</span>
            <span className="ml-4 text-[#7AA2FF]">public</span> List&lt;Usuario&gt; listar() {"{"}
          </div>
          <div>
            <span className="mr-4 text-white/30">47</span>
            <span className="ml-8 text-[#9B8CFF]">return</span> usuarioService.findAll();
          </div>
          <div>
            <span className="mr-4 text-white/30">48</span>
            <span className="ml-4">{"}"}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-cobalt relative aspect-[16/10] w-full overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,#2340ff_0%,#001aff_45%,#0A135C_100%)]" />
      <div className="text-ink absolute inset-x-4 top-4 -bottom-4 origin-top-left -rotate-2 rounded-t-xl border border-black/10 bg-[#F7F6F2] p-4 shadow-2xl sm:inset-x-6 sm:top-5 sm:p-5">
        <div className="flex items-center justify-between border-b border-black/10 pb-2.5">
          <span className="text-ink text-xs font-semibold tracking-tight">Marina</span>
          <div className="text-muted flex items-center gap-3 text-[10px]">
            <span>Início</span>
            <span>Serviços</span>
            <span>Sobre</span>
            <span className="bg-cobalt rounded px-2 py-0.5 text-white">Agendar</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-12 items-center gap-3">
          <div className="col-span-7">
            <p className="text-muted text-[9px] tracking-[0.16em] uppercase">SAÚDE E BEM-ESTAR</p>
            <p className="text-ink mt-1 text-base leading-tight font-semibold sm:text-lg">
              Cuidado integral para sua saúde.
            </p>
            <p className="text-muted mt-1.5 text-[10px] leading-snug">
              Acompanhamento personalizado e experiência acolhedora.
            </p>
          </div>
          <div className="col-span-5 h-24 rounded-lg bg-[#E4E2DA] sm:h-28" />
        </div>
      </div>
    </div>
  );
}
