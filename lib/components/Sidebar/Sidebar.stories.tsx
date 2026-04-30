import type { Meta, StoryObj } from '@storybook/react-vite';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import { Star } from 'react-feather';

import {
  CloudIcon,
  PhotoLibraryIcon,
  ReceiptLongIcon,
  ScatterPlotIcon,
} from '@/assets/icons/components';
import { Theme } from '@/domain/theme';

import { Typography } from '../Typography/Typography';
import {
  Footer,
  Label,
  Logo,
  Navigation,
  NavigationGroup,
  NavigationOption,
  Sidebar as SidebarPrimitive,
} from './Sidebar';

type Story = StoryObj<typeof SidebarPrimitive>;

const meta = {
  title: 'In Review/Sidebar',
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

const renderSidebarContent = (
  theme: Theme,
  onThemeChange: (next: Theme) => void,
) => (
  <>
    <Logo>
      <a className="flex items-center w-full">
        <img
          className="hidden group-data-[mode=expanded]/sidebar:block w-auto h-auto max-w-full"
          src="./logo-kubefirst.svg"
          alt="Company logo"
        />
        <img
          className="block h-10 w-12 group-data-[mode=expanded]/sidebar:hidden"
          src="./ray.svg"
          alt="Company logo"
        />
      </a>
      <Typography variant="labelSmall" className="text-[#ABADC6] lowercase">
        v1.11.1
      </Typography>
    </Logo>

    <Navigation className="mt-4 group-data-[mode=expanded]/sidebar:mt-0">
      <NavigationGroup>
        <NavigationOption>
          <a>
            <ScatterPlotIcon className="w-6 h-6 shrink-0" />
            <Label>Clusters</Label>
          </a>
        </NavigationOption>

        <NavigationOption
          role="button"
          onClick={() => onThemeChange('kubefirst')}
          isActive={theme === 'kubefirst'}
        >
          <a>
            <PhotoLibraryIcon className="w-6 h-6 shrink-0" />
            <Label>Environments</Label>
          </a>
        </NavigationOption>
      </NavigationGroup>

      <NavigationGroup title="Admin settings" titleClassName="uppercase">
        <NavigationOption
          role="button"
          onClick={() => onThemeChange('light')}
          isActive={theme === 'light'}
        >
          <a>
            <ReceiptLongIcon className="w-6 h-6 shrink-0" />
            <Label>Plans & Billing</Label>
          </a>
        </NavigationOption>

        <NavigationOption>
          <a>
            <CloudIcon className="w-6 h-6 shrink-0" />
            <Label>Cloud accounts</Label>
          </a>
        </NavigationOption>
      </NavigationGroup>
    </Navigation>

    <Footer>
      <span className="text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer">
        <Star className="w-5 h-5" />
        <Label>Upgrade to Business</Label>
      </span>
    </Footer>
  </>
);

export const Sidebar = {
  render: function SidebarStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');

    return (
      <SidebarPrimitive theme={theme}>
        {renderSidebarContent(theme, setTheme)}
      </SidebarPrimitive>
    );
  },
} satisfies Story;

export const CollapsedMode = {
  render: function CollapsedStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');

    return (
      <SidebarPrimitive theme={theme} mode="collapsed">
        {renderSidebarContent(theme, setTheme)}
      </SidebarPrimitive>
    );
  },
} satisfies Story;

export const DrawerMode = {
  render: function DrawerStory() {
    const [theme, setTheme] = useState<Theme>('kubefirst');

    return (
      <SidebarPrimitive theme={theme} mode="drawer">
        {renderSidebarContent(theme, setTheme)}
      </SidebarPrimitive>
    );
  },
} satisfies Story;

export default meta;
