import { FocusEvent, PointerEvent, useEffect, useRef, useState } from 'react';

import { UseStackExpansionResult } from './useStackExpansion.types';

export const useStackExpansion = (): UseStackExpansionResult => {
  const [expanded, setExpanded] = useState(false);
  const regionRef = useRef<HTMLElement>(null);

  const expand = () => {
    setExpanded(true);
  };

  const collapse = () => {
    setExpanded(false);
  };

  const handlePointerEnter = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse') {
      expand();
    }
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse') {
      collapse();
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== 'mouse') {
      expand();
    }
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

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const handleOutsidePointerDown = (event: globalThis.PointerEvent) => {
      if (!regionRef.current?.contains(event.target as Node)) {
        collapse();
      }
    };

    document.addEventListener('pointerdown', handleOutsidePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
    };
  }, [expanded]);

  return {
    expanded,
    regionRef,
    regionHandlers: {
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
      onPointerDown: handlePointerDown,
      onFocus: expand,
      onBlur: handleBlur,
    },
  };
};
