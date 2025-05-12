import { FC, useMemo } from 'react';

import { cn } from '@/utils';

import { useTimePickerContext } from '../../contexts';
import { getHours, getMinutes } from '../../utils';
import { HoursList } from '../HoursList/HoursList';
import { MeridianList } from '../MeridianList/MeridianList';
import { MinutesList } from '../MinutesList/MinutesList';

import { WrapperListProps } from './WrapperList.types';
import { wrapperVariants } from './WrapperList.variants';

export const WrapperList: FC<WrapperListProps> = ({
  isOpen,
  scrollBehavior,
  listClassName,
  listItemClassName,
  listItemButtonClassName,
}) => {
  const { time } = useTimePickerContext();
  const selectedHours = useMemo(() => getHours(time), [time]);
  const selectedMinutes = useMemo(() => getMinutes(time), [time]);

  if (!isOpen) {
    return null;
  }

  return (
    <div role="group" className={cn(wrapperVariants())}>
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
      />
      <MeridianList
        listClassName={listClassName}
        listItemClassName={listItemClassName}
        listItemButtonClassName={listItemButtonClassName}
      />
    </div>
  );
};
