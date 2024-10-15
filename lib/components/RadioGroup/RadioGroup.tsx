import { FC, useCallback, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';

import { useTheme } from '../../contexts';
import { Radio } from '../Radio/Radio';

import { RadioGroupProps } from './RadioGroup.types';

export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  theme,
  name,
  asChild,
  defaultValue,
  onValueChange,
}) => {
  const Comp = asChild ? Slot : 'div';
  const { theme: contextTheme } = useTheme();
  const [selected, setSelected] = useState<string | undefined>(defaultValue);

  const handleSelected = useCallback(
    (value: string) => {
      setSelected(value);
      onValueChange?.(value);
    },
    [onValueChange],
  );

  return (
    <Comp className="flex gap-2">
      <>
        {options.map(({ value, ...delagated }) => (
          <Radio
            key={value}
            value={value}
            theme={theme ?? contextTheme}
            name={name}
            checked={selected === value}
            onChange={() => handleSelected(value)}
            {...delagated}
          />
        ))}
      </>
    </Comp>
  );
};
