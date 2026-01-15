import { FC } from 'react';

import { cn } from '@/utils';

import { Card } from '../Card/Card';
import { Radio } from '../Radio/Radio';

import { RadioCardProps } from './RadioCard.types';
import { radioCardVariants } from './RadioCard.variants';

/**
 * A card-style radio button for visually prominent selection options.
 * Use RadioCardGroup to manage a group of radio cards.
 *
 * @example
 * ```tsx
 * <RadioCard
 *   name="tier"
 *   value="enterprise"
 *   label="Enterprise"
 *   description="Custom pricing"
 *   checked={tier === 'enterprise'}
 *   onChange={(value) => setTier(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocard--docs Storybook}
 */
const RadioCard: FC<RadioCardProps> = ({
  wrapperClassName,
  theme,
  labelWrapperClassName,
  checked,
  description,
  ...delegated
}) => (
  <Card
    data-theme={theme}
    className={cn(
      radioCardVariants({
        className: wrapperClassName,
      }),
    )}
    wrapperClassName={cn('w-max', wrapperClassName)}
    isActive={checked}
  >
    <Radio
      wrapperClassName={cn('w-full h-full p-3 gap-3', labelWrapperClassName)}
      checked={checked}
      description={description}
      {...delegated}
    />
  </Card>
);

RadioCard.displayName = 'KonstructRadioCard';

export { RadioCard };
