import type { HighlightIcon, OverviewPillarIcon } from "@/data/ace-finance";
import type { YouSaferHighlightIcon, YouSaferOverviewIcon } from "@/data/yousafer-flow";

interface IconProps {
  className?: string;
}

export function OverviewIcon({
  name,
  className = "h-7 w-7",
}: {
  name: OverviewPillarIcon | YouSaferOverviewIcon;
  className?: string;
}) {
  switch (name) {
    case "form":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
          <path d="M8.5 8.5H15.5" />
          <path d="M8.5 12H15.5" />
          <path d="M8.5 15.5H12.5" />
        </svg>
      );
    case "automation":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M13 3L5.5 13.5H11.5L11 21L18.5 10.5H12.5L13 3Z" />
        </svg>
      );
    case "dashboard":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M4 20V14" />
          <path d="M9.5 20V10" />
          <path d="M15 20V12" />
          <path d="M20 20V6" />
        </svg>
      );
    case "ai":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M12 3L14.4 9.6L21 12L14.4 14.4L12 21L9.6 14.4L3 12L9.6 9.6L12 3Z" />
        </svg>
      );
    case "subscriptions":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M12 4L3 8.5L12 13L21 8.5L12 4Z" />
          <path d="M3 13L12 17.5L21 13" />
          <path d="M3 17L12 21L21 17" />
        </svg>
      );
    case "auth":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M12 3L5 6V11.5C5 16.2 8 19.9 12 21C16 19.9 19 16.2 19 11.5V6L12 3Z" />
        </svg>
      );
  }
}

export function HighlightIconSvg({
  name,
  className = "h-5 w-5",
}: {
  name: HighlightIcon | YouSaferHighlightIcon;
  className?: string;
}) {
  switch (name) {
    case "search":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <circle cx="11" cy="11" r="6.5" />
          <path d="M16 16L20.5 20.5" />
        </svg>
      );
    case "auth":
      return <OverviewIcon name="auth" className={className} />;
    case "product":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <rect x="4" y="5" width="16" height="11" rx="1.5" />
          <path d="M2 19H22" />
        </svg>
      );
    case "ux":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M5 13L9.5 17.5L19 7.5" />
        </svg>
      );
    case "integrations":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={className}
        >
          <path d="M8 8L4 12L8 16" />
          <path d="M16 8L20 12L16 16" />
          <path d="M13.5 6L10.5 18" />
        </svg>
      );
    case "ai":
      return <OverviewIcon name="ai" className={className} />;
    case "subscriptions":
      return <OverviewIcon name="subscriptions" className={className} />;
  }
}

export function ArrowRightIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.5 10H16" strokeLinecap="square" />
      <path d="M11 5L16 10L11 15" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M13 8H3.5" strokeLinecap="square" />
      <path d="M7.5 4L3.5 8L7.5 12" strokeLinecap="square" />
    </svg>
  );
}
