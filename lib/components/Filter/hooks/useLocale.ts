import { useEffect, useState } from 'react';

import { getLocale, loadLocaleMap } from '../utils';

export const useLocale = (countryCode?: string): string => {
  const [, setIsLocaleMapLoaded] = useState(false);

  useEffect(() => {
    let isActive = true;

    loadLocaleMap().then(() => {
      if (isActive) {
        setIsLocaleMapLoaded(true);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  return getLocale(countryCode);
};
