import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { TagsInput as TagsInputComponent } from './TagsInput';

type Story = StoryObj<typeof TagsInputComponent>;

const meta = {
  title: 'In Review/TagsInput',
  component: TagsInputComponent,
} satisfies Meta<typeof TagsInputComponent>;

export const TagsInput: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Free-text tags with the `Input` API for label, error and helper text. Enter or comma adds a tag, Backspace on an empty field removes the last one, the pending text is committed on blur, and `suggestions` offers existing tags in a keyboard-navigable list. Compute (TagsInput) and vpc (ChipsInput) each built one.',
      },
    },
  },
  render: function TagsInputStory() {
    const [tags, setTags] = useState<string[]>(['web']);
    const [required, setRequired] = useState<string[]>([]);

    return (
      <div className="flex flex-col gap-6 max-w-100">
        <TagsInputComponent
          label="Tags"
          placeholder="Add a tag…"
          value={tags}
          suggestions={['staging', 'production', 'database', 'critical']}
          helperText="Press Enter or comma to add a tag"
          onChange={setTags}
        />

        <TagsInputComponent
          label="Firewall rules"
          isRequired
          value={required}
          error={required.length === 0 ? 'Add at least one rule' : undefined}
          onChange={setRequired}
        />

        <TagsInputComponent
          label="Loading suggestions"
          value={['web']}
          isLoading
          onChange={() => {}}
        />
      </div>
    );
  },
};

export default meta;
