import { FocusEvent, useEffect, useState } from 'react';

import { UseStackExpansionResult } from './useStackExpansion.types';

export const useStackExpansion = (): UseStackExpansionResult => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  };

  const collapse = () => {
    setExpanded(false);
  };

  const handleBlur = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      collapse();
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        collapse();
      }
    };

    window.addEventListener('blur', collapse);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('blur', collapse);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return {
    expanded,
    regionHandlers: {
      onMouseEnter: expand,
      onMouseLeave: collapse,
      onFocus: expand,
      onBlur: handleBlur,
    },
  };
};
