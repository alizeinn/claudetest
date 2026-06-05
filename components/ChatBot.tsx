"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  quick?: string[];
};

const KB: Record<string, { text: string; quick?: string[] }> = {
  greeting: {
    text: "Hi there 👋 I'm here to help you learn more about Prestige Consulting. What can I help you with today?",
    quick: ["Services & pricing", "Book a call", "Business hours", "Service areas", "How it works"],
  },
  services: {
    text: "We offer six core service areas:\n\n• **Business Strategy** — market positioning, growth roadmaps\n• **Brand Identity** — visual identity, brand voice\n• **Revenue Growth** — lead generation, conversion systems\n• **Digital Presence** — website, SEO, Google optimization\n• **Client Acquisition** — paid ads, referrals, content\n• **Performance Tracking** — analytics, ROI reporting\n\nEvery engagement is customized — no one-size-fits-all packages.",
    quick: ["Pricing", "Book a call", "How it works"],
  },
  pricing: {
    text: "Our engagements are scoped to your specific needs, so pricing varies. Here's a general guide:\n\n• **Strategy session** — Starts at $1,500\n• **Brand identity project** — From $3,500\n• **Monthly partnership** — From $2,500/mo\n• **Full growth program** — From $5,000/mo\n\nThe best next step is a free 30-min strategy call where we can scope the right solution for your budget and goals.",
    quick: ["Book a call", "Services", "How it works"],
  },
  booking: {
    text: "Booking is simple:\n\n1. Fill out the contact form on this page\n2. We'll reach out within 24 hours\n3. Schedule your free 30-minute strategy call\n4. We listen, advise, and if there's a fit — we discuss next steps\n\nNo commitment, no pressure. Just a real conversation about your business.",
    quick: ["Go to contact form", "Pricing", "What to expect"],
  },
  hours: {
    text: "We're available Monday through Friday, 9am – 6pm EST.\n\nFor urgent matters outside business hours, email us at hello@prestigeconsulting.com and we typically respond within a few hours.",
    quick: ["Contact info", "Book a call"],
  },
  areas: {
    text: "We work with businesses across North America, primarily in:\n\n• **Major metros**: New York, Los Angeles, Chicago, Miami, Toronto\n• **Remote-first**: We serve clients nationwide via video and async collaboration\n• **On-site**: Available for local clients in the greater New York area\n\nLocation isn't usually a barrier — most of our work happens remotely.",
    quick: ["Book a call", "Services"],
  },
  contact: {
    text: "You can reach us through:\n\n📧 **Email**: hello@prestigeconsulting.com\n📞 **Phone**: +1 (555) 000-1234\n📍 **Address**: Downtown Business District, Suite 400\n🕐 **Hours**: Mon–Fri, 9am–6pm EST\n\nOr just fill out the contact form on this page for the fastest response.",
    quick: ["Book a call", "Business hours"],
  },
  process: {
    text: "Here's how we typically work:\n\n**1. Discovery call** — We understand your goals, challenges, and market\n**2. Strategy brief** — We map out a tailored approach with clear milestones\n**3. Proposal** — Transparent scope, timeline, and investment\n**4. Execution** — We get to work, with regular check-ins\n**5. Optimize** — Monthly reviews, adjustments, continuous improvement\n\nMost clients see initial results within 60–90 days.",
    quick: ["Pricing", "Book a call"],
  },
  faq_results: {
    text: "Results vary by business, but here's what clients typically experience:\n\n• 60–90 days: brand clarity, improved visibility, initial leads\n• 3–6 months: measurable growth in qualified inquiries\n• 6–12 months: significant revenue impact, strong market positioning\n\nWe track everything and share honest monthly reports — no vanity metrics.",
    quick: ["Book a call", "Client stories"],
  },
};

const intentMap: [string[], string][] = [
  [["service", "offer", "do", "what"], "services"],
  [["pric", "cost", "fee", "invest", "how much", "rate", "charge"], "pricing"],
  [["book", "call", "schedul", "appointment", "consult", "talk", "meet"], "booking"],
  [["hour", "open", "time", "available", "when"], "hours"],
  [["area", "locat", "where", "city", "remote", "region", "serve"], "areas"],
  [["contact", "email", "phone", "reach", "address"], "contact"],
  [["process", "how", "work", "step", "flow", "start"], "process"],
  [["result", "outcome", "expect", "timeline", "roi", "return", "grow"], "faq_results"],
];

function detectIntent(input: string): string {
  const lower = input.toLowerCase();
  for (const [keywords, intent] of intentMap) {
    if (keywords.some((k) => lower.includes(k))) return intent;
  }
  return "fallback";
}

function parseMarkdown(text: string) {
  return text
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("**") && line.endsWith("**")) {
        return <div key={i} className="font-semibold text-foreground mt-2">{line.replace(/\*\*/g, "")}</div>;
      }
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <div key={i} className={line.startsWith("•") ? "flex gap-1.5" : ""}>
          {parts.map((part, j) =>
            j % 2 === 1 ? <span key={j} className="font-semibold text-foreground">{part}</span> : part
          )}
        </div>
      );
    });
}

let msgId = 1;
const nextId = () => ++msgId;

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addBotMessage = useCallback((key: string) => {
    const data = key === "fallback"
      ? {
          text: "I'm not sure I have the perfect answer for that, but I'd love to connect you with our team. You can book a free strategy call or reach us at hello@prestigeconsulting.com.",
          quick: ["Book a call", "Services", "Contact info"],
        }
      : KB[key];

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "bot", text: data.text, quick: data.quick },
      ]);
    }, 900 + Math.random() * 400);
  }, []);

  const openChat = () => {
    if (closing) return;
    setOpen(true);
    if (!started) {
      setStarted(true);
      setTimeout(() => addBotMessage("greeting"), 400);
    }
  };

  const closeChat = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 250);
  };

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    // Map quick reply labels to intents
    const quickMap: Record<string, string> = {
      "Services & pricing": "services",
      "Services": "services",
      "Book a call": "booking",
      "Business hours": "hours",
      "Service areas": "areas",
      "How it works": "process",
      "Pricing": "pricing",
      "What to expect": "process",
      "Contact info": "contact",
      "Client stories": "faq_results",
      "Go to contact form": "booking",
    };

    setMessages((prev) => [...prev, { id: nextId(), role: "user", text }]);
    setInput("");

    const mapped = quickMap[text];
    const intent = mapped ?? detectIntent(text);
    addBotMessage(intent);
  }, [addBotMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  // Nudge bubble after 8 seconds
  const [showNudge, setShowNudge] = useState(false);
  useEffect(() => {
    if (open) { setShowNudge(false); return; }
    const t = setTimeout(() => setShowNudge(true), 8000);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Nudge bubble */}
      <AnimatePresence>
        {showNudge && !open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={openChat}
            className="cursor-pointer bg-surface border border-[#2a2a34] rounded-2xl rounded-br-sm px-4 py-2.5 text-sm text-foreground shadow-gold-md max-w-[200px] text-right"
          >
            <span className="text-muted text-xs block mb-0.5">Prestige</span>
            Have questions? I can help 👋
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.34, 1.1, 0.64, 1] }}
            className="w-[360px] max-w-[calc(100vw-48px)] rounded-2xl border border-[#2a2a34] bg-[#0f0f13] shadow-gold-lg flex flex-col overflow-hidden"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#2a2a34] bg-surface flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                    <span className="font-serif font-bold text-sm text-[#0c0c0e]">P</span>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#141418]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Prestige Assistant</div>
                  <div className="text-xs text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online now
                  </div>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="w-7 h-7 rounded-lg border border-[#2a2a34] flex items-center justify-center text-muted hover:text-foreground hover:border-accent/30 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M2 2l8 8M10 2l-8 8"/>
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: [0.34, 1.2, 0.64, 1] }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} flex-col gap-2`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed space-y-0.5 ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-accent to-accent-dark text-[#0c0c0e] rounded-br-sm font-medium ml-auto"
                        : "bg-surface-2 border border-[#2a2a34] text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.role === "bot" ? parseMarkdown(msg.text) : msg.text}
                  </div>

                  {/* Quick replies */}
                  {msg.role === "bot" && msg.quick && (
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {msg.quick.map((q) => (
                        <button
                          key={q}
                          onClick={() => sendMessage(q)}
                          className="text-[11px] px-3 py-1.5 rounded-full border border-accent/25 bg-accent/6 text-accent hover:bg-accent/15 hover:border-accent/50 transition-all duration-150 font-medium"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="flex justify-start"
                  >
                    <div className="bg-surface-2 border border-[#2a2a34] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-muted" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-[#2a2a34] bg-surface flex-shrink-0">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 text-xs bg-[#1c1c22] border border-[#2a2a34] rounded-xl px-3.5 py-2.5 text-foreground placeholder-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center flex-shrink-0 disabled:opacity-40 hover:shadow-gold-sm transition-all"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 7L1 1l2.5 6L1 13l12-6z" fill="#0c0c0e" stroke="#0c0c0e" strokeWidth="0.5" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
              <div className="text-center text-[10px] text-muted/50 mt-2">Powered by Prestige</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={open ? closeChat : openChat}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-dark shadow-gold-md flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.2 }}
              width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0c0c0e" strokeWidth="2" strokeLinecap="round"
            >
              <path d="M4 4l12 12M16 4L4 16"/>
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              width="22" height="22" viewBox="0 0 22 22" fill="none"
            >
              <path d="M3 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7l-4 4V4z" fill="#0c0c0e"/>
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {!open && !started && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-400 border-2 border-[#0c0c0e] text-[8px] font-bold text-[#0c0c0e] flex items-center justify-center"
          >
            1
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
