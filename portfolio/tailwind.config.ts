module.exports = {
  darkMode: 'media',
  theme: {
    extend: {
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      colors: {
        ctp: {
          base: '#1e1e2e',
          mantle: '#181825',
          crust: '#11111b',
          surface0: '#313244',
          surface1: '#45475a',
          text: '#cdd6f4',
          subtext: '#a6adc8',
          overlay: '#6c7086',
          green: '#a6e3a1',
          mauve: '#cba6f7',
          blue: '#89b4fa',
          peach: '#fab387',
          red: '#f38ba8',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
