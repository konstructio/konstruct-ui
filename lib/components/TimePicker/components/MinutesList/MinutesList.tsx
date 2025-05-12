import { useEffect, useRef, FC, MouseEvent, useCallback } from 'react';

import { cn } from '@/utils';

import {
  buttonVariants,
  liVariants,
  ulVariants,
} from '../../TimePicker.variants';
import { useTimePickerContext } from '../../contexts';

import { MinutesLitProps } from './MinutesList.types';

const MinutesList: FC<MinutesLitProps> = ({ minutes, scrollBehavior }) => {
  const wrapperRef = useRef<HTMLUListElement>(null);
  const minutesRef = useRef<number>(minutes);
  const { onSelectMinute } = useTimePickerContext();

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (wrapper) {
      const minutes = `0${minutesRef.current}`.slice(-2);
      const item = wrapper.querySelector(
        `[data-value="${minutes}"]`,
      ) as HTMLUListElement;

      item?.scrollIntoView({
        behavior: scrollBehavior,
        block: 'center',
      });
    }
  }, [scrollBehavior]);

  const handleSelectMinute = useCallback(
    (index: number, event: MouseEvent<HTMLButtonElement>) => {
      onSelectMinute(index);
      event.currentTarget?.blur();
    },
    [onSelectMinute],
  );

  return (
    <ul
      ref={wrapperRef}
      className={cn(ulVariants())}
      aria-label="minutes"
      role="listbox"
    >
      {Array.from({ length: 60 }, (_, index) => (
        <li
          key={index}
          className={cn(liVariants())}
          data-value={`0${index}`.slice(-2)}
          data-active={minutes === index}
          role="presentation"
        >
          <button
            type="button"
            role="option"
            className={cn(buttonVariants())}
            onClick={(event) => handleSelectMinute(index, event)}
          >
            {`0${index}`.slice(-2)}
          </button>
        </li>
      ))}
    </ul>
  );
};

MinutesList.displayName = 'MinutesList';

export { MinutesList };
