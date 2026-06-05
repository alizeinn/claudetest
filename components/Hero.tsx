"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-[72px]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Trusted by 200+ businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight"
        >
          Your Business Deserves{" "}
          <span className="text-gradient italic">More Than Average.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
        >
          We partner with ambitious local businesses to build credibility, attract premium clients, and grow revenue — with strategy, creativity, and real execution.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
          >
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="btn-ghost text-base px-8 py-4 w-full sm:w-auto"
          >
            See Our Services
          </button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted"
        >
          {[
            { num: "200+", label: "Clients Served" },
            { num: "94%", label: "Retention Rate" },
            { num: "12yr", label: "In Business" },
            { num: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl font-semibold text-foreground">{stat.num}</div>
              <div className="text-xs text-muted mt-0.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-gradient-to-b from-accent to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
