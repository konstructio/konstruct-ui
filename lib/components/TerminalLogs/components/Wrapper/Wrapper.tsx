import { Root } from '@radix-ui/react-tabs';
import { FC, useEffect, useRef } from 'react';

import { useTerminalLogs } from '../../contexts';
import { Body } from '../Body/Body';
import { Header } from '../Header/Header';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = ({
  className,
  theme,
  handleMethods,
}) => {
  const terminalWrapperRef = useRef<HTMLDivElement>(null);
  const { onSetElement, onWriteLog } = useTerminalLogs();

  useEffect(() => {
    if (terminalWrapperRef.current) {
      onSetElement(terminalWrapperRef.current);
    }
  }, [onSetElement]);

  useEffect(() => {
    handleMethods?.({ onWriteLog });
  }, [handleMethods, onWriteLog]);

  return (
    <div className={className}>
      <Root defaultValue="tab-1" orientation="horizontal" asChild={true}>
        <>
          <Header theme={theme} />
          <Body theme={theme} ref={terminalWrapperRef} />
        </>
      </Root>
    </div>
  );
};
