import { FC, useEffect, useRef, useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { TooltipProps } from '../Tooltip.types';
import { twMerge } from 'tailwind-merge';

export const Wrapper: FC<TooltipProps> = ({ children, content }) => {
  const componentRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef(null);
  const [isVisibile, setIsVisible] = useState(false);

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

  return (
    <div className="w-full">
      <div className="relative w-max">
        <Slot ref={componentRef} className="cursor-pointer">
          {children}
        </Slot>

        <div
          ref={tooltipRef}
          className={twMerge(
            'absolute top-1/2 ml-1 left-[100%] -translate-y-2/4 w-max bg-red-500 p-2.5 rounded-lg shadow-md hidden',
            isVisibile ? 'inline-block' : '',
          )}
        >
          <span className="absolute w-0 h-0 right-full top-1/2 -translate-y-2/4 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4 border-r-red-500" />
          <Slot>{content}</Slot>
        </div>
      </div>
    </div>
  );
};
