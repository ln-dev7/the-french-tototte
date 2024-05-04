import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tartuffo: ["var(--font-tartuffo)"],
        gustavo: ["var(--font-gustavo)"],
      },
      colors: {
        "fg-1": "#30171B",
        "fg-2": "#5D4043",
        "fg-3": "#816A6C",
        "bg-2": "#FAF6F3",
        "bg-3": "#EBE0D8",
        "bg-blue": "#EFF1FD",
      },
      fontSize: {
        'xxs': ["9px", "11.7px"],
        'base': ["15px", "18.75px"],
      },
    },
  },
  plugins: [],
};
export default config;
