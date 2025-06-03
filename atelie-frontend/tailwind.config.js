/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'pink-custom': '#FF6B9D',
          'purple-custom': '#8B5FBF',
          'blue-light': '#A8E6CF',
          'gold': '#FFD700',
          'gray-light': '#F8F9FA',
        },
        backgroundImage: {
          'gradient-header': 'linear-gradient(135deg, #FF6B9D, #8B5FBF)',
          'gradient-card': 'linear-gradient(145deg, #FFFFFF, #F8F9FA)',
          'gradient-button': 'linear-gradient(135deg, #FF6B9D, #FF8E9B)',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'bounce-subtle': 'bounceSubtle 2s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(30px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          bounceSubtle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
        },
      },
    },
    plugins: [],
  }