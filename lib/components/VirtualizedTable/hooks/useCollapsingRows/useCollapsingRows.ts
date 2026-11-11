import { useCallback, useState } from 'react';

const EMPTY: ReadonlySet<string> = new Set();

export const useCollapsingRows = (expandedRowIds: string[]) => {
  const [previousIds, setPreviousIds] = useState(expandedRowIds);
  const [collapsingIds, setCollapsingIds] =
    useState<ReadonlySet<string>>(EMPTY);

  if (previousIds.join('\n') !== expandedRowIds.join('\n')) {
    const closedIds = previousIds.filter((id) => !expandedRowIds.includes(id));

    setPreviousIds(expandedRowIds);
    setCollapsingIds((current) => {
      const next = new Set(
        [...current].filter((id) => !expandedRowIds.includes(id)),
      );

      closedIds.forEach((id) => next.add(id));

      return next;
    });
  }

  const handleCollapseEnd = useCallback((id: string) => {
    setCollapsingIds((current) => {
      if (!current.has(id)) {
        return current;
      }

      const next = new Set(current);

      next.delete(id);

      return next;
    });
  }, []);

  return { collapsingIds, handleCollapseEnd };
};
