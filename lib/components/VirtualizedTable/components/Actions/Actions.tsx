import { RowData } from '../../VirtualizedTable.types';

import { Props } from './Actions.types';
import { InlineActions } from './components/InlineActions/InlineActions';
import { PortalActions } from './components/PortalActions/PortalActions';

export const Actions = <TData extends RowData>({
  isPortal = false,
  ...props
}: Props<TData>) => {
  if (!props.actions) {
    return null;
  }

  if (isPortal) {
    return <PortalActions {...props} />;
  }

  return <InlineActions {...props} />;
};
