import * as flags from 'country-flag-icons/react/3x2';
import { RegionCode } from 'google-libphonenumber';
import { ChevronUp } from 'lucide-react';
import { FC, useCallback } from 'react';

import { usePhoneNumberContext } from '../../contexts';

export const FlagContent: FC = () => {
  const { selectedCountry, isOpenSelector, handleOpenSelector } =
    usePhoneNumberContext();

  const handleGetFlagByCountryCode = useCallback((code: string) => {
    const Flag = flags[code as RegionCode];

    if (!Flag) {
      return null;
    }

    return <Flag className="w-5 h-5" />;
  }, []);

  return (
    <button
      type="button"
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => handleOpenSelector(!isOpenSelector)}
    >
      {handleGetFlagByCountryCode(selectedCountry)}

      <ChevronUp
        className="transition-all duration-100 data-[state=open]:rotate-0 data-[state=closed]:rotate-180 w-5 h-5 text-slate-400"
        data-state={isOpenSelector ? 'open' : 'closed'}
      />
    </button>
  );
};
