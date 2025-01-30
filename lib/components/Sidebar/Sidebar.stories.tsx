import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar as SidebarPrimitive } from './Sidebar';

type Story = StoryObj<typeof SidebarPrimitive>;

const meta: Meta<typeof SidebarPrimitive> = {
  title: 'Design System/Sidebar',
  component: SidebarPrimitive,
};

export const Sidebar: Story = {
  render: () => <SidebarPrimitive />,
};

export default meta;
