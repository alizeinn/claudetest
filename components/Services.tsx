"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "Business Strategy",
    description: "Clarity on where you're going and exactly how to get there. We map your market, identify your edge, and build a roadmap that drives real growth.",
    features: ["Market positioning", "Growth roadmap", "Competitive analysis"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
      </svg>
    ),
    title: "Brand Identity",
    description: "Premium visual identity and brand voice that positions you as the obvious choice — not just another option. First impressions that convert.",
    features: ["Visual identity", "Brand guidelines", "Messaging framework"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: "Revenue Growth",
    description: "Systems and strategies that fill your pipeline with qualified leads and convert them into loyal, high-value clients — consistently.",
    features: ["Lead generation", "Conversion optimization", "Retention systems"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Digital Presence",
    description: "Your website, SEO, and online profile working together as a 24/7 sales engine — attracting the right clients before you even pick up the phone.",
    features: ["Website design", "SEO strategy", "Google optimization"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: "Client Acquisition",
    description: "End-to-end campaigns across paid media, referrals, and organic channels that bring in clients you actually want to work with.",
    features: ["Paid advertising", "Referral systems", "Content strategy"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: "Performance Tracking",
    description: "Clear, honest reporting on what's working and what's not. No vanity metrics — just the numbers that directly tie to business outcomes.",
    features: ["Analytics dashboards", "Monthly reviews", "ROI reporting"],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">What We Do</span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-5 mb-5 tracking-tight">
            Services Built for{" "}
            <span className="text-gradient italic">Real Results</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            We don&apos;t sell packages — we build partnerships. Every engagement is tailored to your specific goals, market, and stage of growth.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((svc) => (
            <motion.div
              key={svc.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border border-[#2a2a34] bg-surface p-7 overflow-hidden cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-card-gradient pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 rounded-xl bg-[#1c1c22] border border-[#2a2a34] flex items-center justify-center text-accent mb-5 group-hover:border-accent/40 transition-colors duration-300">
                {svc.icon}
              </div>

              {/* Content */}
              <h3 className="relative z-10 font-serif text-xl font-semibold mb-2.5 text-foreground">
                {svc.title}
              </h3>
              <p className="relative z-10 text-sm text-muted leading-relaxed mb-5">
                {svc.description}
              </p>

              {/* Features */}
              <ul className="relative z-10 space-y-1.5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-muted">
                    <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
