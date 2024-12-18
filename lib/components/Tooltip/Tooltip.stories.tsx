import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';

import { Tooltip as TooltipComponent } from './Tooltip';
import { ThemeProvider } from '../../contexts';

type Story = StoryObj<typeof TooltipComponent>;

const meta: Meta<typeof TooltipComponent> = {
  title: 'Design System/Tooltip',
  component: TooltipComponent,
};

export const Tooltip: Story = {
  render: () => {
    const FancyHover = () => <span className="text-white">Hello!</span>;

    return (
      <div className="w-[350px] h-[350px] flex items-center justify-center">
        <div className="flex flex-col gap-5">
          <TooltipComponent
            content={<FancyHover />}
            position="top"
            wrapperClassName="flex justify-center"
          >
            <Button>Hover on the top!</Button>
          </TooltipComponent>

          <ThemeProvider theme="colony">
            <TooltipComponent
              content={<FancyHover />}
              wrapperClassName="flex justify-center"
            >
              <Button>Hover on the right!</Button>
            </TooltipComponent>
          </ThemeProvider>

          <TooltipComponent
            content={<FancyHover />}
            position="left"
            wrapperClassName="flex justify-center"
          >
            <Button>Hover on the left!</Button>
          </TooltipComponent>

          <ThemeProvider theme="colony">
            <TooltipComponent
              content={<FancyHover />}
              position="bottom"
              wrapperClassName="flex justify-center"
            >
              <Button>Hover on the bottom!</Button>
            </TooltipComponent>
          </ThemeProvider>
        </div>
      </div>
    );
  },
};

export default meta;
