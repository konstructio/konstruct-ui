import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Input } from '../Input/Input';

import { PasswordRules as PasswordRulesComponent } from './PasswordRules';

type Story = StoryObj<typeof PasswordRulesComponent>;

const meta = {
  title: 'In Review/PasswordRules',
  component: PasswordRulesComponent,
} satisfies Meta<typeof PasswordRulesComponent>;

export const PasswordRules: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Live list of password requirements: each rule flips from a bullet to a check as the value satisfies it and carries a screen-reader status. Dashboard-manager (signup) and settings (security tab) each had a copy; the settings one had lost the live region.',
      },
    },
  },
  render: function PasswordRulesStory() {
    const [password, setPassword] = useState('');

    return (
      <div className="flex flex-col gap-4 max-w-80">
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <PasswordRulesComponent
          value={password}
          title="Your password must contain at least:"
          rules={[
            {
              id: 'length',
              label: '8 characters',
              test: (value) => value.length >= 8,
            },
            {
              id: 'upper',
              label: 'one uppercase letter',
              test: (value) => /[A-Z]/.test(value),
            },
            {
              id: 'number',
              label: 'one number',
              test: (value) => /\d/.test(value),
            },
            {
              id: 'symbol',
              label: 'one symbol',
              test: (value) => /[^A-Za-z0-9]/.test(value),
            },
          ]}
        />
      </div>
    );
  },
};

export default meta;
