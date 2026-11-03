import { RefObject, useEffect, useState } from 'react';

const isLastChildWrapped = (container: HTMLElement): boolean => {
  const first = container.firstElementChild as HTMLElement | null;
  const last = container.lastElementChild as HTMLElement | null;

  if (!first || !last || first === last) {
    return false;
  }

  return last.offsetTop > first.offsetTop;
};

export const useIsFlexWrapped = (
  containerRef: RefObject<HTMLElement | null>,
): boolean => {
  const [isWrapped, setIsWrapped] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver(() => {
      setIsWrapped(isLastChildWrapped(container));
    });

    observer.observe(container);

    return () => observer.disconnect();
  }, [containerRef]);

  return isWrapped;
};
