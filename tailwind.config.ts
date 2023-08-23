import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        serif: ['var(--font-alice)'],
      }
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      orange: {
        'light': '#F59908',
        'medium': '#E65616',
        'dark': '#CD4B13',
        'darkest': '#B14110',
      },
      pink: {
        'light': '#FFF4F4',
        'medium': '#FA9395'
      }
    }
  },
  plugins: [],
}
export default config
