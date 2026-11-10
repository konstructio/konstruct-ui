import { useMediaQuery } from '@/hooks/useMediaQuery';

import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Actions.types';
import { ACTIONS_SHEET_QUERY } from './constants';
import { InlineActions } from './components/InlineActions/InlineActions';
import { PortalActions } from './components/PortalActions/PortalActions';
import { SheetActions } from './components/SheetActions/SheetActions';

export const Actions = <TData extends RowData>({
  isPortal = false,
  mobileSheet = false,
  ...props
}: Props<TData>) => {
  const isPhone = useMediaQuery(ACTIONS_SHEET_QUERY);

  if (!props.actions) {
    return null;
  }

  if (mobileSheet && isPhone) {
    return <SheetActions {...props} />;
  }

  if (isPortal) {
    return <PortalActions {...props} />;
  }

  return <InlineActions {...props} />;
};
