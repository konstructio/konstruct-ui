<<<<<<< HEAD
import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';
=======
import createPlugin from 'tailwindcss/plugin';
>>>>>>> 7d1c628 (⬆️ chore: update Node.js version in .nvmrc to v22.13.1)

import {
  addAnimationStyles,
  defaultAnimationThemeValues,
  konstructColors,
} from './utils';

<<<<<<< HEAD
export const konstructPlugin = plugin(
  function ({ addBase, addUtilities, matchUtilities, theme }: PluginAPI) {
=======
export const konstructPlugin = createPlugin(
  function ({ addBase }) {
>>>>>>> 7d1c628 (⬆️ chore: update Node.js version in .nvmrc to v22.13.1)
    addBase({
      ':root': {
        '--viewport-padding': '25px',
      },
    });

    addAnimationStyles({ addUtilities, matchUtilities, theme });
  },
  {
    theme: {
      extend: {
        colors: { ...konstructColors },
<<<<<<< HEAD
        viewportPadding: '',
        ...defaultAnimationThemeValues,
=======
>>>>>>> 7d1c628 (⬆️ chore: update Node.js version in .nvmrc to v22.13.1)
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
          ...defaultAnimationThemeValues.keyframes,
        },
      },
    },
  },
);
