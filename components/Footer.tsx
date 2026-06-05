"use client";

const links = {
  Services: ["Business Strategy", "Brand Identity", "Revenue Growth", "Digital Presence", "Client Acquisition"],
  Company: ["About Us", "Our Process", "Client Stories", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a34] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                <span className="text-[#0c0c0e] font-serif font-bold text-sm">P</span>
              </div>
              <span className="font-serif font-semibold text-lg text-foreground">Prestige</span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-xs mb-6">
              Strategy, creativity, and execution for businesses that refuse to be average. Your partner in building something that lasts.
            </p>
            <div className="flex items-center gap-3">
              {["twitter", "linkedin", "instagram"].map((s) => (
                <div key={s} className="w-9 h-9 rounded-lg border border-[#2a2a34] bg-surface flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors cursor-pointer">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <circle cx="7" cy="7" r="5" opacity="0.3"/>
                    <circle cx="7" cy="7" r="2"/>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="text-xs font-semibold text-foreground tracking-widest uppercase mb-4">{group}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-muted hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="gold-line mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>© 2024 Prestige Consulting. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with precision
            <span className="text-accent">◆</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
