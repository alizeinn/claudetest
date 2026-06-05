"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Mitchell & Co Law",
    avatar: "SM",
    rating: 5,
    quote: "Within 4 months we went from struggling to find clients to turning away work. The strategy was spot-on and the execution was flawless. Worth every penny.",
  },
  {
    name: "James Okafor",
    role: "Owner, Okafor Medical Group",
    avatar: "JO",
    rating: 5,
    quote: "My practice was invisible online. Now we rank first in our city and our appointment book is full two months out. The team genuinely cares about results.",
  },
  {
    name: "Priya Sharma",
    role: "Director, Sharma Real Estate",
    avatar: "PS",
    rating: 5,
    quote: "We doubled our listing volume in the first year. The brand they built for us commands premium prices and attracts exactly the kind of clients we want.",
  },
  {
    name: "Michael Chen",
    role: "CEO, Chen Financial Services",
    avatar: "MC",
    rating: 5,
    quote: "Professional, strategic, and genuinely invested in our growth. They don't just do what you ask — they challenge you to think bigger. Game-changing partnership.",
  },
  {
    name: "Fatima Al-Rashid",
    role: "Founder, Al-Rashid Boutique",
    avatar: "FA",
    rating: 5,
    quote: "From a struggling local shop to a recognized premium brand with a 6-month waitlist. I can't imagine building this without them.",
  },
  {
    name: "David Torres",
    role: "Owner, Torres Architecture",
    avatar: "DT",
    rating: 5,
    quote: "The ROI is undeniable. We 3x'd revenue in 18 months. More importantly, we now attract projects that align with our vision — not just any job that comes along.",
  },
];

const badges = [
  { icon: "🏆", label: "Top Rated Agency", sub: "2023 & 2024" },
  { icon: "⭐", label: "4.9 / 5 Stars", sub: "240+ Reviews" },
  { icon: "🤝", label: "200+ Clients", sub: "Across 15 Industries" },
  { icon: "📈", label: "94% Retention", sub: "Year over Year" },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#c9a96e">
        <path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.4l-3.7 2 .7-4.1-3-2.9 4.2-.8z"/>
      </svg>
    ))}
  </div>
);

export default function SocialProof() {
  return (
    <section id="results" className="py-28 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-[#2a2a34] bg-surface"
            >
              <span className="text-2xl mb-2">{b.icon}</span>
              <span className="font-semibold text-sm text-foreground">{b.label}</span>
              <span className="text-xs text-muted mt-0.5">{b.sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-tag">Client Stories</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-5 tracking-tight">
            Businesses That Took the{" "}
            <span className="text-gradient italic">Leap</span>
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl mx-auto">
            Real clients. Real results. No embellishment — just honest outcomes from businesses that decided to stop settling.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl border border-[#2a2a34] bg-surface p-7 flex flex-col gap-5 hover:border-accent/30 transition-colors duration-300"
            >
              {/* Quote mark */}
              <div className="text-accent/20 font-serif text-6xl leading-none select-none">&ldquo;</div>

              <Stars count={t.rating} />

              <p className="text-sm text-muted leading-relaxed flex-1 -mt-4">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-[#2a2a34]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/30 border border-accent/20 flex items-center justify-center text-xs font-semibold text-accent">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/8 to-transparent p-8 md:p-12 text-center"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
            Ready to write your own story?
          </h3>
          <p className="text-muted mb-7 max-w-md mx-auto">
            Book a free 30-minute strategy call. No commitment, no pressure — just a direct conversation about what&apos;s possible for your business.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
          >
            Get My Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
