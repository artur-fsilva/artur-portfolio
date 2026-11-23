import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import type { ProjectItem } from "@/data/projects";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col">
      {project.caseStudyReady ? (
        <Link href={project.href} className="block overflow-hidden">
          <ProjectPreview project={project} />
        </Link>
      ) : (
        <div className="overflow-hidden">
          <ProjectPreview project={project} />
        </div>
      )}

      <div className="mt-6 flex items-start gap-5">
        <span className="font-condensed text-ink/90 text-4xl leading-none font-normal tabular-nums sm:text-5xl">
          {project.index}
        </span>

        <div className="border-rule flex flex-1 items-end justify-between gap-4 border-l pl-5">
          <div>
            <p className="text-muted text-[11px] font-medium tracking-[0.22em] uppercase">
              {project.category}
            </p>

            <h3 className="text-ink mt-1.5 text-2xl font-bold tracking-tight">
              {project.caseStudyReady ? (
                <Link href={project.href} className="hover:text-cobalt transition-colors">
                  {project.title}
                </Link>
              ) : (
                <>
                  {project.title}
                  <span className="sr-only"> — estudo de caso em breve</span>
                </>
              )}
            </h3>

            <p className="text-muted mt-2 text-sm leading-relaxed sm:text-[15px]">
              {project.description}
            </p>
          </div>

          {project.caseStudyReady ? (
            <Link
              href={project.href}
              aria-label={`Ver estudo de caso de ${project.title}`}
              className="text-ink hover:text-cobalt shrink-0 p-1 transition-colors"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
            </Link>
          ) : (
            <span
              title="Estudo de caso em breve"
              aria-label="Estudo de caso em breve"
              className="text-ink/30 shrink-0 p-1"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
