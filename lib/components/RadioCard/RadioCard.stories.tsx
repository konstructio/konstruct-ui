import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import CivoLogo from '@/assets/icons/civo-logo.svg';

import { Select } from '../Select/Select';

import { RadioCard as RadioCardComponent } from './RadioCard';

type Story = StoryObj<typeof RadioCardComponent>;

const meta = {
  title: 'In Review/RadioCard',
  component: RadioCardComponent,
} satisfies Meta<typeof RadioCardComponent>;

export const RadioCard = {
  args: {
    label: <CivoLogo />,
    wrapperClassName: 'w-50',
  },
  render: (args) => (
    <div className="w-87.5 flex flex-col gap-4">
      <RadioCardComponent {...args} name="input-name-1" />
      <RadioCardComponent {...args} name="input-name-2" checked={true} />
    </div>
  ),
} satisfies Story;

export const WithTagAndContent = {
  parameters: {
    docs: {
      description: {
        story:
          '`tag` renders a badge next to the label, `hideIndicator` removes the radio circle so the card border communicates the selection, and `content` renders interactive content below the label, outside the selectable area, receiving the checked state. Compute built a ToggleGroup and databases forced this layout with `!` overrides before.',
      },
    },
  },
  render: function WithTagAndContentStory() {
    const [value, setValue] = useState('existing');

    return (
      <div className="flex gap-4">
        <RadioCardComponent
          name="network"
          value="existing"
          label="Existing network"
          tag="Recommended"
          description="Attach the instance to a network you already manage"
          hideIndicator
          wrapperClassName="w-80 rounded-lg"
          checked={value === 'existing'}
          onChange={setValue}
          content={(checked) =>
            checked ? (
              <Select
                label="Network"
                placeholder="Pick a network"
                options={[
                  { label: 'default', value: 'default' },
                  { label: 'staging', value: 'staging' },
                ]}
              />
            ) : null
          }
        />

        <RadioCardComponent
          name="network"
          value="new"
          label="New network"
          description="Create a network for this instance"
          hideIndicator
          wrapperClassName="w-80 rounded-lg"
          checked={value === 'new'}
          onChange={setValue}
        />
      </div>
    );
  },
} satisfies Story;

export default meta;
