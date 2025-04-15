import type { Meta, StoryObj } from '@storybook/react';
import debounce from 'lodash/debounce';
import { useEffect, useState } from 'react';
import { Star } from 'react-feather';

import CloudIcon from '@/assets/icons/cloud.svg';
import GridViewIcon from '@/assets/icons/grid-view.svg';
import PhotoLibraryIcon from '@/assets/icons/photo-library.svg';
import ReceiptLongIcon from '@/assets/icons/receipt-long.svg';
import ScatterPlotIcon from '@/assets/icons/scatter-plot.svg';
import { Theme } from '@/domain/theme';

import { Typography } from '../Typography/Typography';
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

export const Sidebar = {
  render: () => {
    const [theme, setTheme] = useState<Theme>('kubefirst');

    return (
      <SidebarPrimitive theme={theme}>
        <Logo>
          <a className="flex items-center gap-2">
            <img
              className="flex-1 shrink-0 hidden md:block"
              src="./logo-kubefirst.svg"
              alt="Company logo"
            />
            <img
              className="block h-10 w-12 md:hidden"
              src="./ray.svg"
              alt="Company logo"
            />
            <Typography
              variant="labelSmall"
              className="md:left-[35%] !bottom-[-20px] md:!bottom-0 text-[#ABADC6] lowercase"
            >
              v1.11.1
            </Typography>
          </a>
        </Logo>

        <Navigation className="mt-4 md:mt-0">
          <NavigationGroup>
            <NavigationOption>
              <a className="flex items-center gap-2 md:mt-0">
                <ScatterPlotIcon className="w-6 h-6" />{' '}
                <Typography variant="body1" className="hidden md:block">
                  Clusters
                </Typography>
              </a>
            </NavigationOption>

            <NavigationOption
              role="button"
              onClick={() => setTheme('colony')}
              isActive={theme === 'colony'}
            >
              <GridViewIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block">
                Services
              </Typography>
            </NavigationOption>

            <NavigationOption
              role="button"
              onClick={() => setTheme('kubefirst')}
              isActive={theme === 'kubefirst'}
            >
              <PhotoLibraryIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block">
                Environments
              </Typography>
            </NavigationOption>
          </NavigationGroup>

          <NavigationGroup
            title="Admin settings"
            titleClassName="uppercase hidden md:block "
          >
            <NavigationOption
              role="button"
              onClick={() => setTheme('civo')}
              isActive={theme === 'civo'}
            >
              <ReceiptLongIcon className="w-6 h-6" />{' '}
              <Typography variant="body1" className="hidden md:block">
                Plans & Billing
              </Typography>
            </NavigationOption>

            <NavigationOption>
              <a className="flex items-center gap-2">
                <CloudIcon className="w-6 h-6" />{' '}
                <Typography variant="body1" className="hidden md:block">
                  Cloud accounts
                </Typography>
              </a>
            </NavigationOption>
          </NavigationGroup>
        </Navigation>

        <Footer>
          <span className="text-[#81e2b4] flex items-center gap-2 justify-center font-semibold cursor-pointer">
            <Star className="w-5 h-5" />{' '}
            <Typography variant="body1" className="hidden md:block">
              Upgrade to Business
            </Typography>
          </span>
        </Footer>
      </SidebarPrimitive>
    );
  },
} satisfies Story;

export default meta;
