import { ComponentRef, FC, forwardRef } from 'react';

import { cn } from '@/utils';

import { Wrapper } from './components';
import { SelectProvider } from './contexts';
import { SelectProps } from './Select.types';

/**
 * A dropdown select component with search, icons, and infinite scroll support.
 * Also exported as `Dropdown` for convenience.
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'uk', label: 'United Kingdom' },
 *   ]}
 *   value={selected}
 *   onChange={(e) => setSelected(e.target.value)}
 * />
 *
 * // Searchable with custom icons
 * <Select
 *   label="Select region"
 *   options={regions.map(r => ({
 *     value: r.id,
 *     label: r.name,
 *     leftIcon: <RegionIcon />,
 *     subLabel: r.description,
 *   }))}
 *   searchable
 *   highlightSearch
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-select--docs Storybook}
 */
export const Select: FC<SelectProps> = forwardRef<
  ComponentRef<'input'>,
  SelectProps
>(
  (
    {
      error,
      errorClassName,
      helperText,
      helperTextClassName,
      highlightSearch,
      mainWrapperClassName,
      name,
      value,
      options,
      onChange,
      onBlur,
      ...delegated
    },
    ref,
  ) => (
    <SelectProvider
      highlightSearch={highlightSearch}
      name={name}
      value={value}
      options={options}
      onBlur={onBlur}
      onChange={onChange}
    >
      <div className={cn('relative w-full', mainWrapperClassName)}>
        <Wrapper
          error={error}
          name={name}
          ref={ref}
          onBlur={onBlur}
          {...delegated}
        />

        {error ? (
          <span className={cn('text-xs text-red-700', errorClassName)}>
            {error}
          </span>
        ) : null}

        {!error && helperText ? (
          <span className={cn('text-xs text-metal-600', helperTextClassName)}>
            {helperText}
          </span>
        ) : null}
      </div>
    </SelectProvider>
  ),
);
