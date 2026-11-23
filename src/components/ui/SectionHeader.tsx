interface SectionHeaderProps {
  title: string;
  count?: string;
  headingId?: string;
}

export function SectionHeader({ title, count, headingId }: SectionHeaderProps) {
  return (
    <div className="border-rule border-t pt-4 pb-7 sm:pb-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-cobalt inline-block h-[2.5px] w-5" aria-hidden="true" />
          <h2
            id={headingId}
            className="text-ink text-[11px] font-medium tracking-[0.22em] uppercase"
          >
            {title}
          </h2>
        </div>

        {count ? (
          <span className="text-muted font-mono text-xs tracking-wider tabular-nums">/{count}</span>
        ) : null}
      </div>
    </div>
  );
}
