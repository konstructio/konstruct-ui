import { FC } from 'react';

import { useTheme } from '@/contexts';
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
}) => {
  const { theme: contextTheme } = useTheme();
  const inheritedTheme = theme ?? contextTheme;

  return (
    <Card
      className={cn(
        radioCardVariants({
          className: wrapperClassName,
          theme: inheritedTheme,
        }),
      )}
      wrapperClassName="w-max"
      theme={inheritedTheme}
      isActive={checked}
    >
      <Radio
        theme={inheritedTheme}
        wrapperClassName={cn('w-full h-full p-3 gap-3', labelWrapperClassName)}
        checked={checked}
        {...delegated}
      />
    </Card>
  );
};
