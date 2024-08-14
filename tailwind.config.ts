import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "lined-grid":"linear-gradient(to right, #30303D 1px, transparent 1px),linear-gradient(to bottom, #30303D 1px, transparent 1px)"
      },
      colors:{
        'black':"#111111",
        'white':"#FFFFFF",
        'yellow':"#EFF1C5",
        'blue-dark':"#202030",
        'gray-dark':"#3D3D3D",
        'gray-light':"#E3E3E3",
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        titillium: ['var(--font-titillium)'],
      },
    },
  },
  plugins: [],
};
export default config;
