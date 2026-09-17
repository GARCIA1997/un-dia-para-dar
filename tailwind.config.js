/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#EE202E',
          redDark: '#B4121E',
          teal: '#14AC94',
          tealDark: '#0B7D6B',
          lime: '#D0DD28',
          blue: '#0072BC',
          amber: '#FBB040',
          orange: '#F26C21',
          gray: '#808285',
        },
        ink: {
          900: '#0B0A12',
          800: '#12101C',
          700: '#1B1828',
          600: '#272338',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%,-8%,0) scale(1.15)' },
          '66%': { transform: 'translate3d(-7%,6%,0) scale(0.92)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.85)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out 0.4s both',
        float: 'float 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 32s linear infinite',
        marquee: 'marquee 38s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        shimmer: 'shimmer 2.2s infinite',
        pulseRing: 'pulseRing 2.6s ease-out infinite',
      },
    },
  },
  plugins: [],
};
