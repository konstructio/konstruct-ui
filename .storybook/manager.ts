import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'Konstruct UI Design',
    brandUrl: 'https://konstruct.io',
    brandImage: './logo.svg',
    brandTarget: '_self',
    colorSecondary: '#FA9247',
    appBg: '#f0f0f0',
    appBorderColor: '#ccc',
    textColor: '#333',
    barTextColor: '#666',
  }),
  sidebar: {
    showRoots: true,
  },
});
