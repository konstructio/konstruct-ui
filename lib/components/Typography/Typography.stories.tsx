import type { Meta, StoryObj } from '@storybook/react';

import { Typography as TypographyComponent } from './Typography';
import { variants } from './Typography.variants';

type Story = StoryObj<typeof TypographyComponent>;

const meta: Meta<typeof TypographyComponent> = {
  title: 'In Review/Typography',
  component: TypographyComponent,
};

export const Typography: Story = {
  args: {},
  render: () => (
    <>
      <div className="w-full space-y-4">
        {Object.keys(variants).map((variant) => (
          <TypographyComponent variant={variant as keyof typeof variants}>
            {`${variant} - Almost before we knew it, we had...`}
          </TypographyComponent>
        ))}
      </div>
    </>
  ),
};

export default meta;
