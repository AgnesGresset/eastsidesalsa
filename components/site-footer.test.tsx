import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { SiteFooter } from "@/components/site-footer";

const links = [
  { href: "/contact", label: "Contact" },
  { href: "/imprint", label: "Imprints" },
  { href: "/privacy", label: "Dataprivacy" },
] as const;

it.each(links)("links to $label", ({ href, label }) => {
  const view = render(<SiteFooter />);
  expect(view.getByRole("link", { name: label })).toHaveAttribute("href", href);
});

it("shows a logo placeholder", () => {
  const view = render(<SiteFooter />);
  expect(view.getByRole("img", { name: "Logo" })).toBeInTheDocument();
});
