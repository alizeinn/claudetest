"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  "Business strategy session",
  "Brand identity project",
  "Digital presence overhaul",
  "Revenue growth plan",
  "General consultation",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mt-5 mb-5 tracking-tight leading-[1.15]">
              Start With a{" "}
              <span className="text-gradient italic">Free Conversation</span>
            </h2>
            <p className="text-muted leading-relaxed mb-10">
              Book a 30-minute strategy call. We&apos;ll listen to where you are, ask the right questions, and give you an honest perspective on what&apos;s possible — no pitch, no pressure.
            </p>

            {/* What to expect */}
            <div className="space-y-5 mb-10">
              {[
                {
                  step: "01",
                  title: "Fill out the form",
                  desc: "Tell us a little about your business and what you&apos;re looking to achieve.",
                },
                {
                  step: "02",
                  title: "We'll reach out within 24h",
                  desc: "A real person — not an automated sequence — will contact you to schedule the call.",
                },
                {
                  step: "03",
                  title: "30-minute strategy call",
                  desc: "Direct conversation. We listen, we advise, and if there&apos;s a fit, we discuss next steps.",
                },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-semibold text-accent">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{s.title}</div>
                    <div className="text-xs text-muted mt-0.5 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: s.desc.replace(/&apos;/g, "'") }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div className="space-y-3 text-sm text-muted border-t border-[#2a2a34] pt-8">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 4l6 4 6-4M2 4h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z"/>
                </svg>
                hello@prestigeconsulting.com
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M2 3a1 1 0 0 1 1-1h2.5l1 3-1.5 1a9 9 0 0 0 4 4l1-1.5 3 1V13a1 1 0 0 1-1 1C5.4 14 2 10.6 2 3z"/>
                </svg>
                +1 (555) 000-1234
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="8" cy="7" r="3"/><path d="M13 7c0 5-5 8-5 8S3 12 3 7a5 5 0 0 1 10 0z"/>
                </svg>
                Downtown Business District, Suite 400
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="8" cy="8" r="6"/><path d="M8 4v4l3 1.5"/>
                </svg>
                Mon–Fri, 9am – 6pm EST
              </div>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl border border-[#2a2a34] bg-surface p-7 md:p-9 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 14l6 6 12-12"/>
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold mb-2">Message received</h3>
                    <p className="text-muted text-sm max-w-xs mx-auto">
                      We&apos;ll review your submission and reach out within 24 hours to schedule your strategy call.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h3 className="font-serif text-xl font-semibold mb-1">Book Your Free Strategy Call</h3>
                    <p className="text-xs text-muted mb-5">Takes about 90 seconds to fill out.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted block mb-1.5 font-medium">Full Name *</label>
                        <input
                          className="input-field"
                          name="name"
                          placeholder="John Smith"
                          required
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted block mb-1.5 font-medium">Business Name</label>
                        <input
                          className="input-field"
                          name="business"
                          placeholder="Your Company"
                          value={form.business}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-muted block mb-1.5 font-medium">Email Address *</label>
                        <input
                          className="input-field"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted block mb-1.5 font-medium">Phone Number</label>
                        <input
                          className="input-field"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted block mb-1.5 font-medium">I&apos;m interested in</label>
                      <select
                        className="input-field appearance-none"
                        name="reason"
                        value={form.reason}
                        onChange={handleChange}
                      >
                        <option value="">Select a service area...</option>
                        {reasons.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-muted block mb-1.5 font-medium">Tell us about your situation</label>
                      <textarea
                        className="input-field resize-none"
                        name="message"
                        rows={4}
                        placeholder="What's your biggest challenge right now? What does success look like for your business?"
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full text-base py-4 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Book My Free Strategy Call
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-muted">
                      No commitment. No automated pitch. Just a real conversation.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
