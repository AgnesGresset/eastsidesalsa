"use client";

import { LinkList, type SiteLink } from "@/components/link-list";
import { useHideOnScroll } from "@/components/use-hide-on-scroll";

const links: readonly SiteLink[] = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteNav() {
  const hidden = useHideOnScroll();

  if (hidden) {
    return null;
  }

  return (
    <div className="px-6 pb-4">
      <LinkList items={links} label="Main" />
    </div>
  );
}
