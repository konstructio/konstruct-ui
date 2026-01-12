import type { Meta, StoryObj } from '@storybook/react-vite';

import PagesStackIcon from '@/assets/icons/pages-stack.svg';

import { Button } from '../../Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'In Review/Button/Dark',
  component: Button,
};

export const Circular: Story = {
  parameters: {
    theme: 'dark',
  },
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
