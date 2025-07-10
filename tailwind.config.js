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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainColor: 'var(--mainColor)',
        mainLightColor: 'var(--mainLightColor)',
        mainBgColor: 'var(--mainBgColor)',
        secondaryBgColor: 'var(--secondaryBgColor)',
        textColor: 'var(--textColor)',
        headingColor: 'var(--headingColor)',
        paragraphColor: 'var(--paragraphColor)',
        borderColor: 'var(--borderColor)',
      },
      fontFamily: {
        vezla: 'var(--font-vezla)',
        poppins: 'var(--font-poppins)',
        londrinaOutline: 'var(--font-londrina-outline)',
      },
    },
  },
  plugins: [],
};
