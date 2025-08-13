import { FC, useCallback, useState } from 'react';

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
      data-theme={theme}
    >
      {options.map(({ value, ...delagated }) => (
        <RadioCard
          key={value}
          value={value}
          name={name}
          className={cn(className)}
          checked={selected === value}
          onChange={() => handleSelected(value)}
          {...delagated}
        />
      ))}
    </div>
  );
};
