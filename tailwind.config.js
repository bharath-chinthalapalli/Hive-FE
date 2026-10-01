/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
     extend: {
      screens: {
        "5xs":"256px",
        "4xs":"320px",
        "3xs":"448px",
        "2xs":"576px",
        xs: "640px",
        sm: "768px",
        md: "896px",
        lg: "1024px",
        xl: "1152px",
        "2xl":"1280px",
        "3xl":"1440px",
        "4xl": "1536px",
        "5xl": "1680px",
        "6xl": "1740px",
        "7xl": "1920px",
        "8xl": "2560px",
        "9xl": "3840px",
      },
    },
  },
  variants: { imageRendering: ['responsive'] },
  plugins: [
       require('tailwindcss-image-rendering')()
  ],
}

