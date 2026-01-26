import { FC, useMemo } from 'react';

import { cn } from '@/utils';

import { useTimePickerContext } from '../../contexts';
import { getHours, getMinutes } from '../../utils';
import { HoursList } from '../HoursList/HoursList';
import { MeridianList } from '../MeridianList/MeridianList';
import { MinutesList } from '../MinutesList/MinutesList';

import { WrapperListProps } from './WrapperList.types';

export const WrapperList: FC<WrapperListProps> = ({
  isOpen,
  scrollBehavior,
  listClassName,
  listItemClassName,
  listItemButtonClassName,
  listPosition = 'bottom',
  onClose,
}) => {
  const { time, format } = useTimePickerContext();
  const selectedHours = useMemo(() => getHours(time), [time]);
  const selectedMinutes = useMemo(() => getMinutes(time), [time]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="group"
      className={cn(
        'flex',
        'gap-1.5',
        'p-2',
        'rounded-md',
        'shadow',
        'w-max',
        'max-h-54',
        'absolute',
        'bg-white',
        'z-20',
        'animate-in',
        'fade-in-0',
        'zoom-in-95',
        'dark:bg-metal-800',
        'dark:border',
        'dark:border-metal-700',
        listPosition === 'top' ? 'bottom-full mb-1' : 'mt-1',
      )}
    >
      <HoursList
        hours={selectedHours}
        scrollBehavior={scrollBehavior}
        listClassName={listClassName}
        listItemClassName={listItemClassName}
        listItemButtonClassName={listItemButtonClassName}
      />

      <MinutesList
        minutes={selectedMinutes}
        scrollBehavior={scrollBehavior}
        listClassName={listClassName}
        listItemClassName={listItemClassName}
        listItemButtonClassName={listItemButtonClassName}
        onClose={format === '24' ? onClose : undefined}
      />

      <MeridianList
        listClassName={listClassName}
        listItemClassName={listItemClassName}
        listItemButtonClassName={listItemButtonClassName}
        onClose={onClose}
      />
    </div>
  );
};
