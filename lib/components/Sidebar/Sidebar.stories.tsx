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
      <a className="flex items-center gap-2">
        <img
          className="flex-1 shrink-0 hidden group-data-[mode=expanded]/sidebar:block"
          src="./logo-kubefirst.svg"
          alt="Company logo"
        />
        <img
          className="block h-10 w-12 group-data-[mode=expanded]/sidebar:hidden"
          src="./ray.svg"
          alt="Company logo"
        />
        <Typography
          variant="labelSmall"
          className="group-data-[mode=expanded]/sidebar:left-[35%] -bottom-5! group-data-[mode=expanded]/sidebar:bottom-0! text-[#ABADC6] lowercase"
        >
          v1.11.1
        </Typography>
      </a>
    </Logo>

    <Navigation className="mt-4 group-data-[mode=expanded]/sidebar:mt-0">
      <NavigationGroup>
        <NavigationOption>
          <a className="flex items-center gap-2">
            <ScatterPlotIcon className="w-6 h-6" />
            <Label>Clusters</Label>
          </a>
        </NavigationOption>

        <NavigationOption
          role="button"
          onClick={() => onThemeChange('kubefirst')}
          isActive={theme === 'kubefirst'}
        >
          <PhotoLibraryIcon className="w-6 h-6" />
          <Label>Environments</Label>
        </NavigationOption>
      </NavigationGroup>

      <NavigationGroup title="Admin settings" titleClassName="uppercase">
        <NavigationOption
          role="button"
          onClick={() => onThemeChange('light')}
          isActive={theme === 'light'}
        >
          <ReceiptLongIcon className="w-6 h-6" />
          <Label>Plans & Billing</Label>
        </NavigationOption>

        <NavigationOption>
          <a className="flex items-center gap-2">
            <CloudIcon className="w-6 h-6" />
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
