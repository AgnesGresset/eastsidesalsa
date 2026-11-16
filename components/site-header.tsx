import Link from "next/link";
import { focusRingClass } from "@/components/styles";
import { SiteNav } from "@/components/site-nav";

const titleClass = `${focusRingClass} block py-6 text-center text-2xl text-primary`;

export function SiteHeader() {
  return (
    <header className="bg-tertiary sticky top-0">
      <Link className={titleClass} href="/">
        EastSideSalsa
      </Link>
      <SiteNav />
    </header>
  );
}
