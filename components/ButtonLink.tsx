import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link className={`button button-${variant} ${className}`} href={href}>
      <span>{children}</span>
      <svg viewBox="0 0 18 18" aria-hidden="true" focusable="false">
        <path d="M6.2 3.2 12 9l-5.8 5.8" />
      </svg>
    </Link>
  );
}

