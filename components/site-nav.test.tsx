import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { SiteNav } from "@/components/site-nav";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;

it.each(links)("links to $label", ({ href, label }) => {
  const view = render(<SiteNav />);
  expect(view.getByRole("link", { name: label })).toHaveAttribute("href", href);
});
