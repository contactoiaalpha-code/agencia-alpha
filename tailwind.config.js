/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B35",
          dark: "#E55A2B",
          light: "#FF8A5B",
        },
        secondary: {
          DEFAULT: "#000000",
          dark: "#1A1A1A",
          light: "#333333",
        },
        accent: {
          DEFAULT: "#FF6B35",
          dark: "#E55A2B",
          light: "#FF8A5B",
        },
        dark: "#000000",
        light: "#FFFFFF",
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "system-ui", "sans-serif"],
        serif: ["Helvetica", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(255,107,53,0.2) 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        pulseGlow: {
          "0%": {
            boxShadow: "0 0 5px #FFD700",
          },
          "100%": {
            boxShadow: "0 0 20px #FFD700, 0 0 30px #FFD700",
          },
        },
      },
    },
  },
  plugins: [],
};
