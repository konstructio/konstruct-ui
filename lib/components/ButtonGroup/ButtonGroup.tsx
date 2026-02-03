import { FC } from 'react';

import { cn } from '@/utils';

import { Props } from './ButtonGroup.types';
import {
  buttonGroupVariants,
  buttonGroupWrapperVariants,
} from './ButtonGroup.variants';
import {
  ButtonGroupItem,
  ButtonGroupLabel,
  ButtonGroupMessage,
} from './components';
import { useButtonGroup } from './hooks';

/**
 * A segmented toggle button group for single selection among options.
 *
 * @example
 * ```tsx
 * // Simple button group
 * <ButtonGroup
 *   name="processor"
 *   options={[
 *     { value: 'cpu', label: 'CPU' },
 *     { value: 'gpu', label: 'GPU' },
 *   ]}
 *   defaultValue="cpu"
 *   onValueChange={(value) => setProcessor(value)}
 * />
 *
 * // With descriptions
 * <ButtonGroup
 *   name="instance-type"
 *   label="Instance Type"
 *   isRequired
 *   options={[
 *     { value: 'standard', label: 'Standard', description: 'Balanced compute resources' },
 *     { value: 'spot', label: 'Spot', description: 'Cost-effective for flexible workloads' },
 *   ]}
 *   onValueChange={setInstanceType}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-buttongroup--docs Storybook}
 */
export const ButtonGroup: FC<Props> = ({
  className,
  contentClassName,
  defaultValue,
  descriptionClassName,
  disabled,
  duration,
  error,
  errorClassName,
  fullWidth,
  helperText,
  helperTextClassName,
  isRequired,
  itemClassName,
  itemLabelClassName,
  label,
  labelClassName,
  name,
  options,
  pillClassName,
  requiredClassName,
  theme,
  value,
  wrapperClassName,
  onValueChange,
}) => {
  const {
    animationDirection,
    groupRef,
    id,
    selected,
    handleKeyDown,
    handleSelect,
  } = useButtonGroup({
    defaultValue,
    disabled: disabled ?? undefined,
    options,
    value,
    onValueChange,
  });

  return (
    <div
      className={cn(
        buttonGroupWrapperVariants({ fullWidth }),
        wrapperClassName,
      )}
      data-theme={theme}
    >
      {label && (
        <ButtonGroupLabel
          className={labelClassName}
          htmlFor={id}
          isRequired={isRequired}
          label={label}
          requiredClassName={requiredClassName}
        />
      )}

      <div
        ref={groupRef}
        role="radiogroup"
        aria-labelledby={label ? id : undefined}
        className={cn(buttonGroupVariants({ fullWidth, disabled }), className)}
      >
        {options.map((option, index) => {
          const isSelected = selected === option.value;
          const isDisabled = disabled || option.disabled;
          const hasDescription = !!option.description;

          return (
            <ButtonGroupItem
              key={option.value}
              animationDirection={animationDirection}
              className={itemClassName}
              contentClassName={contentClassName}
              descriptionClassName={descriptionClassName}
              duration={duration}
              hasDescription={hasDescription}
              index={index}
              isDisabled={!!isDisabled}
              isSelected={isSelected}
              labelClassName={itemLabelClassName}
              layoutId={`${id}-pill`}
              option={option}
              pillClassName={pillClassName}
              value={option.value}
              onKeyDown={handleKeyDown}
              onSelect={handleSelect}
            />
          );
        })}
      </div>

      <input type="hidden" name={name} value={selected ?? ''} />

      <ButtonGroupMessage
        error={error}
        errorClassName={errorClassName}
        helperText={helperText}
        helperTextClassName={helperTextClassName}
      />
    </div>
  );
};

ButtonGroup.displayName = 'KonstructButtonGroup';
