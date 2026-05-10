import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Framer Motion Starter",
  description: "Next.js + Framer Motion starter with scroll-triggered fades, staggered reveals, and smooth hover transitions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
