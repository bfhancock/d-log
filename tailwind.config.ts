import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dlog-orange": "#EB5E28",
        "dlog-darkgray": "#252422",
        "dlog-gray": "#403D39",
        "dlog-lightgray": "#CCC5B9",
        "dlog-cream": "#FFFCF2",
      },
    },
  },
  plugins: [],
} satisfies Config;
