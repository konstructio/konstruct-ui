import type { Meta, StoryObj } from '@storybook/react';
import debounce from 'lodash/debounce';
import { Star } from 'react-feather';

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
      <SidebarPrimitive.Logo>
        <a href="#">
          <img
            className="flex-1 shrink-0"
            src="./logo-kubefirst.svg"
            alt="Company logo"
          />
          <span className="left-[35%]">v1.29.0</span>
        </a>
      </SidebarPrimitive.Logo>

      <SidebarPrimitive.Navigation>
        <p className="text-white">Navigation</p>
      </SidebarPrimitive.Navigation>

      <SidebarPrimitive.Footer>
        <span className="text-[#81E2B4] flex items-center gap-2 justify-center font-semibold cursor-pointer">
          <Star className="w-5 h-5" /> Upgrade to Business
        </span>
      </SidebarPrimitive.Footer>
    </SidebarPrimitive>
  ),
} satisfies Story;

export default meta;
