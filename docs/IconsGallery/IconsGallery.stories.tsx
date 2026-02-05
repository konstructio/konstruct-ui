import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconsGallery as IconsGalleryComponent } from './IconsGallery';

const meta = {
  title: 'Documentation/Icons Gallery',
  component: IconsGalleryComponent,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof IconsGallery>;

export default meta;

type Story = StoryObj<typeof IconsGalleryComponent>;

export const IconsGallery: Story = {
  render: () => <IconsGalleryComponent />,
};
