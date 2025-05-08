import { cn } from '@/utils';
import { buttonVariants, liVariants } from '../../TimePicker.variants';
import { useMemo, MouseEvent, useCallback } from 'react';
import { useTimePickerContext } from '../../contexts';

const MeridianList = () => {
  const { time, format, onSelectAM, onSelectPM } = useTimePickerContext();

  const isAM = useMemo(() => {
    if (format === '12') {
      return time.getHours() <= 12;
    }

    return time.getHours() >= 12;
  }, [format, time]);

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>, callback: () => void) => {
      event.currentTarget?.blur();
      callback();
    },
    [],
  );

  if (format === '24') {
    return null;
  }

  return (
    <ul className="flex items-center justify-center flex-col">
      <li className={cn(liVariants(), isAM && 'bg-blue-600 text-white')}>
        <button
          type="button"
          className={cn(buttonVariants())}
          onClick={(event) => handleClick(event, onSelectAM)}
        >
          AM
        </button>
      </li>

      <li className={cn(liVariants(), !isAM && 'bg-blue-600 text-white')}>
        <button
          type="button"
          className={cn(buttonVariants())}
          onClick={(event) => handleClick(event, onSelectPM)}
        >
          PM
        </button>
      </li>
    </ul>
  );
};

MeridianList.displayName = 'MeridianList';
export { MeridianList };
