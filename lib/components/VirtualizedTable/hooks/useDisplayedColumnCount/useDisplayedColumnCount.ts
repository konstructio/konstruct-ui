import { useEffect, useState } from 'react';

const countDisplayedHeaderCells = (
  table: HTMLTableElement,
): number | undefined => {
  const leafRow = table.tHead?.rows[table.tHead.rows.length - 1];

  if (!leafRow) {
    return undefined;
  }

  const count = Array.from(leafRow.cells).reduce(
    (total, cell) =>
      getComputedStyle(cell).display === 'none' ? total : total + cell.colSpan,
    0,
  );

  return count > 0 ? count : undefined;
};

export const useDisplayedColumnCount = (): [
  (node: HTMLElement | null) => void,
  number | undefined,
] => {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [count, setCount] = useState<number>();

  useEffect(() => {
    const table = node?.closest('table');

    if (!table || typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver(() => {
      setCount(countDisplayedHeaderCells(table));
    });

    observer.observe(table);

    return () => observer.disconnect();
  }, [node]);

  return [setNode, count];
};
