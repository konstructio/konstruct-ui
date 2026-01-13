import { ChevronUp } from 'lucide-react';
import { FC } from 'react';

import { cn } from '@/utils';

import { usePhoneNumberContext } from '../../contexts';

export const FlagContent: FC = () => {
  const { selectedCountry, isOpenSelector, handleOpenSelector } =
    usePhoneNumberContext();

  const { flag: Flag } = selectedCountry;

  return (
    <button
      type="button"
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => handleOpenSelector(!isOpenSelector)}
    >
      <Flag />

      <ChevronUp
        className={cn(
          'transition-all',
          'duration-100',
          'data-[state=open]:rotate-0',
          'data-[state=closed]:rotate-180',
          'w-5',
          'h-5',
          'text-slate-400',
        )}
        data-state={isOpenSelector ? 'open' : 'closed'}
      />
    </button>
  );
};
