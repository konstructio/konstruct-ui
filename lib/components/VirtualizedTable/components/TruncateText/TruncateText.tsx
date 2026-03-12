import debounce from 'lodash/debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Tooltip } from '@/components/Tooltip/Tooltip';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { Props } from './TruncateText.types';

export const TruncateText = <TData,>({
  getValue,
  value,
  textClassName,
  side = 'bottom',
  sideOffset,
  bgClassName,
  arrowClassName,
  className,
  delayDuration = 0,
}: Props<TData>) => {
  const textRef = useRef<
    HTMLParagraphElement & HTMLHeadingElement & HTMLLabelElement
  >(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const text = value ?? getValue<string>().toLocaleLowerCase();

  const handleResize = useCallback(() => {
    const component = textRef.current;

    if (component) {
      setIsTruncated(component.scrollWidth > component.clientWidth);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    const debouncedResize = debounce(handleResize, 300);

    window.addEventListener('resize', debouncedResize, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
      debouncedResize.cancel();
    };
  }, [handleResize]);

  useEffect(() => {
    handleResize();
  }, [handleResize]);

  if (!isTruncated) {
    return (
      <Typography
        ref={textRef}
        component="p"
        className={cn('w-full truncate', textClassName)}
      >
        {text}
      </Typography>
    );
  }

  return (
    <Tooltip
      content={text}
      side={side}
      sideOffset={sideOffset}
      bgClassName={bgClassName}
      arrowClassName={arrowClassName}
      className={className}
      delayDuration={delayDuration}
    >
      <Typography
        ref={textRef}
        component="p"
        className={cn('w-full truncate cursor-pointer', textClassName)}
      >
        {text}
      </Typography>
    </Tooltip>
  );
};
