import { List, Trigger } from '@radix-ui/react-tabs';
import { ChangeEvent, FC, useCallback } from 'react';
import { Copy, HelpCircle, Maximize2, Search } from 'react-feather';

import { Input } from '@/components';
import { useTheme } from '@/contexts';
import { cn } from '@/utils';

import { useTerminalLogs } from '../../contexts';

import {
  actionButtonsWrapperVariants,
  inputVariants,
  tabTriggerVariants,
  wrapperInputVariants,
  wrapperVariants,
} from './Header.styles';
import { HeaderProps } from './Header.types';

export const Header: FC<HeaderProps> = ({ theme }) => {
  const { onChangeSearchValue, onFitTerminal } = useTerminalLogs();
  const { theme: contexTheme } = useTheme();
  const inheritTheme = theme ?? contexTheme;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChangeSearchValue(event.target.value);
    },
    [onChangeSearchValue],
  );

  const handleFix = () => onFitTerminal();

  return (
    <div className={cn(wrapperVariants({ theme: inheritTheme }))}>
      <List className="flex gap-3 items-start" asChild={true}>
        <>
          <Trigger
            value="tab-1"
            className={cn(tabTriggerVariants({ theme: inheritTheme }))}
          >
            Consice
          </Trigger>

          <Trigger
            value="tab-2"
            className={cn(tabTriggerVariants({ theme: inheritTheme }))}
            onClick={handleFix}
          >
            Verbose
          </Trigger>
        </>
      </List>

      <div className={cn(wrapperInputVariants({ theme: inheritTheme }))}>
        <Search className="w-4 h-4" />
        <Input
          placeholder="Search logs"
          className={cn(inputVariants({ theme: inheritTheme }))}
          autoComplete="off"
          onChange={handleChange}
        />
      </div>

      <div
        className={cn(actionButtonsWrapperVariants({ theme: inheritTheme }))}
      >
        <HelpCircle className="w-4 h-4" role="button" />
        <Copy className="w-4 h-4" role="button" />
        <Maximize2 className="w-4 h-4" role="button" />
      </div>
    </div>
  );
};
