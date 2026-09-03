import { useEffect, useRef, useState } from 'react';

import { Options } from './useCopyToClipboard.types';

const DEFAULT_RESET_DELAY = 1500;

export const useCopyToClipboard = ({
  resetDelay = DEFAULT_RESET_DELAY,
  onCopy,
  onCopyError,
}: Options = {}) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      onCopyError?.(error);

      return false;
    }

    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, resetDelay);
    onCopy?.(text);

    return true;
  };

  return { copied, copy };
};
