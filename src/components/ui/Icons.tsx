interface IconProps {
  className?: string;
}

export function ArrowUpRightIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M4.5 11.5L11.5 4.5" strokeLinecap="square" />
      <path d="M5.5 4.5H11.5V10.5" strokeLinecap="square" />
    </svg>
  );
}

export function PlusIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 5V19" />
      <path d="M5 12H19" />
    </svg>
  );
}
