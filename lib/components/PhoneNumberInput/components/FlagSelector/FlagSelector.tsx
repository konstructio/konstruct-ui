import { useVirtualizer } from '@tanstack/react-virtual';
import * as flags from 'country-flag-icons/react/3x2';
import { PhoneNumberUtil, RegionCode } from 'google-libphonenumber';
import isoCountries from 'i18n-iso-countries';
import { ComponentRef, FC, useCallback, useRef } from 'react';

import { Input } from '@/components/Input/Input';
import { Typography } from '@/components/Typography/Typography';

import { usePhoneNumberContext } from '../../contexts';
import { TruncateText } from '../TruncateText/TruncateText';

import { Props } from './FlagSelector.types';

const phoneUtil = PhoneNumberUtil.getInstance();

export const FlagSelector: FC<Props> = ({
  showNameOnSearch,
  showFlagOnSearch,
  showInputFilter,
}) => {
  const { countries, isOpenSelector } = usePhoneNumberContext();
  const parentRef = useRef<ComponentRef<'div'>>(null);

  const rowVirtualizer = useVirtualizer({
    count: countries.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
  });

  const handleGetFlagByCountryCode = useCallback((code: string) => {
    const Flag = flags[code as RegionCode];

    if (!Flag) {
      return null;
    }

    return <Flag className="w-5 h-5 flex items-center" />;
  }, []);

  if (!isOpenSelector) {
    return null;
  }

  return (
    <div className="absolute top-full mt-1.5 animate-in fade-in-0 zoom-in-95 w-full border border-transparent bg-white shadow-sm py-2 z-10 rounded-sm">
      {showInputFilter && (
        <div className="px-6 py-2.5">
          <Input isSearch placeholder="Search" />
        </div>
      )}

      <div
        ref={parentRef}
        className="overflow-y-auto max-h-60 snap-y snap-mandatory mt-1.5"
      >
        <ul
          className="relative"
          style={{ height: rowVirtualizer.getTotalSize() }}
        >
          {rowVirtualizer.getVirtualItems().map((virtual) => {
            const countryCode = countries[virtual.index];

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
                  className="w-full h-full cursor-pointer px-6 hover:bg-gray-50 transition-colors duration-150"
                  onClick={() => {}}
                >
                  <Typography
                    variant="body2"
                    className="flex gap-2 items-center text-left text-slate-800"
                  >
                    {showFlagOnSearch &&
                      handleGetFlagByCountryCode(countryCode)}

                    {showNameOnSearch && (
                      <TruncateText
                        text={isoCountries.getName(countryCode, 'en')!}
                        prefix={`+${phoneUtil.getCountryCodeForRegion(countryCode)}`}
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
  );
};
