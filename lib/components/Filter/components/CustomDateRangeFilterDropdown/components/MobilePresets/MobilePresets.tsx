import { CheckIcon, ChevronRightIcon } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/utils';

import { useCustomDateRangeFilterDropdown } from '../../contexts';

import { Props } from './MobilePresets.types';

const ROW_CLASS_NAME =
  'flex min-h-12 w-full items-center justify-between gap-4 px-4 text-left text-base text-slate-700 tap-target active:bg-slate-100 dark:text-metal-50 dark:active:bg-metal-700';

export const MobilePresets: FC<Props> = ({ onCustomRange }) => {
  const { presets, selectedPreset, onApplyPreset, onPresetChange } =
    useCustomDateRangeFilterDropdown();

  const now = new Date();

  return (
    <ul className="flex flex-col">
      {presets.map((option) => {
        const range = option.resolve(now);
        const isCustom = !range.from && !range.to;
        const isSelected = option.value === selectedPreset;

        return (
          <li
            key={option.value}
            className={cn(
              isCustom &&
                'mt-2 border-t border-slate-200 pt-2 dark:border-metal-700',
            )}
          >
            <button
              type="button"
              aria-current={isSelected || undefined}
              className={ROW_CLASS_NAME}
              onClick={() => {
                if (isCustom) {
                  onPresetChange(option.value, range);
                  onCustomRange();

                  return;
                }

                onApplyPreset(option.value, range);
              }}
            >
              {option.label}
              {isCustom ? (
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-slate-500 dark:text-metal-400"
                />
              ) : (
                isSelected && (
                  <CheckIcon
                    aria-hidden="true"
                    className="size-5 shrink-0 text-aurora-500"
                  />
                )
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
