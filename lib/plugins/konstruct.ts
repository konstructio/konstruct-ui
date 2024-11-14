import plugin from 'tailwindcss/plugin';

import { konstructColors } from './utils/colors';

export const konstructPlugin = plugin(
  function ({ addBase }) {
    addBase({
      ':root': {
        '--viewport-padding': '25px',
      },
    });
  },
  {
    theme: {
      extend: {
        colors: { ...konstructColors },
        viewportPadding: '',
        backgroundImage: {
          'kubefirst-gradient': 'linear-gradient(90deg, #81E2B4, #8851C8)',
        },
        animation: {
          'gradient-move': 'moveGradient 6s linear infinite',
          'slide-in': 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          'swipe-out': 'swipeOut 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
        keyframes: {
          moveGradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          hide: {
            from: { opacity: '1' },
            to: { opacity: '0' },
          },
          slideIn: {
            from: {
              transform: 'translateX(calc(100% + var(--viewport-padding)))',
            },
            to: {
              transform: 'translateX(0)',
            },
          },
          swipeOut: {
            from: {
              transform: 'translateX(0)',
            },
            to: {
              transform: 'translateX(calc(100% + var(--viewport-padding)))',
            },
          },
        },
      },
    },
  },
);
