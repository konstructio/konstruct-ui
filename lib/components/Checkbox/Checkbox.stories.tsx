import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox as CheckboxComponent } from './Checkbox';

type Story = StoryObj<typeof CheckboxComponent>;

const meta: Meta<typeof Checkbox> = {
  component: CheckboxComponent,
};

export const Checkbox: Story = {
  args: {
    children: 'Primary',
  },
};

export default meta;
