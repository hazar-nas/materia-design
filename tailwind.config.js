module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      //Century Gothic,CenturyGothic,AppleGothic,sans-serif;font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700;
      gothic: ['Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif'],
    },
    extend: {
      colors: {
        primaryGreen: '#C1E6EE',
        primaryBlack: '#363636',
      },
    },
  },
  plugins: [],
}
