import type { Meta, StoryObj } from '@storybook/react';
import debounce from 'lodash/debounce';

import { Sidebar as SidebarPrimitive } from './Sidebar';
import { useEffect, useState } from 'react';

type Story = StoryObj<typeof SidebarPrimitive>;

const meta = {
  title: 'Design System/Sidebar',
  component: SidebarPrimitive,
  decorators: [
    (Story) => {
      const [height, setHeight] = useState(window.innerHeight);
      const debounced = debounce(() => setHeight(window.innerHeight), 150);

      useEffect(() => {
        const panel = window.parent.document.getElementById(
          'storybook-panel-root',
        );

        if (!panel) {
          return;
        }

        const observer = new ResizeObserver(debounced);

        observer.observe(panel);

        return () => {
          observer.disconnect();
        };
      }, [debounced]);

      return (
        <div style={{ margin: '-1rem', height }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof SidebarPrimitive>;

export const Sidebar = {
  render: () => (
    <SidebarPrimitive>
      <SidebarPrimitive.Logo>Logo</SidebarPrimitive.Logo>
      <SidebarPrimitive.Navigation>Navigation</SidebarPrimitive.Navigation>
      <SidebarPrimitive.Footer>Footer</SidebarPrimitive.Footer>
    </SidebarPrimitive>
  ),
} satisfies Story;

export default meta;
