import { FC } from 'react';
import { Check } from 'react-feather';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeContextType, ThemeProvider } from '../../contexts';
import { Button } from '../Button/Button';

import { Card as CardComponent } from './Card';
import { CardProps } from './Card.types';

type Story = StoryObj<typeof CardComponent>;

const meta: Meta<typeof CardComponent> = {
  title: 'Design System/Card',
  component: CardComponent,
};

export const Card: Story = {
  render: () => {
    const themes = [
      'kubefirst',
      'colony',
      'civo',
    ] satisfies ThemeContextType['theme'][];

    const Wrapper: FC<Pick<CardProps, 'isActive' | 'canHover'>> = (props) => (
      <div className="max-w-[350px] flex flex-col gap-2 w-[280px]">
        <CardComponent className="flex flex-col gap-3 p-5" {...props}>
          <header className="text-center">
            <h3 className="text-slate-700 text-2xl">Business</h3>
          </header>

          <div className="flex flex-col gap-3 pb-11">
            <p className="text-sm text-slate-500 text-center">
              Take advantage of our Business Plan to manage more clusters,
              self-host a private GitOps catalog, unlock unlimited cluster
              templates, and unify your platform services with a single
              interface.
            </p>

            <p className="text-slate-700 text-[22px] text-center">
              $0.33 / cluster / hour
            </p>

            <Button>Contact us</Button>

            <p className="text-slate-500 text-sm mt-3">
              Everything in Free plus:
            </p>

            <ul className="text-slate-700 text-sm flex flex-col gap-2">
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Full feature access to the User Interface
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Up to 10 physical clusters
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Multi-account provisioning
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Customizable GitOps Catalog
              </li>
              <li className="flex items-start gap-1">
                <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                Slack Connect support
              </li>
            </ul>
          </div>
        </CardComponent>
      </div>
    );

    return (
      <>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            {themes.map((theme) => (
              <ThemeProvider theme={theme}>
                <Wrapper />
              </ThemeProvider>
            ))}
          </div>

          <div className="flex gap-4">
            {themes.map((theme) => (
              <ThemeProvider theme={theme}>
                <Wrapper canHover={true} />
              </ThemeProvider>
            ))}
          </div>

          <div className="flex gap-4">
            {themes.map((theme) => (
              <ThemeProvider theme={theme}>
                <Wrapper isActive={true} />
              </ThemeProvider>
            ))}
          </div>
        </div>
      </>
    );
  },
};

export default meta;
