import type { Meta, StoryObj } from '@storybook/react-vite';

import CivoLogo from '@/assets/icons/civo-logo.svg';

import { RadioCard as RadioCardComponent } from './RadioCard';

type Story = StoryObj<typeof RadioCardComponent>;

const meta = {
  title: 'In Review/RadioCard',
  component: RadioCardComponent,
} satisfies Meta<typeof RadioCardComponent>;

export const RadioCard = {
  args: {
    label: <CivoLogo />,
    wrapperClassName: 'w-[200px]',
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-4">
      <RadioCardComponent {...args} name="input-name-1" />
      <RadioCardComponent {...args} name="input-name-2" checked={true} />
    </div>
  ),
} satisfies Story;

export default meta;
