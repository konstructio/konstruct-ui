import { Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info } from 'react-feather';

import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { RadioGroup as RadioGroupComponent } from '../RadioGroup';

type Story = StoryObj<typeof RadioGroupComponent>;

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'In Review/RadioGroup/Dark',
  component: RadioGroupComponent,
};

export const Dark = {
  parameters: {
    theme: 'dark',
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      {
        label: (
          <span className="flex items-center gap-1.5">
            Option 3{' '}
            <Provider delayDuration={0}>
              <Root>
                <Trigger asChild>
                  <Info className="w-3.75 h-3.75 text-slate-400 dark:text-metal-400" />
                </Trigger>

                <Content
                  side="top"
                  align="center"
                  className={cn(
                    "after:content-['']",
                    'after:-translate-x-1/2',
                    'after:absolute',
                    'after:border-metal-700',
                    'after:border-l-8',
                    'after:border-l-transparent',
                    'after:border-r-8',
                    'after:border-r-transparent',
                    'after:border-t-8',
                    'after:bottom-0',
                    'after:left-1/2',
                    'after:translate-y-full',
                    'animate-in',
                    'bg-metal-700',
                    'fade-in-0',
                    'mb-1.5',
                    'overflow-visible',
                    'px-3',
                    'py-2',
                    'relative',
                    'rounded-lg',
                    'shadow-sm',
                    'text-white',
                    'z-999',
                  )}
                >
                  Example tooltip
                </Content>
              </Root>
            </Provider>
          </span>
        ),
        value: 'option3',
      },
    ],
  },
  render: (args) => (
    <div className="w-87.5 flex flex-col gap-3">
      <Typography component="h6">Row</Typography>

      <RadioGroupComponent
        {...args}
        direction="row"
        name="radio-group-row"
        defaultChecked="option1"
        options={args.options.map(({ value, ...delegated }) => ({
          ...delegated,
          value,
        }))}
      />

      <Typography component="h6" className="mt-5">
        Column
      </Typography>

      <RadioGroupComponent
        {...args}
        name="radio-group-col"
        defaultChecked="option1"
        options={args.options.map(({ value, ...delegated }) => ({
          ...delegated,
          value,
        }))}
      />
    </div>
  ),
} satisfies Story;

export default meta;
