import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography as TypographyComponent } from '../Typography';
import { TypographyProps } from '../Typography.types';
import { useEffect } from 'react';

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

export const Dark: Story = {
  args: {},
  render: () => {
    useEffect(() => {
      document.body.setAttribute('data-theme', 'dark');
      document.body.classList.add('bg-metal-900');

      return () => {
        document.body.removeAttribute('data-theme');
        document.body.classList.remove('bg-metal-900');
      };
    }, []);

    return (
      <div className="w-full space-y-4">
        {variants.map((variant) => (
          <TypographyComponent variant={variant}>
            {`${variant} - Almost before we knew it, we had...`}
          </TypographyComponent>
        ))}
      </div>
    );
  },
};

export default meta;
