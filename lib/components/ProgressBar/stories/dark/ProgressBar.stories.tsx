import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Typography } from '../../../Typography/Typography';
import { ProgressBar } from '../../ProgressBar';

type Story = StoryObj<typeof ProgressBar>;

const meta: Meta<typeof ProgressBar> = {
  title: 'In Review/ProgressBar/Dark',
  component: ProgressBar,
};

export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
  render: function AllVariantsStory() {
    const total = 500;
    const [current, setCurrent] = useState(130);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => {
          if (prev >= total) return 0;
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(interval);
    }, []);

    const animatedPercent = Math.round((current / total) * 100);

    return (
      <div className="max-w-75 flex flex-col gap-6">
        <ProgressBar
          percent={26}
          status="success"
          leftContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              26
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                %
              </Typography>
            </Typography>
          }
          rightContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              130/500
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                {' '}
                GB
              </Typography>
            </Typography>
          }
        />

        <ProgressBar
          percent={75}
          status="warning"
          leftContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              75
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                %
              </Typography>
            </Typography>
          }
          rightContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              375/500
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                {' '}
                GB
              </Typography>
            </Typography>
          }
        />

        <ProgressBar
          percent={95}
          status="error"
          leftContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              95
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                %
              </Typography>
            </Typography>
          }
          rightContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              475/500
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                {' '}
                GB
              </Typography>
            </Typography>
          }
        />

        <ProgressBar
          percent={animatedPercent}
          status={
            animatedPercent >= 90
              ? 'error'
              : animatedPercent >= 70
                ? 'warning'
                : 'success'
          }
          leftContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              {animatedPercent}
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                %
              </Typography>
            </Typography>
          }
          rightContent={
            <Typography
              variant="body3"
              component="span"
              className="text-metal-50"
            >
              {current}/{total}
              <Typography
                variant="body3"
                component="span"
                className="text-metal-400"
              >
                {' '}
                GB
              </Typography>
            </Typography>
          }
        />
      </div>
    );
  },
};

export default meta;
