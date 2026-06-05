"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0c0c0e]/90 backdrop-blur-xl border-b border-[#2a2a34]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
              <span className="text-[#0c0c0e] font-serif font-bold text-sm">P</span>
            </div>
            <span className="font-serif font-semibold text-lg tracking-tight text-foreground">
              Prestige
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleLink(l.href)}
                className="text-sm text-muted hover:text-foreground transition-colors duration-200 font-medium"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleLink("#contact")}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Book a Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-foreground"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground origin-center"
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-[#0c0c0e]/95 backdrop-blur-xl border-b border-[#2a2a34] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleLink(l.href)}
                  className="text-left text-base font-medium text-muted hover:text-foreground transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <button
                onClick={() => handleLink("#contact")}
                className="btn-primary mt-2 w-full"
              >
                Book a Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
