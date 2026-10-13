import { useEffect, useState } from 'react';

import { CopyButton } from '@/components/CopyButton/CopyButton';
import { Tooltip } from '@/components/Tooltip/Tooltip';
import { Typography } from '@/components/Typography/Typography';
import { cn } from '@/utils';

import { RowData } from '../../VirtualizedTable.types';

import { Props } from './TruncateText.types';

export const TruncateText = <TData extends RowData = RowData>({
  getValue,
  value,
  textClassName,
  variant,
  component = 'p',
  copyable = false,
  copyButtonProps,
  side = 'bottom',
  sideOffset,
  bgClassName,
  arrowClassName,
  className,
  delayDuration = 0,
}: Props<TData>) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [isTruncated, setIsTruncated] = useState(false);
  const text = value ?? getValue?.<string>().toLocaleLowerCase() ?? '';

  useEffect(() => {
    if (!element) {
      return;
    }

    const measure = () => {
      setIsTruncated(element.scrollWidth > element.clientWidth);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, text]);

  const content = (
    <Typography
      ref={setElement}
      variant={variant}
      component={component}
      className={cn(
        'w-full truncate',
        isTruncated && 'cursor-pointer',
        textClassName,
      )}
    >
      {text}
    </Typography>
  );

  const truncatedContent = isTruncated ? (
    <Tooltip
      content={text}
      side={side}
      sideOffset={sideOffset}
      bgClassName={bgClassName}
      arrowClassName={arrowClassName}
      className={className}
      delayDuration={delayDuration}
    >
      {content}
    </Tooltip>
  ) : (
    content
  );

  if (!copyable) {
    return truncatedContent;
  }

  return (
    <div className="flex min-w-0 items-center gap-2">
      <span className="min-w-0 flex-1">{truncatedContent}</span>
      <CopyButton text={text} label={text} {...copyButtonProps} />
    </div>
  );
};
