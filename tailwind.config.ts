import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}' 
  ],
  theme: {
    extend: {
      spacing: {
        '1': '10px',
        '2': '20px',
        '3': '30px',
        '4': '40px',
        '5': '50px',
        '6': '60px',
        '7': '70px',
        '8': '80px'
      }
    },
  },
  plugins: [],
}
export default config
