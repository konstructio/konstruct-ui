import type { Meta, StoryObj } from '@storybook/react-vite';

import { Autocomplete as AutocompleteComponent } from './Autocomplete';

type Story = StoryObj<typeof AutocompleteComponent>;

const meta: Meta<typeof AutocompleteComponent> = {
  title: 'In Review/Autocomplete',
  component: AutocompleteComponent,
};

export const Autocomplete: Story = {
  args: {
    placeholder: 'Search...',
    options: [
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
      { value: 'Option 4' },
      { value: 'Option 5' },
      { value: 'Option 6' },
    ],
  },
  render: (args) => (
    <div className="w-[350px] flex flex-col gap-3">
      <AutocompleteComponent
        label="Kubefirst colors"
        theme="kubefirst"
        {...args}
      />
      <AutocompleteComponent label="Civo colors" {...args} />
    </div>
  ),
};

export default meta;
