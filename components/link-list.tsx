import { TextLink } from "@/components/text-link";

export type SiteLink = {
  href: string;
  label: string;
};

type LinkListProps = {
  items: readonly SiteLink[];
  label: string;
};

export function LinkList({ items, label }: LinkListProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap gap-6">
        {items.map((item) => (
          <li key={item.href}>
            <TextLink href={item.href}>{item.label}</TextLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
