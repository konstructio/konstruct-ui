import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import { Typography } from '../Typography/Typography';

import { AnimatedNumber as AnimatedNumberComponent } from './AnimatedNumber';

type Story = StoryObj<typeof AnimatedNumberComponent>;

const LIVE_INTERVAL_MS = 3500;

const CURRENCIES = [
  { locale: 'en-US', currency: 'USD', caption: 'en-US · USD' },
  { locale: 'en-GB', currency: 'GBP', caption: 'en-GB · GBP' },
  { locale: 'de-DE', currency: 'EUR', caption: 'de-DE · EUR (suffix)' },
  { locale: 'fr-FR', currency: 'EUR', caption: 'fr-FR · EUR (suffix)' },
  { locale: 'ja-JP', currency: 'JPY', caption: 'ja-JP · JPY (no decimals)' },
  { locale: 'en-IN', currency: 'INR', caption: 'en-IN · INR (lakh grouping)' },
];

const randomAmount = () => {
  return Math.round(Math.random() * 250_000) / 100;
};

const meta = {
  title: 'In Review/AnimatedNumber',
  component: AnimatedNumberComponent,
  args: {
    value: 1234.5,
    locale: 'en-US',
    currency: 'USD',
    durationSeconds: 2,
    delaySeconds: 0,
    easing: 'easeOut',
    disabled: false,
    animateCharacters: true,
    characterDurationSeconds: 0.35,
  },
  argTypes: {
    value: { control: { type: 'number' } },
    from: { control: { type: 'number' } },
    locale: { control: { type: 'text' } },
    currency: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    durationSeconds: { control: { type: 'range', min: 0, max: 5, step: 0.1 } },
    delaySeconds: { control: { type: 'range', min: 0, max: 3, step: 0.1 } },
    easing: {
      control: { type: 'select' },
      options: ['linear', 'easeIn', 'easeOut', 'easeInOut', 'circOut'],
    },
    disabled: { control: { type: 'boolean' } },
    animateCharacters: { control: { type: 'boolean' } },
    characterDurationSeconds: {
      control: { type: 'range', min: 0, max: 2, step: 0.05 },
    },
    formatOptions: { control: { type: 'object' } },
    format: { control: false },
    onCountStart: { action: 'countStart' },
    onCountEnd: { action: 'countEnd' },
  },
} satisfies Meta<typeof AnimatedNumberComponent>;

export const AnimatedNumber: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Change `value` in the controls to count from the shown value to the new one. Characters that appear or disappear slide in and out; the currency symbol and existing digits stay in place. Screen readers only get the target value.',
      },
    },
  },
  render: (args) => (
    <Typography variant="h4" component="p">
      <AnimatedNumberComponent {...args} />
    </Typography>
  ),
};

export const Currencies: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Currency formatting follows the locale: the symbol moves after the number in `de-DE` and `fr-FR`, and `JPY` has no decimals. Press the button to count every row to a new amount.',
      },
    },
  },
  render: function CurrenciesStory(args) {
    const [amount, setAmount] = useState(1234.5);

    return (
      <Card className="flex flex-col gap-4 max-w-120">
        {CURRENCIES.map(({ locale, currency, caption }) => (
          <div
            key={caption}
            className="flex items-baseline justify-between gap-4"
          >
            <Typography variant="body2">{caption}</Typography>
            <Typography variant="h6" component="span">
              <AnimatedNumberComponent
                {...args}
                value={amount}
                locale={locale}
                currency={currency}
              />
            </Typography>
          </div>
        ))}

        <Button
          variant="secondary"
          onClick={() => {
            setAmount(randomAmount());
          }}
        >
          New amount
        </Button>
      </Card>
    );
  },
};

export const PlainInteger: Story = {
  args: {
    value: 128,
    currency: undefined,
    formatOptions: { maximumFractionDigits: 0 },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Without `currency` the value is a plain number; `formatOptions` rounds every intermediate value to an integer.',
      },
    },
  },
  render: function PlainIntegerStory(args) {
    const [count, setCount] = useState(args.value);

    return (
      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          onClick={() => {
            setCount((current) => {
              return Math.max(0, current - 25);
            });
          }}
        >
          −25
        </Button>
        <Typography variant="h4" component="p">
          <AnimatedNumberComponent {...args} value={count} />
        </Typography>
        <Button
          variant="secondary"
          onClick={() => {
            setCount((current) => {
              return current + 1000;
            });
          }}
        >
          +1000
        </Button>
      </div>
    );
  },
};

export const CountFromZero: Story = {
  args: {
    value: 4821.75,
    from: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          '`from` sets the value counted from on mount, so the number counts up as soon as it renders. Remount the story to replay it.',
      },
    },
  },
  render: function CountFromZeroStory(args) {
    const [mountKey, setMountKey] = useState(0);

    return (
      <div className="flex items-center gap-4">
        <Typography variant="h4" component="p">
          <AnimatedNumberComponent key={mountKey} {...args} />
        </Typography>
        <Button
          variant="secondary"
          onClick={() => {
            setMountKey((current) => {
              return current + 1;
            });
          }}
        >
          Replay
        </Button>
      </div>
    );
  },
};

export const CustomFormat: Story = {
  args: {
    value: 12,
    currency: undefined,
    format: (value: number) => {
      const nodes = Math.round(value);

      return `${nodes} ${nodes === 1 ? 'node' : 'nodes'}`;
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '`format` receives every intermediate value and takes precedence over `locale`, `currency` and `formatOptions`.',
      },
    },
  },
  render: function CustomFormatStory(args) {
    const [nodes, setNodes] = useState(args.value);

    return (
      <div className="flex items-center gap-4">
        <Typography variant="h5" component="p">
          <AnimatedNumberComponent {...args} value={nodes} />
        </Typography>
        <Button
          variant="secondary"
          onClick={() => {
            setNodes(Math.floor(Math.random() * 200) + 1);
          }}
        >
          Scale
        </Button>
      </div>
    );
  },
};

export const Live: Story = {
  args: {
    durationSeconds: 1.5,
  },
  parameters: {
    docs: {
      description: {
        story: `The value changes every ${LIVE_INTERVAL_MS / 1000} s, like a polled balance, so the count and the digits sliding in and out can be watched.`,
      },
    },
  },
  render: function LiveStory(args) {
    const [amount, setAmount] = useState(99.5);

    useEffect(() => {
      const interval = setInterval(() => {
        setAmount((current) => {
          return current < 1000 ? randomAmount() * 10 : randomAmount() / 10;
        });
      }, LIVE_INTERVAL_MS);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <Card className="flex flex-col gap-2 max-w-100">
        <Typography variant="labelLarge">This month</Typography>
        <Typography variant="h4" component="p">
          <AnimatedNumberComponent {...args} value={amount} />
        </Typography>
        <Typography variant="body2">
          Running total, inline with the text around it:{' '}
          <AnimatedNumberComponent
            {...args}
            value={amount}
            className="font-semibold"
          />{' '}
          so far.
        </Typography>
      </Card>
    );
  },
};

export default meta;
