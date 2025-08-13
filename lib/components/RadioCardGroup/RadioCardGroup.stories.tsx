import type { Meta, StoryObj } from '@storybook/react-vite';

import CivoLogo from '@/assets/icons/civo-logo.svg';

import { RadioCardGroup as RadioCardGroupComponent } from './RadioCardGroup';
import { Typography } from '../Typography/Typography';

type Story = StoryObj<typeof RadioCardGroupComponent>;

const meta = {
  title: 'In Review/RadioCardGroup',
  component: RadioCardGroupComponent,
} satisfies Meta<typeof RadioCardGroupComponent>;

const optionsWithDescription = [
  {
    label: (
      <Typography variant="subtitle3" className="text-zinc-700">
        Kubefirst template
      </Typography>
    ),
    value: 'option-1',
    description: (
      <Typography variant="body2" className="text-zinc-700">
        Provision a new cluster from a Kubefirst defined template
      </Typography>
    ),
    wrapperClassName: 'rounded-lg w-full',
  },
  {
    label: (
      <Typography variant="subtitle3" className="text-zinc-700">
        Custom template
      </Typography>
    ),
    value: 'option-2',
    description: (
      <Typography variant="body2" className="text-zinc-700">
        Provision a new cluster from a pre-defined custom template
      </Typography>
    ),
    wrapperClassName: 'rounded-lg w-full',
  },
];

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
    <div className="w-[635px] flex flex-col gap-3">
      <h6>Row</h6>
      <RadioCardGroupComponent
        {...args}
        name="radio-card-group-1"
        direction="row"
      />

      <h6 className="mt-5">Column</h6>
      <RadioCardGroupComponent {...args} name="radio-card-group-2" />

      <h6 className="mt-5">Column with description</h6>
      <RadioCardGroupComponent
        defaultChecked="option-1"
        theme="kubefirst"
        options={optionsWithDescription}
        wrapperClassName="w-full"
        name="radio-card-group-3"
      />
    </div>
  ),
} satisfies Story;

export default meta;
