import { useVirtualizer } from '@tanstack/react-virtual';
import { ComponentRef, FC, useEffect, useMemo, useRef } from 'react';

import { Typography } from '@/components/Typography/Typography';

import { usePhoneNumberContext } from '../../contexts';
import { TruncateText } from '../TruncateText/TruncateText';

import { Props } from './FlagSelectorList.types';

export const FlagSelectorList: FC<Props> = ({
  showFlagOnSearch,
  showNameOnSearch,
}) => {
  const parentRef = useRef<ComponentRef<'div'>>(null);
  const { termOfSearch, countries, handleSelectCountry } =
    usePhoneNumberContext();

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.toLocaleLowerCase().includes(termOfSearch.toLowerCase()),
    );
  }, [termOfSearch]);

  const rowVirtualizer = useVirtualizer({
    count: filteredCountries.length,
    overscan: 5,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
  });

  useEffect(() => {
    if (filteredCountries.length > 0) {
      rowVirtualizer.scrollToIndex(0);
    }
  }, [termOfSearch, rowVirtualizer]);

  if (filteredCountries.length === 0) {
    return (
      <div className="overflow-y-auto max-h-60 snap-y snap-mandatory">
        <ul className="relative">
          <li className="w-full flex items-center h-10 select-none px-6">
            <Typography
              variant="body2"
              component="span"
              className="flex gap-2 items-center text-left text-slate-800 dark:text-slate-50"
            >
              No options
            </Typography>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div
      ref={parentRef}
      className="overflow-y-auto max-h-60 snap-y snap-mandatory"
    >
      <ul
        className="relative"
        style={{ height: rowVirtualizer.getTotalSize() }}
      >
        {rowVirtualizer.getVirtualItems().map((virtual) => {
          const contry = filteredCountries[virtual.index];
          const { flag: Flag, name, prefix } = contry;

          return (
            <li
              key={virtual.key}
              className="absolute w-full snap-start snap-always scroll-m-0 flex items-center h-10"
              style={{
                top: virtual.start,
                height: virtual.size,
              }}
            >
              <button
                className="w-full h-full cursor-pointer px-6 hover:bg-gray-50 transition-colors duration-150 focus-visible:outline-0 hover:outline-gray-100 focus:bg-gray-50 dark:hover:bg-slate-700"
                onClick={() => handleSelectCountry(contry)}
              >
                <Typography
                  variant="body2"
                  component="span"
                  className="flex gap-2 items-center text-left text-slate-800 dark:text-slate-50"
                >
                  {showFlagOnSearch && <Flag />}

                  {showNameOnSearch && (
                    <TruncateText text={name} prefix={prefix} />
                  )}
                </Typography>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
