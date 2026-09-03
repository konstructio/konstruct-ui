import { useCallback, useId, useState } from 'react';

import { sendOpenFilterEvent } from '../../../../events';

export const useFilterDropdownOpenState = () => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (open) {
        sendOpenFilterEvent(id);
      }

      setIsOpen(open);
    },
    [id],
  );

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return { id, isOpen, close, handleOpenChange };
};
