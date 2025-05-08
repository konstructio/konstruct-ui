import { FC, useMemo } from 'react';

import { cn } from '@/utils';

import { useTimePickerContext } from '../../contexts';
import { getFormattedTime, getHours, getMinutes } from '../../utils';
import { HoursList } from '../HoursList/HoursList';
import { MeridianList } from '../MeridianList/MeridianList';
import { MinutesList } from '../MinutesList/MinutesList';

import { WrapperListProps } from './WrapperList.types';
import { wrapperVariants } from './WrapperList.variants';

export const WrapperList: FC<WrapperListProps> = ({
  isOpen,
  scrollBehavior,
}) => {
  const { time, format } = useTimePickerContext();
  const selectedHours = useMemo(() => getHours(time), [time]);
  const selectedMinutes = useMemo(() => getMinutes(time), [time]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="listbox"
      aria-activedescendant={getFormattedTime(time, format)}
      className={cn(wrapperVariants())}
    >
      <HoursList hours={selectedHours} scrollBehavior={scrollBehavior} />
      <MinutesList minutes={selectedMinutes} scrollBehavior={scrollBehavior} />
      <MeridianList />
    </div>
  );
};
