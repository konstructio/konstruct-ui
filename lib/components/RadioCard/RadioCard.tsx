import { FC } from 'react';

import { cn } from '@/utils';

import { Card } from '../Card/Card';
import { Radio } from '../Radio/Radio';

import { RadioCardProps } from './RadioCard.types';
import { radioCardVariants } from './RadioCard.variants';

export const RadioCard: FC<RadioCardProps> = ({
  wrapperClassName,
  theme,
  labelWrapperClassName,
  checked,
  ...delegated
}) => (
  <Card
    data-theme={theme}
    className={cn(
      radioCardVariants({
        className: wrapperClassName,
      }),
    )}
    wrapperClassName="w-max"
    isActive={checked}
  >
    <Radio
      wrapperClassName={cn('w-full h-full p-3 gap-3', labelWrapperClassName)}
      checked={checked}
      {...delegated}
    />
  </Card>
);
