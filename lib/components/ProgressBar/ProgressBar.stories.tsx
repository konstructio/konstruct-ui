import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ProgressBar as ProgressBarComponent } from './ProgressBar';

type Story = StoryObj<typeof ProgressBarComponent>;

const meta: Meta<typeof ProgressBarComponent> = {
  title: 'In Review/ProgressBar',
  component: ProgressBarComponent,
};

export const ProgressBar: Story = {
  render: () => {
    const [percent, setPercent] = useState(10);

    useEffect(() => {
      const interval = setInterval(() => {
        setPercent((prevPercent) => {
          if (prevPercent >= 100) {
            return 0;
          }

          return prevPercent + 5;
        });
      }, 1500);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <div className="max-w-[350px] flex flex-col gap-2">
        <ProgressBarComponent
          label="Provisioning cluster:"
          percent={80}
          status="progress"
        />

        <div className="mt-3" />

        <ProgressBarComponent
          label="Completed!"
          status="success"
          percent={100}
        />

        <div className="mt-3" />

        <ProgressBarComponent
          label="Provisioning:"
          status={percent === 100 ? 'success' : 'progress'}
          percent={percent}
        />
      </div>
    );
  },
};

export default meta;
