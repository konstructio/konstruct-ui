import { FC, useCallback, useState } from 'react';

import { cn } from '@/utils';

import { RadioCard } from '../RadioCard/RadioCard';

import { RadioCardGroupProps } from './RadioCardGroup.types';
import { radioCardGroupVariants } from './RadioCardGroup.variants';

/**
 * A group of card-style radio buttons with shared state management.
 *
 * @example
 * ```tsx
 * <RadioCardGroup
 *   name="plan"
 *   direction="row"
 *   options={[
 *     { value: 'starter', label: 'Starter', description: 'For individuals' },
 *     { value: 'team', label: 'Team', description: 'For small teams' },
 *     { value: 'business', label: 'Business', description: 'For organizations' },
 *   ]}
 *   defaultChecked="team"
 *   onValueChange={(value) => console.log(value)}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-radiocardgroup--docs Storybook}
 */
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
