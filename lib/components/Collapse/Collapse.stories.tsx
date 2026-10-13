import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Select } from '../Select/Select';

import { Collapse as CollapseComponent } from './Collapse';

type Story = StoryObj<typeof CollapseComponent>;

const meta = {
  title: 'In Review/Collapse',
  component: CollapseComponent,
} satisfies Meta<typeof CollapseComponent>;

export const Collapse: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Animates height between collapsed and expanded, honours `prefers-reduced-motion`, and only clips overflow while animating so a Select inside can open freely. `keepMounted` keeps the content in the DOM (hidden and inert) so `aria-controls` always resolves. Compute, settings and kubernetes each carried their own version.',
      },
    },
  },
  render: function CollapseStory() {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <Card className="flex flex-col gap-4 max-w-100">
        <Button
          variant="tertiary"
          aria-expanded={isOpen}
          aria-controls="advanced-options"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? 'Hide' : 'Show'} advanced options
        </Button>

        <CollapseComponent id="advanced-options" isOpen={isOpen} keepMounted>
          <div className="flex flex-col gap-4 pt-2">
            <Select
              label="Network"
              placeholder="Pick a network"
              options={[
                { label: 'default', value: 'default' },
                { label: 'staging', value: 'staging' },
              ]}
            />
            <Select
              label="Firewall"
              placeholder="Pick a firewall"
              options={[
                { label: 'default', value: 'default' },
                { label: 'web', value: 'web' },
              ]}
            />
          </div>
        </CollapseComponent>
      </Card>
    );
  },
};

export default meta;
