module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      heading: ["Kanit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#03FFFF",
        secondary: "#162668",
        light:'#F6FBFF',
        dark: {
          light: "#3D3D3D",
          DEFAULT: "#212121",
          dark: "#030315",
        }
      }
    },
  },
  plugins: [],
}