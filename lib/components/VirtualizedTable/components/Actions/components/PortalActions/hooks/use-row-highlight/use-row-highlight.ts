import { useEffect } from 'react';

import { Params } from './use-row-highlight.types';

export const useRowHighlight = ({ isOpen, triggerRef }: Params) => {
  useEffect(() => {
    const row = triggerRef.current?.closest('tr');

    if (!row || !isOpen) {
      return;
    }

    row.setAttribute('data-actions-open', '');

    return () => {
      row.removeAttribute('data-actions-open');
    };
  }, [isOpen, triggerRef]);
};
