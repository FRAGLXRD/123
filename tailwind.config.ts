import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#07090D",
        card: "#11161C",
        border: "#1E2631",
      }
    }
  },
  plugins: []
} satisfies Config;
