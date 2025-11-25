import { Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Props } from './TruncateText.types';

export const TruncateText: FC<Props> = ({ text, prefix }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

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
  }, [text, handleResize]);

  if (!isTruncated) {
    return (
      <span ref={textRef} className="w-full truncate">
        {text}
        <span className="text-slate-500">{prefix}</span>
      </span>
    );
  }

  return (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild>
          <span ref={textRef} className="w-full truncate cursor-pointer">
            {text} {prefix}
          </span>
        </Trigger>

        <Content
          side="top"
          align="center"
          className="animate-in fade-in-0 relative mb-1.5 overflow-visible bg-kubefirst-dark-blue-900 text-white px-3 py-2 rounded-lg shadow-sm after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:translate-y-full after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-t-8 after:border-kubefirst-dark-blue-900 z-999"
        >
          {text} {prefix}
        </Content>
      </Root>
    </Provider>
  );
};
