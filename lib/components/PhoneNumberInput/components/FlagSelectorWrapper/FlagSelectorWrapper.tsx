import { ChangeEvent, FC, useCallback } from 'react';

import { Input } from '@/components/Input/Input';

import { usePhoneNumberContext } from '../../contexts';
import { FlagSelectorList } from '../FlagSelectorList/FlagSelectorList';

import { Props } from './FlagSelectorWrapper.types';
import { cn } from '@/utils';

export const FlagSelectorWrapper: FC<Props> = ({
  placeholder = 'Search',
  showFlagOnSearch,
  showInputFilter,
  showNameOnSearch,
  showPlaceHolder = true,
}) => {
  const { onChangeTermOfSearch } = usePhoneNumberContext();

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeTermOfSearch(event.target.value);
  }, []);

  return (
    <div
      className={cn(
        'absolute',
        'top-full',
        'mt-1.5',
        'animate-in',
        'fade-in-0',
        'zoom-in-95',
        'w-full',
        'border',
        'border-gray-100',
        'bg-white',
        'shadow-sm',
        'py-2',
        'z-10',
        'rounded-sm',
        'dark:bg-metal-800',
        'dark:border-metal-700',
      )}
    >
      {showInputFilter && (
        <div className="px-6 py-2.5">
          <Input
            isSearch
            placeholder={showPlaceHolder ? placeholder : undefined}
            onChange={onChange}
          />
        </div>
      )}

      <FlagSelectorList
        showFlagOnSearch={showFlagOnSearch}
        showNameOnSearch={showNameOnSearch}
      />
    </div>
  );
};
