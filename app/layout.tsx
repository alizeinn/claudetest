import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prestige Consulting | Elite Business Solutions",
  description: "Expert consulting and bespoke business solutions for discerning clients. Strategy, growth, and results — delivered with precision.",
  keywords: ["consulting", "business strategy", "premium services", "growth consulting"],
  openGraph: {
    title: "Prestige Consulting | Elite Business Solutions",
    description: "Expert consulting and bespoke business solutions for discerning clients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
