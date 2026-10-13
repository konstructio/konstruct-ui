import type { Meta, StoryObj } from '@storybook/react-vite';

import { AvatarGroup } from '../AvatarGroup/AvatarGroup';

import { Avatar as AvatarComponent } from './Avatar';

type Story = StoryObj<typeof AvatarComponent>;

const meta = {
  title: 'In Review/Avatar',
  component: AvatarComponent,
} satisfies Meta<typeof AvatarComponent>;

export const Avatar: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Image → Gravatar by email → initials → icon. Teams, dashboard-manager and settings each reimplemented the Gravatar lookup and the fallback chain. `AvatarGroup` stacks avatars and collapses the rest into a "+N" bubble.',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <AvatarComponent alt="Ada Lovelace" src="./talos.svg" size="sm" />
        <AvatarComponent alt="Grace Hopper" fallback="GH" />
        <AvatarComponent
          alt="Katherine Johnson"
          email="katherine@example.com"
          fallback="KJ"
          size="lg"
        />
        <AvatarComponent alt="Unknown member" size="lg" />
      </div>

      <AvatarGroup
        max={3}
        items={[
          { id: 1, alt: 'Ada Lovelace', fallback: 'AL' },
          { id: 2, alt: 'Grace Hopper', fallback: 'GH' },
          { id: 3, alt: 'Katherine Johnson', fallback: 'KJ' },
          { id: 4, alt: 'Margaret Hamilton', fallback: 'MH' },
          { id: 5, alt: 'Radia Perlman', fallback: 'RP' },
        ]}
      />

      <AvatarGroup items={[]} />
    </div>
  ),
};

export default meta;
