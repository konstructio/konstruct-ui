import { FC, useCallback, useState } from 'react';

import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { RadioCard } from '../RadioCard/RadioCard';

import { RadioCardGroupProps } from './RadioCardGroup.types';
import { radioCardGroupVariants } from './RadioCardGroup.variants';

export const RadioCardGroup: FC<RadioCardGroupProps> = ({
  className,
  defaultChecked,
  direction,
  name,
  options,
  theme,
  wrapperClassName,
  onValueChange,
}) => {
  const { theme: contextTheme } = useTheme();
  const [selected, setSelected] = useState<string | undefined>(defaultChecked);

  const handleSelected = useCallback(
    (value: string) => {
      setSelected(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <div
      className={cn(
        radioCardGroupVariants({ className: wrapperClassName, direction }),
      )}
    >
      <>
        {options.map(({ value, ...delagated }) => (
          <RadioCard
            key={value}
            value={value}
            theme={theme ?? contextTheme}
            name={name}
            className={cn(className)}
            checked={selected === value}
            onChange={() => handleSelected(value)}
            {...delagated}
          />
        ))}
      </>
    </div>
  );
};
