/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "outline-AppYear": "inset 0px 0px 0 .1rem #0e0e0e",
        "outline-ListYear": "inset 0px 0px 0 .04rem #FFFFFF",
      },
      fontSize: {
        Projects: "clamp(5rem, 6vw, 8rem)",
        Middle: "clamp(1rem, 1.1vw, 1.1rem)",
        Footer: "clamp(1.5rem, 1.9vw, 4rem)",
      },
      screens: {
        "2xl": "1800px",
        "3xl": "2400px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
