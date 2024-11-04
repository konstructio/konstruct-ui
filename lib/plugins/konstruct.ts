import plugin from 'tailwindcss/plugin';

import { konstructColors } from './utils/colors';

export const konstructPlugin = plugin(() => ({}), {
  theme: {
    extend: {
      colors: { ...konstructColors },
      backgroundImage: {
        'kubefirst-gradient': 'linear-gradient(90deg, #81E2B4, #8851C8)',
      },
      animation: {
        'gradient-move': 'moveGradient 6s linear infinite',
      },
      keyframes: {
        moveGradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
});
