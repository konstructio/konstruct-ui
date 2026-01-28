import type { Meta, StoryObj } from '@storybook/react-vite';

import { PagesStackIcon } from '@/assets/icons/components';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Light/Circular',
  component: Button,
};

export const Circular: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-fit items-center">
      <Button shape="circle" size="medium">
        <PagesStackIcon />
      </Button>

      <Button shape="circle" size="medium" variant="danger">
        <PagesStackIcon />
      </Button>

      <Button shape="circle" size="medium" disabled>
        <PagesStackIcon />
      </Button>
    </div>
  ),
};

export default meta;
