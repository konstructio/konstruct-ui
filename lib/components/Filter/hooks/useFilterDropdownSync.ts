import { useEffect } from 'react';

import { useFilterContext } from '../contexts';
import { addFilterEventListener, FilterEvent } from '../events';

import { Props } from './useFilterDropdownSync.types';

export const useFilterDropdownSync = ({ id, onClose, onReset }: Props) => {
  const { resetScope } = useFilterContext();

  useEffect(() => {
    const controller = new AbortController();

    addFilterEventListener<string>(
      FilterEvent.OPEN,
      (event) => {
        if (event.detail !== id) {
          onClose();
        }
      },
      { signal: controller.signal },
    );

    addFilterEventListener<string | null | undefined>(
      FilterEvent.RESET,
      (event) => {
        if (event.detail != null && event.detail !== resetScope) {
          return;
        }

        onReset();
      },
      { signal: controller.signal },
    );

    document.addEventListener(
      'visibilitychange',
      () => {
        if (document.hidden) {
          onClose();
        }
      },
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, [id, onClose, onReset, resetScope]);
};
