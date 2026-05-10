"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, HoverCard, StaggerGroup, StaggerItem } from "@/components/MotionPrimitives";

const features = [
  {
    title: "Scroll-triggered fades",
    body: "Sections gently rise into view as the user scrolls, replacing the static AI-generated feel with breathing layouts.",
  },
  {
    title: "Staggered reveals",
    body: "Child elements appear in sequence so feature grids and lists feel choreographed rather than dumped on the page.",
  },
  {
    title: "Smooth hover transitions",
    body: "Interactive cards and buttons respond with subtle spring physics, giving the UI the tactile quality of premium sites.",
  },
];

export default function Home() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <main className="min-h-screen px-6 py-24 md:px-12">
      <div className="fixed right-4 top-4 z-50">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setReplayKey((k) => k + 1)}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
        >
          ↻ Replay animations
        </motion.button>
      </div>

      <section key={`hero-${replayKey}`} className="mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 120, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="text-5xl font-semibold tracking-tight md:text-6xl"
        >
          Animation makes a site feel premium.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
          className="mt-6 text-lg text-white/70"
        >
          A starter wired up with Framer Motion: scroll-triggered fades, staggered reveals,
          and smooth hover transitions on every interactive element.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.8, type: "spring", bounce: 0.5 }}
          className="mt-10"
        >
          <motion.a
            href="#features"
            whileHover={{ scale: 1.15, rotate: -2 }}
            whileTap={{ scale: 0.9 }}
            className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30"
          >
            See it in motion
          </motion.a>
        </motion.div>
      </section>

      <section id="features" key={`features-${replayKey}`} className="mx-auto mt-32 max-w-5xl">
        <FadeIn className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            What Framer Motion buys you
          </h2>
        </FadeIn>

        <StaggerGroup className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <StaggerItem key={f.title}>
              <HoverCard className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-medium">{f.title}</h3>
                <p className="mt-3 text-sm text-white/70">{f.body}</p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto mt-32 h-[60vh] max-w-3xl text-center">
        <p className="text-white/40">Scroll back up and click ↻ Replay to retrigger.</p>
      </section>
    </main>
  );
}
