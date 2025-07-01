import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { Button } from '../Button/Button';

import { Props } from './DropdownButton.types';
import { cn } from '@/utils';

export const DropdownButton: FC<Props> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);

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

    document.addEventListener('keydown', handleKeyboard, {
      signal: controller.signal,
    });

    document.addEventListener('mousedown', handleClickOutside, {
      signal: controller.signal,
    });

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          setIsOpen(false);
        }
      },
      {
        signal: controller.signal,
      },
    );

    return () => {
      controller.abort();
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <Button
        ref={buttonRef}
        className="flex gap-2 items-center justify-between w-full"
        onClick={toggleDropdown}
      >
        Download Invoice as
        <ChevronDown
          className={cn({
            'transform rotate-180': isOpen,
            'transition-transform duration-200': true,
          })}
        />
      </Button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2">
          {options.map((option, index) => (
            <li
              key={index}
              className="hover:bg-gray-50 px-6 py-1.5 hover:cursor-pointer"
              onClick={option.onClick}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
