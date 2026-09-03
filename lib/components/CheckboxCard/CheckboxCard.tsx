import { FC, useId, useState } from 'react';

import { cn } from '@/utils';

import { Card } from '../Card/Card';
import { Checkbox } from '../Checkbox/Checkbox';
import { Typography } from '../Typography/Typography';

import { Props } from './CheckboxCard.types';

/**
 * A card-style checkbox for multi-select options with a title and a description.
 * The whole card is clickable and reflects the checked state on its border.
 *
 * @example
 * ```tsx
 * <CheckboxCard
 *   name="events"
 *   value="instance.created"
 *   label="Instance created"
 *   description="Sent when a new instance finishes provisioning"
 *   checked={events.includes('instance.created')}
 *   onChange={(checked) => toggle('instance.created', checked)}
 * />
 * ```
 */
const CheckboxCard: FC<Props> = ({
  checked,
  className,
  contentClassName,
  defaultChecked,
  description,
  disabled = false,
  id,
  label,
  name,
  theme,
  value,
  wrapperClassName,
  onChange,
}) => {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const labelId = `${controlId}-label`;
  const descriptionId = `${controlId}-description`;
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false,
  );
  const isChecked = checked ?? internalChecked;

  const handleChange = (nextChecked: boolean) => {
    setInternalChecked(nextChecked);
    onChange?.(nextChecked);
  };

  return (
    <Card
      data-theme={theme}
      isActive={isChecked}
      canHover={!disabled}
      wrapperClassName={cn('w-full', wrapperClassName)}
      className={cn(
        'flex items-start p-0',
        disabled && 'cursor-not-allowed opacity-50',
      )}
    >
      <label
        htmlFor={controlId}
        className={cn(
          'flex w-full items-start gap-3 p-4',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
      >
        <Checkbox
          id={controlId}
          name={name}
          value={value}
          checked={isChecked}
          disabled={disabled}
          ariaLabelledBy={labelId}
          aria-describedby={description ? descriptionId : undefined}
          className={cn('mt-0.5 shrink-0', className)}
          onChange={handleChange}
        />

        <span className={cn('flex flex-col gap-1', contentClassName)}>
          <Typography
            id={labelId}
            component="span"
            variant="body2"
            className="font-medium text-slate-800 dark:text-metal-50"
          >
            {label}
          </Typography>

          {description ? (
            <Typography
              id={descriptionId}
              component="span"
              variant="body3"
              className="text-slate-500 dark:text-metal-400"
            >
              {description}
            </Typography>
          ) : null}
        </span>
      </label>
    </Card>
  );
};

CheckboxCard.displayName = 'KonstructCheckboxCard';

export { CheckboxCard };
