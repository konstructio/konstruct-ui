import { ChevronDownIcon } from 'lucide-react';
import { FC, useCallback, useEffect, useId, useRef, useState } from 'react';

import { cn } from '@/utils';

import { useTimePickerContext } from '../../contexts';
import { WrapperList } from '../WrapperList/WrapperList';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = ({ scrollBehavior }) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { format, formattedTime } = useTimePickerContext();

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
        'relative w-max text-slate-800',
        format === '12' ? 'w-[208px]' : 'w-[140px]',
      )}
    >
      <button
        aria-labelledby="time-label"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-controls="time-options"
        className="border rounded p-[0.625rem] w-full flex items-center justify-between border-gray-300 cursor-pointer data-[open=true]:border-blue-primary"
        data-open={isOpen}
        onClick={handleOpen}
      >
        {formattedTime}
        <ChevronDownIcon
          className="w-4 h-4 transition-all text-gray-400 data-[open=true]:rotate-180"
          data-open={isOpen}
        />
      </button>

      <input
        type="hidden"
        name={name ?? `time-${id}`}
        value={formattedTime}
        className="hidden"
      />

      <WrapperList isOpen={isOpen} scrollBehavior={scrollBehavior} />
    </div>
  );
};
