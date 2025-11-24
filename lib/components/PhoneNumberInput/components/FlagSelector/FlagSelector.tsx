import { useVirtualizer } from '@tanstack/react-virtual';
import { countries, hasFlag } from 'country-flag-icons';
import * as flags from 'country-flag-icons/react/3x2';
import { RegionCode } from 'google-libphonenumber';
import isoCountries from 'i18n-iso-countries';
import IsoCountriesLang from 'i18n-iso-countries/langs/en.json';
import { ChevronUp } from 'lucide-react';
import { ComponentRef, FC, useCallback, useRef, useState } from 'react';

import { Input } from '@/components/Input/Input';
import { Typography } from '@/components/Typography/Typography';

import { TruncateText } from '../TruncateText/TruncateText';

import { Props } from './FlagSelector.types';

isoCountries.registerLocale(IsoCountriesLang);

const countriesList = countries.filter(
  (code) => hasFlag(code) && isoCountries.getName(code, 'en'),
);

export const FlagSelector: FC<Props> = ({
  flagCode,
  showNameOnSearch,
  showFlagOnSearch,
  showInputFilter,
}) => {
  const [isOpenSelector, setIsOpenSelector] = useState(false);
  const parentRef = useRef<ComponentRef<'div'>>(null);
  const FlagComponent = flags[flagCode as RegionCode];

  const rowVirtualizer = useVirtualizer({
    count: countriesList.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 25,
  });

  const handleGetFlagByCountryCode = useCallback((code: string) => {
    const Flag = flags[code as RegionCode];

    if (!Flag) {
      return null;
    }

    return <Flag className="w-5 h-5 flex items-center" />;
  }, []);

  if (!FlagComponent) {
    return null;
  }

  return (
    <div className="relative flex items-center">
      <button
        type="button"
        className="items-center flex gap-2 cursor-pointer"
        onClick={() => {
          setIsOpenSelector(!isOpenSelector);
        }}
      >
        {handleGetFlagByCountryCode(flagCode)}

        <ChevronUp
          className="transition-all duration-100 data-[state=open]:rotate-0 data-[state=closed]:rotate-180 w-5 h-5 text-slate-400"
          data-state={isOpenSelector ? 'open' : 'closed'}
        />
      </button>

      {isOpenSelector && (
        <div className="absolute top-full mt-1.5 animate-in fade-in-0 zoom-in-95 w-[200px] border border-gray-300 bg-white shadow-sm py-3 z-10 rounded">
          {showInputFilter && (
            <div className="px-3">
              <Input isSearch placeholder="Country code..." />
            </div>
          )}

          <div>
            <div
              ref={parentRef}
              className="overflow-y-auto max-h-[300px] snap-y snap-mandatory mt-1.5"
            >
              <ul
                className="relative"
                style={{ height: rowVirtualizer.getTotalSize() }}
              >
                {rowVirtualizer.getVirtualItems().map((virtual) => {
                  const countryCode = countriesList[virtual.index];

                  return (
                    <li
                      key={virtual.key}
                      className="absolute w-full snap-start snap-always scroll-m-0 flex items-center"
                      style={{
                        top: virtual.start,
                        height: virtual.size,
                      }}
                    >
                      <button
                        className="w-full h-full cursor-pointer px-3 hover:bg-gray-50 transition-colors duration-150"
                        onClick={() => {}}
                      >
                        <Typography
                          variant="body2"
                          className="flex gap-2 items-center text-left"
                        >
                          {showFlagOnSearch &&
                            handleGetFlagByCountryCode(countryCode)}

                          {showNameOnSearch && (
                            <TruncateText
                              text={isoCountries.getName(countryCode, 'en')}
                            />
                          )}
                        </Typography>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
