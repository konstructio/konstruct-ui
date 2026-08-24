import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea as TextAreaComponent } from '../TextArea';

type Story = StoryObj<typeof TextAreaComponent>;

const meta: Meta<typeof TextAreaComponent> = {
  title: 'In Review/TextArea/Dark',
  component: TextAreaComponent,
};

export const Dark = {
  parameters: {
    theme: 'dark',
  },
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => (
    <div className="w-100 flex flex-col gap-4 p-4">
      <TextAreaComponent
        {...args}
        label="This is a label"
        isRequired
        helperText="This is a helper text."
      />
      <TextAreaComponent {...args} />
      <TextAreaComponent {...args} label="This is a label" rows={5} />
      <TextAreaComponent
        {...args}
        label="This is an expandable textarea"
        isExpandable
      />
      <TextAreaComponent
        {...args}
        label="This is a label"
        helperText="This is a helper text."
        error="This is an error."
      />
      <TextAreaComponent
        {...args}
        placeholder="This is a disabled field."
        disabled
      />
    </div>
  ),
} satisfies Story;

export default meta;
