import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0e2a47",
          light: "#153554",
          dark: "#0a1e32",
        },
        secondary: {
          DEFAULT: "#0d9488",
          light: "#14b8a6",
          dark: "#0f766e",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "layout": "0.75rem",
        "card": "1rem",
      },
      boxShadow: {
        "header": "0 1px 3px 0 rgb(0 0 0 / 0.06)",
        "card": "0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)",
        "card-hover": "0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)",
        "button": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
