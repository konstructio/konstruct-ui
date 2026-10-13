import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { OtpInput as OtpInputComponent } from './OtpInput';

type Story = StoryObj<typeof OtpInputComponent>;

const meta = {
  title: 'In Review/OtpInput',
  component: OtpInputComponent,
} satisfies Meta<typeof OtpInputComponent>;

export const OtpInput: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'One box per digit. The first box accepts SMS autofill and spreads a pasted or autofilled code across the others; Backspace and the arrow keys move between boxes. Dashboard-manager (signup) and settings (phone verification) carried the same implementation.',
      },
    },
  },
  render: function OtpInputStory() {
    const [code, setCode] = useState('');
    const isWrong = code.length === 6 && code !== '123456';

    return (
      <div className="flex flex-col gap-6">
        <OtpInputComponent
          label="Verification code"
          autoFocus
          onChange={setCode}
          error={isWrong ? 'The code is not valid. Try 123456.' : undefined}
        />

        <OtpInputComponent
          label="Disabled code"
          length={4}
          value="12"
          disabled
        />
      </div>
    );
  },
};

export default meta;
