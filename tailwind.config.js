/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Forest Green (matches country sites)
        'forest': {
          50: '#f0f7f1',
          100: '#dceee0',
          200: '#bcdcc4',
          300: '#91c39d',
          400: '#66a572',
          500: '#2C5F2D',  // Main brand color
          600: '#244e25',
          700: '#1d3f1e',
          800: '#1A3A1B',  // Deep forest
          900: '#142814',
        },

        // Accent - Sage
        'sage': {
          50: '#f7faf4',
          100: '#eef5e8',
          200: '#dcebd1',
          300: '#c5deb5',
          400: '#aecf99',
          500: '#97BC62',  // Light accent
          600: '#7fa750',
          700: '#678841',
          800: '#516d35',
          900: '#425a2c',
        },

        // Earth Tones
        'terracotta': {
          50: '#fdf5f3',
          100: '#fae8e4',
          200: '#f5d1c9',
          300: '#edb3a5',
          400: '#e38c77',
          500: '#C97064',  // Warm accent
          600: '#b5564a',
          700: '#96453c',
          800: '#7d3c34',
          900: '#6a352f',
        },

        'sand': '#E8D5B7',
        'stone': '#8B7E74',
        'clay': '#B4846C',
        'charcoal': '#2D2D2D',
        'warm-white': '#FAF8F3',
        'cream': '#F5F1E8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
