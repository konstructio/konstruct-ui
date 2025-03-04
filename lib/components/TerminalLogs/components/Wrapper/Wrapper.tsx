import { Root } from '@radix-ui/react-tabs';
import { ComponentRef, FC, useEffect, useRef } from 'react';

import { useTerminalLogs } from '../../contexts';
import { Body } from '../Body/Body';
import { Header } from '../Header/Header';

import { WrapperProps } from './Wrapper.types';

export const Wrapper: FC<WrapperProps> = ({
  className,
  theme,
  handleMethods,
}) => {
  const wrapperRef = useRef<ComponentRef<'div'>>(null);
  const terminalWrapperRef = useRef<ComponentRef<'div'>>(null);
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
    <div ref={wrapperRef} className={className}>
      <Root defaultValue="tab-1" orientation="horizontal" asChild={true}>
        <>
          <Header theme={theme} wrapperRef={wrapperRef} />
          <Body theme={theme} ref={terminalWrapperRef} />
        </>
      </Root>
    </div>
  );
};
