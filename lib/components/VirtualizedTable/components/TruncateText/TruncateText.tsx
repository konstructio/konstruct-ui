import { Content, Provider, Root, Trigger } from '@radix-ui/react-tooltip';
import debounce from 'lodash/debounce';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import { Props } from './TruncateText.types';

export const TruncateText: FC<Props> = ({ getValue, value }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
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
      <p ref={textRef} className="w-full truncate">
        {text}
      </p>
    );
  }

  return (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild>
          <p ref={textRef} className="w-full truncate cursor-pointer">
            {text}
          </p>
        </Trigger>

        <Content
          side="bottom"
          align="center"
          className="animate-in fade-in-0 relative mt-1.5 overflow-visible bg-kubefirst-dark-blue-900 text-white px-3 py-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-0 after:-translate-y-full after:border-l-8 after:border-l-transparent after:border-r-8 after:border-r-transparent after:border-b-8 after:border-kubefirst-dark-blue-900"
        >
          {text}
        </Content>
      </Root>
    </Provider>
  );
};
