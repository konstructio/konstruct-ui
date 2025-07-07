import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { cn } from '@/utils';

import { Button } from '../Button/Button';

import { Props, Option } from './DropdownButton.types';

export const DropdownButton: FC<Props> = ({
  buttonClassName,
  className,
  itemClassName,
  listClassName,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => setIsOpen((prev) => !prev), []);
  const handleOptionClick = useCallback((onClick?: Option['onClick']) => {
    setIsOpen(false);
    onClick?.();
  }, []);

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
    <div ref={wrapperRef} className={cn('relative w-full', className)}>
      <Button
        ref={buttonRef}
        className={cn(
          'flex gap-2 items-center justify-between w-full',
          buttonClassName,
        )}
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
        <ul
          className={cn(
            'absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-xs animate-in fade-in-0 py-2',
            listClassName,
          )}
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={cn(
                'hover:bg-gray-50 px-6 py-1.5 hover:cursor-pointer',
                itemClassName,
              )}
              onClick={() => handleOptionClick(option.onClick)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
