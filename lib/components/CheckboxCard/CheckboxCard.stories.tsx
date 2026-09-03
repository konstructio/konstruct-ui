import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CheckboxCard as CheckboxCardComponent } from './CheckboxCard';

type Story = StoryObj<typeof CheckboxCardComponent>;

const meta = {
  title: 'In Review/CheckboxCard',
  component: CheckboxCardComponent,
} satisfies Meta<typeof CheckboxCardComponent>;

const EVENTS = [
  {
    value: 'instance.created',
    label: 'Instance created',
    description: 'Sent when a new instance finishes provisioning',
  },
  {
    value: 'instance.deleted',
    label: 'Instance deleted',
    description: 'Sent when an instance is removed from the account',
  },
  {
    value: 'instance.rebooted',
    label: 'Instance rebooted',
    description: 'Not available on this plan',
    disabled: true,
  },
];

export const CheckboxCard = {
  parameters: {
    docs: {
      description: {
        story:
          'The multi-select counterpart of RadioCard: a clickable card with a title, a description and a checkbox, reflecting the checked state on its border. Settings built this as EventCheckboxCard for webhook events.',
      },
    },
  },
  render: function CheckboxCardStory() {
    const [selected, setSelected] = useState<string[]>(['instance.created']);

    return (
      <div className="grid max-w-160 grid-cols-2 gap-4">
        {EVENTS.map(({ value, label, description, disabled }) => (
          <CheckboxCardComponent
            key={value}
            name="events"
            value={value}
            label={label}
            description={description}
            disabled={disabled}
            checked={selected.includes(value)}
            onChange={(checked) => {
              setSelected((current) =>
                checked
                  ? [...current, value]
                  : current.filter((item) => item !== value),
              );
            }}
          />
        ))}
      </div>
    );
  },
} satisfies Story;

export default meta;
