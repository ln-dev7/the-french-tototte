import React from "react";

export default function ButtonLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`bg-fg-2 button-link relative font-medium font-gustavo py-2 px-8 overflow-hidden ${className}`}
    >
      <span className="z-10 block relative text-bg-2">{children}</span>
    </a>
  );
}
