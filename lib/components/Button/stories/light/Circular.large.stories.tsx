import type { Meta, StoryObj } from '@storybook/react-vite';

import PagesStackIcon from '@/assets/icons/pages-stack.svg';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Light/CircularLarge',
  component: Button,
};

export const CircularLarge: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-fit items-center">
      <Button shape="circle" size="large">
        <PagesStackIcon />
      </Button>

      <Button shape="circle" size="large" variant="danger">
        <PagesStackIcon />
      </Button>

      <Button shape="circle" size="large" disabled>
        <PagesStackIcon />
      </Button>
    </div>
  ),
};

export default meta;
