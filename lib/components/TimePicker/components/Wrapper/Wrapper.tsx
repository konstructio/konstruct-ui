import { ChevronDownIcon } from 'lucide-react';
import { FC, useCallback, useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/utils';

import { useTimePickerContext } from '../../contexts';
import { timePickerVariants } from '../../TimePicker.variants';
import { WrapperList } from '../WrapperList/WrapperList';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = ({
  name,
  label,
  required,
  scrollBehavior,
  className,
  listClassName,
  listItemClassName,
  listItemButtonClassName,
}) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { format, formattedTime } = useTimePickerContext();
  const labelId = name ?? `time-${id}`;

  const handleOpen = useCallback(() => setIsOpen((status) => !status), []);

  useEffect(() => {
    const controller = new AbortController();

    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'w-max text-slate-800 text-sm flex flex-col gap-2',
        format === '12' ? 'w-[208px]' : 'w-[140px]',
      )}
    >
      {label ? (
        <label htmlFor={labelId} className="text-slate-500 font-medium">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      ) : null}

      <div className="relative">
        <button
          aria-label={labelId}
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-controls="time-options"
          className={cn(timePickerVariants({ className }))}
          data-open={isOpen}
          onClick={handleOpen}
        >
          {formattedTime}
          <ChevronDownIcon
            className="w-4 h-4 transition-all text-gray-400 data-[open=true]:rotate-180"
            data-open={isOpen}
          />
        </button>

        <WrapperList
          isOpen={isOpen}
          scrollBehavior={scrollBehavior}
          listClassName={listClassName}
          listItemClassName={listItemClassName}
          listItemButtonClassName={listItemButtonClassName}
        />
      </div>

      <input
        type="hidden"
        name={labelId}
        value={formattedTime}
        className="hidden"
      />
    </div>
  );
};
