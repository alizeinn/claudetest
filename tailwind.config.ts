import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0e",
        foreground: "#f5f4f0",
        accent: "#c9a96e",
        "accent-light": "#e2c99a",
        "accent-dark": "#a07840",
        surface: "#141418",
        "surface-2": "#1c1c22",
        muted: "#8a8a9a",
        border: "#2a2a34",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,169,110,0.18) 0%, transparent 60%)",
        "card-gradient": "linear-gradient(135deg, rgba(201,169,110,0.06) 0%, rgba(201,169,110,0.01) 100%)",
      },
      boxShadow: {
        "gold-sm": "0 2px 12px rgba(201,169,110,0.15)",
        "gold-md": "0 4px 32px rgba(201,169,110,0.2)",
        "gold-lg": "0 8px 64px rgba(201,169,110,0.25)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulse_dot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        float: "float 4s ease-in-out infinite",
        pulse_dot: "pulse_dot 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
