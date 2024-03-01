import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gray: '#1d1d1f',
        cyan: '#37EBA9',
        violet: '#7A8FFF',
      },
      fontFamily: {
        acme: ['var(--font-acme)'],
        'circular-book': ['var(--font-circular-book)'],
        'circular-medium': ['var(--font-circular-medium)'],
        'neue-montreal': ['var(--font-neue-montreal)'],
        'roslindale-display': ['var(--font-roslindale-display)'],
        gtApina: ['var(--font-gtApina)'],
      },
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }

        xs: { max: '380px' },
        // => @media (max-width: 639px) { ... }
      },
    },
    plugins: [],
  },
};
export default config;
