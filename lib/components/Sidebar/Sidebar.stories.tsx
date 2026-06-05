import type { Meta, StoryObj } from '@storybook/react-vite';
import { Home, Settings } from 'lucide-react';

import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A compound component for building application sidebars with navigation. Use the **Controls** panel below to interact with the props.',
      },
    },
  },
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['auto', 'expanded', 'collapsed', 'drawer'],
      description: 'Controls the responsive mode of the sidebar',
    },
    canResize: {
      control: { type: 'boolean' },
      description: 'Whether the sidebar can be resized by dragging',
    },
    expandOnHover: {
      control: { type: 'boolean' },
      description: 'Expand hovered option when in collapsed mode',
    },
    minWith: {
      control: { type: 'number' },
      description: 'Minimum width when resizing in pixels',
    },
    maxWith: {
      control: { type: 'number' },
      description: 'Maximum width when resizing in pixels',
    },
    initialWidth: {
      control: { type: 'number' },
      description: 'Initial width in pixels when entering expanded mode',
    },
    theme: {
      control: { type: 'select' },
      options: [undefined, 'kubefirst', 'light', 'kubefirst-dark', 'dark'],
      description: 'Theme override for this instance',
    },
  },
  args: {
    mode: 'expanded',
    canResize: false,
    expandOnHover: true,
    minWith: 240,
    maxWith: 300,
    initialWidth: 256,
  },
  render: (args) => {
    return (
      <div style={{ height: 500, display: 'flex' }}>
        <Sidebar {...args}>
          <Sidebar.Navigation>
            <Sidebar.NavigationGroup title="Main">
              <Sidebar.NavigationOption>
                <Home size={18} />
                <Sidebar.Label>Dashboard</Sidebar.Label>
              </Sidebar.NavigationOption>
              <Sidebar.NavigationOption>
                <Settings size={18} />
                <Sidebar.Label>Settings</Sidebar.Label>
              </Sidebar.NavigationOption>
            </Sidebar.NavigationGroup>
          </Sidebar.Navigation>
          <Sidebar.Footer>v1.0.0</Sidebar.Footer>
        </Sidebar>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Playground: Story = {};
