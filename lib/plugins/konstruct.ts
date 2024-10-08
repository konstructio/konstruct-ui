import plugin from 'tailwindcss/plugin';

import { konstructColors } from './utils/colors';

export const konstructPlugin = plugin(() => ({}), {
  theme: { extend: { colors: { ...konstructColors } } },
});
