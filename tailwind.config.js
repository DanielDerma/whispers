/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'twich-grad-0': 'rgba(141,81,241,1)',
        'twich-grad-50': 'rgba(223,68,206,1)',
        'twich-grad-100': 'rgba(245,201,115,1)',
        'twich2-grad-0': '#9246FF',
        'twich2-grad-100': '#42A8FC',
        'twich2-variant': '#8653F6'
      }
    },
    fontFamily: {
      'sans': ['Roobert-Regular', 'ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    }
  },
  plugins: [],
}


