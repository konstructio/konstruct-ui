import {
  ActionFilterConfig,
  FilterConfig,
  MultiSelectFilter,
} from '../../VirtualizedTable.types';
export type { Option } from '@/components/Filter/Filter.types';

/** @deprecated Use `ActionFilterConfig` with `type: 'action'` in the `filters` array instead */
export type FilterAction = ActionFilterConfig;

export type Props = {
  filters?: FilterConfig[];
  /** @deprecated Use `filters` instead */
  multiSelectFilter?: MultiSelectFilter[];
  /** @deprecated Use `ActionFilterConfig` items in `filters` instead */
  actions?: FilterAction[];
  placeholder: string;
  showFilterInput?: boolean;
  showResetButton?: boolean;
  resetButtonClassName?: string;
};
