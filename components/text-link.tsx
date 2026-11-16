import Link from "next/link";
import { textLinkClass } from "@/components/styles";

type TextLinkProps = {
  href: string;
  children: string;
};

export function TextLink({ href, children }: TextLinkProps) {
  return (
    <Link className={textLinkClass} href={href}>
      {children}
    </Link>
  );
}
