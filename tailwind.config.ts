import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Design tokens — edite aqui para mudar as cores do site
        brand: {
          bg: '#080808',
          'bg-card': '#0f0f0f',
          'text-primary': '#f0f0f0',
          'text-secondary': '#888888',
          'text-muted': '#444444',
          accent: '#2563eb',
          'accent-hover': '#3b82f6',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        'dot-grid':
          'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-64': '64px 64px',
        'dot-24': '24px 24px',
      },
    },
  },
  plugins: [],
}

export default config
