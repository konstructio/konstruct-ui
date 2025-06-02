import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '@/components/Button/Button';

import { Tooltip as TooltipComponent } from './Tooltip';

type Story = StoryObj<typeof TooltipComponent>;

const meta: Meta<typeof TooltipComponent> = {
  title: 'In Review/Tooltip',
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

          <TooltipComponent
            content={<FancyHover />}
            wrapperClassName="flex justify-center"
            theme="colony"
          >
            <Button>Hover on the right!</Button>
          </TooltipComponent>

          <TooltipComponent
            content={<FancyHover />}
            position="left"
            wrapperClassName="flex justify-center"
          >
            <Button>Hover on the left!</Button>
          </TooltipComponent>

          <TooltipComponent
            content={<FancyHover />}
            position="bottom"
            wrapperClassName="flex justify-center"
            theme="colony"
          >
            <Button>Hover on the bottom!</Button>
          </TooltipComponent>
        </div>
      </div>
    );
  },
};

export default meta;
