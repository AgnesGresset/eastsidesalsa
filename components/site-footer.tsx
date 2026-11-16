import { LinkList, type SiteLink } from "@/components/link-list";

const links: readonly SiteLink[] = [
  { href: "/contact", label: "Contact" },
  { href: "/imprint", label: "Imprints" },
  { href: "/privacy", label: "Dataprivacy" },
];

export function SiteFooter() {
  return (
    <footer className="border-secondary flex items-center justify-between gap-6 border-t px-6 py-8">
      <LinkList items={links} label="Footer" />
      <div
        className="border-secondary text-primary grid size-16 place-items-center border text-xs"
        role="img"
        aria-label="Logo"
      >
        Logo
      </div>
    </footer>
  );
}
