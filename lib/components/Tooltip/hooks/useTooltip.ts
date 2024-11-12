import { useEffect, useRef, useState } from 'react';

export const useTooltip = () => {
  const componentRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    componentRef.current?.addEventListener(
      'mouseenter',
      () => setIsVisible(true),
      { signal: controller.signal },
    );

    componentRef.current?.addEventListener(
      'mouseleave',
      () => setIsVisible(false),
      { signal: controller.signal },
    );

    return () => {
      controller.abort();
    };
  }, []);

  return {
    isVisible,
    componentRef,
  };
};
