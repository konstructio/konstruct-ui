import { FC } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { Radio } from '../Radio/Radio';

import { RadioGroupProps } from './RadioGroup.types';

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  theme,
  name,
  asChild,
  onValueChange,
}) => {
  const Comp = asChild ? Slot : 'div';

  return (
    <Comp className="flex gap-2">
      <>
        {options.map(({ value, label }) => (
          <Radio
            key={value}
            label={label}
            value={value}
            theme={theme}
            name={name}
            onChange={() => onValueChange?.(value)}
          />
        ))}
      </>
    </Comp>
  );
};
