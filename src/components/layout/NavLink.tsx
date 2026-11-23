"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`relative py-1 text-sm tracking-tight transition-colors ${
        isActive
          ? "text-ink after:bg-cobalt font-semibold after:absolute after:right-0 after:bottom-[-6px] after:left-0 after:h-[2.5px]"
          : "text-ink/85 hover:text-cobalt font-normal"
      }`}
    >
      {label}
    </Link>
  );
}
