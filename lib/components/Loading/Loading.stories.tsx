import type { Meta, StoryObj } from '@storybook/react-vite';

import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A spinning loading indicator. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Playground: Story = {};
