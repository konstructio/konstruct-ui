import type { Meta, StoryObj } from '@storybook/react';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';

import CloudIcon from '@/assets/icons/cloud.svg';
import GridViewIcon from '@/assets/icons/grid-view.svg';
import PhotoLibraryIcon from '@/assets/icons/photo-library.svg';
import ReceiptLongIcon from '@/assets/icons/receipt-long.svg';
import ScatterPlotIcon from '@/assets/icons/scatter-plot.svg';
import { Theme } from '@/contexts';

import { Star } from 'react-feather';
import {
  Footer,
  Logo,
  Navigation,
  NavigationGroup,
  NavigationOption,
  Sidebar as SidebarPrimitive,
} from './Sidebar';

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

      useEffect(() => {
        const callback = (node?: Node) => {
          const sidebar = (node as HTMLElement)?.querySelector(
            '.sidebar-container',
          );

          if (sidebar) {
            debounced();
          }
        };

        const mutationCallback: MutationCallback = (mutationsList) => {
          mutationsList.forEach((mutation) => {
            mutation.addedNodes.forEach(callback);
            mutation.removedNodes.forEach(callback);
          });
        };

        const mutationObserver = new MutationObserver(mutationCallback);

        mutationObserver.observe(window.parent.document.body, {
          childList: true,
          subtree: true,
        });
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
  render: () => {
    const [theme, setTheme] = useState<Theme>('kubefirst');

    return (
      <SidebarPrimitive theme={theme}>
        <Logo>
          <a>
            <img
              className="flex-1 shrink-0"
              src="./logo-kubefirst.svg"
              alt="Company logo"
            />
            <span className="left-[35%]">v1.29.0</span>
          </a>
        </Logo>

        <Navigation>
          <NavigationGroup>
            <NavigationOption>
              <a className="flex items-center gap-2">
                <ScatterPlotIcon /> Clusters
              </a>
            </NavigationOption>

            <NavigationOption role="button" onClick={() => setTheme('colony')}>
              <GridViewIcon /> Services
            </NavigationOption>

            <NavigationOption
              role="button"
              onClick={() => setTheme('kubefirst')}
            >
              <PhotoLibraryIcon /> Environments
            </NavigationOption>
          </NavigationGroup>

          <NavigationGroup title="Admin settings" titleClassName="uppercase">
            <NavigationOption role="button" onClick={() => setTheme('civo')}>
              <ReceiptLongIcon /> Plans & Billing
            </NavigationOption>

            <NavigationOption>
              <a className="flex items-center gap-2">
                <CloudIcon /> Cloud accounts
              </a>
            </NavigationOption>
          </NavigationGroup>
        </Navigation>

        <Footer>
          <span className="text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer">
            <Star className="w-5 h-5" /> Upgrade to Business
          </span>
        </Footer>
      </SidebarPrimitive>
    );
  },
} satisfies Story;

export default meta;
