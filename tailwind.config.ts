import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': ['44px', {fontWeight: '700', lineHeight: '1.2'}],
        'h2': ['32px', {fontWeight: '600', lineHeight: '1.3'}],
        'h3': ['28px', {fontWeight: '600', lineHeight: '1.4'}],
        'h5': ['24px', {fontWeight: '600', lineHeight: '1.5'}],
        'h6': ['16px', {fontWeight: '400', lineHeight: '1.2'}],
      },
      colors: {
        'accent':'#F0F0F5',
        'neutral':'#1A1616',
        'primary':'#74BAC1',
        'secondary':'#787A81'
      },
      backgroundImage: {
        'heropattern':"url('/hero.svg')"
      },
    },
  },
  plugins: [],
};
export default config;
