import { FC } from 'react';

import { cn } from '@/utils';

import { Card } from '../Card/Card';
import { Radio } from '../Radio/Radio';

import { RadioCardProps } from './RadioCard.types';
import { radioCardVariants } from './RadioCard.variants';

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
