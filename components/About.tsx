"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Honest over easy",
    desc: "We tell you what you need to hear, not what you want to hear. That's what produces results.",
  },
  {
    title: "Strategy first",
    desc: "No tactics without a plan. Every action we take is connected to your larger business objectives.",
  },
  {
    title: "Long-term thinking",
    desc: "We measure success in years, not campaigns. Our goal is a relationship that compounds over time.",
  },
  {
    title: "Skin in the game",
    desc: "Your results matter to us. We track outcomes obsessively and adjust until we get it right.",
  },
];

const milestones = [
  { year: "2012", event: "Founded with a single client and a big vision" },
  { year: "2015", event: "Grew to 50 long-term client partnerships" },
  { year: "2018", event: "Expanded to serve 8 industries across the region" },
  { year: "2021", event: "Launched dedicated strategy and technology practice" },
  { year: "2024", event: "200+ clients, 94% retention, still growing" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Our Story</span>

            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-5 mb-6 tracking-tight leading-[1.15]">
              Built by People Who{" "}
              <span className="text-gradient italic">Actually Care</span>
            </h2>

            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Prestige was founded because we kept watching good businesses fail for the wrong reasons — not because their product wasn&apos;t great, but because they couldn&apos;t get the right people to notice it.
              </p>
              <p>
                We&apos;re a small team of strategists, creatives, and operators who spent years inside large agencies watching smart budgets get wasted on generic work. So we built something different: a practice built on honesty, tailored thinking, and obsessive attention to outcomes.
              </p>
              <p>
                We&apos;re not a vendor. We function as a trusted partner — the kind that stays up late thinking about your business, pushes back when an idea won&apos;t work, and celebrates your wins as if they were our own.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 space-y-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-12 text-right">
                    <span className="text-xs font-semibold text-accent">{m.year}</span>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent/60" />
                  </div>
                  <p className="text-sm text-muted">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — values + visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Visual card */}
            <div className="rounded-2xl border border-[#2a2a34] bg-surface p-8 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                    <span className="font-serif font-bold text-xl text-[#0c0c0e]">P</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Prestige Consulting</div>
                    <div className="text-sm text-muted">Founded 2012 · Independent</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: "200+", l: "Clients" },
                    { n: "12yr", l: "Experience" },
                    { n: "15+", l: "Industries" },
                    { n: "94%", l: "Retention" },
                  ].map((s) => (
                    <div key={s.l} className="bg-[#1c1c22] rounded-xl p-4 border border-[#2a2a34]">
                      <div className="font-serif text-2xl font-semibold text-accent">{s.n}</div>
                      <div className="text-xs text-muted mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-xl border border-[#2a2a34] bg-surface hover:border-accent/30 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{v.title}</div>
                    <div className="text-xs text-muted mt-1 leading-relaxed">{v.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
