import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { robotsFromEnv } from "@/utils/robots";
import "./globals.css";

const { ROBOTS = "index, follow" } = process.env;

export const metadata: Metadata = {
  title: "EastSideSalsa",
  robots: robotsFromEnv(ROBOTS),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="bg-tertiary text-primary flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
