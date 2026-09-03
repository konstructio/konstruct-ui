import { FC } from 'react';

import { CheckAltIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { Typography } from '../Typography/Typography';

import { Props } from './PasswordRules.types';

/**
 * Lists password requirements and marks each one as met while the user types.
 * The list is a live region and every rule carries a screen-reader status.
 *
 * @example
 * ```tsx
 * <PasswordRules
 *   value={password}
 *   title="Your password must contain at least:"
 *   rules={[
 *     { id: 'length', label: '8 characters', test: (value) => value.length >= 8 },
 *     { id: 'number', label: 'one number', test: (value) => /\d/.test(value) },
 *   ]}
 * />
 * ```
 */
const PasswordRules: FC<Props> = ({
  className,
  metLabel = 'met',
  pendingLabel = 'pending',
  rules,
  theme,
  title,
  value,
}) => (
  <div
    aria-live="polite"
    data-theme={theme}
    className={cn('flex flex-col gap-1', className)}
  >
    {title ? (
      <Typography
        variant="body3"
        component="p"
        className="text-slate-700 dark:text-metal-200"
      >
        {title}
      </Typography>
    ) : null}

    <ul className="m-0 flex list-none flex-col gap-1 p-0">
      {rules.map((rule) => {
        const isMet = rule.test(value);

        return (
          <li
            key={rule.id}
            data-met={isMet}
            className="flex items-center gap-3"
          >
            <span className="relative inline-flex size-4 items-center justify-center">
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 inline-flex items-center justify-center leading-none text-slate-500 transition-all duration-200 ease-out dark:text-metal-400',
                  isMet ? 'scale-75 opacity-0' : 'scale-100 opacity-100',
                )}
              >
                •
              </span>
              <CheckAltIcon
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 size-4 text-green-600 transition-all duration-200 ease-out dark:text-green-400',
                  isMet ? 'scale-100 opacity-100' : 'scale-75 opacity-0',
                )}
              />
            </span>

            <Typography
              variant="body3"
              component="span"
              className="text-slate-700 dark:text-metal-200"
            >
              {rule.label}
            </Typography>
            <span className="sr-only">{isMet ? metLabel : pendingLabel}</span>
          </li>
        );
      })}
    </ul>
  </div>
);

PasswordRules.displayName = 'KonstructPasswordRules';

export { PasswordRules };
