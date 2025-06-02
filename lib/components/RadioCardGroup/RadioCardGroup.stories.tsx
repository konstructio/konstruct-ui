import type { Meta, StoryObj } from '@storybook/react-vite';

import CivoLogo from '@/assets/icons/civo-logo.svg';

import { RadioCardGroup as RadioCardGroupComponent } from './RadioCardGroup';

type Story = StoryObj<typeof RadioCardGroupComponent>;

const meta = {
  title: 'In Review/RadioCardGroup',
  component: RadioCardGroupComponent,
} satisfies Meta<typeof RadioCardGroupComponent>;

export const RadioCardGroup = {
  args: {
    defaultChecked: 'option-1',
    options: [
      {
        label: <CivoLogo />,
        value: 'option-1',
        wrapperClassName: 'w-[200px]',
      },
      {
        label: <CivoLogo />,
        value: 'option-2',
        wrapperClassName: 'w-[200px]',
      },
      {
        label: <CivoLogo />,
        value: 'option-3',
        wrapperClassName: 'w-[200px]',
      },
    ],
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <h6>Row</h6>
      <RadioCardGroupComponent
        {...args}
        name="radio-card-group-1"
        direction="row"
      />

      <h6 className="mt-5">Column</h6>
      <RadioCardGroupComponent {...args} name="radio-card-group-2" />
    </div>
  ),
} satisfies Story;

export default meta;
