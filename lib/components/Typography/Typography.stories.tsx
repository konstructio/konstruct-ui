import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography as TypographyComponent } from './Typography';
import { TypographyProps } from './Typography.types';

type Story = StoryObj<typeof TypographyComponent>;

const meta: Meta<typeof TypographyComponent> = {
  title: 'In Review/Typography',
  component: TypographyComponent,
};

const variants = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'subtitle3',
  'labelLarge',
  'labelMedium',
  'labelSmall',
  'buttonSmall',
  'body1',
  'body2',
  'body3',
  'tooltip',
] satisfies TypographyProps['variant'][];

export const Typography: Story = {
  args: {},
  render: () => (
    <>
      <div className="w-full space-y-4">
        {variants.map((variant) => (
          <TypographyComponent variant={variant} theme="kubefirst">
            {`${variant} - Almost before we knew it, we had...`}
          </TypographyComponent>
        ))}
      </div>
    </>
  ),
};

export default meta;
