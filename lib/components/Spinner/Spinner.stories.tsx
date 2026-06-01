import type { Meta, StoryObj } from '@storybook/react-vite';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A loading spinner with optional text and configurable sizes. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'inline-radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Spinner size',
    },
    text: {
      control: { type: 'text' },
      description: 'Optional text shown below the spinner',
    },
    srLabel: {
      control: { type: 'text' },
      description: 'Accessible label for screen readers',
    },
    textVariant: {
      control: { type: 'select' },
      options: [
        'body1',
        'body2',
        'body3',
        'subtitle1',
        'subtitle2',
        'subtitle3',
      ],
      description: 'Typography variant for the text',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    size: 'md',
    text: 'Loading...',
    srLabel: 'Loading',
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Playground: Story = {};
