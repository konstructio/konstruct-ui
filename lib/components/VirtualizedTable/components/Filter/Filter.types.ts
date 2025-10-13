import { MultiSelectFilter } from '../../VirtualizedTable.types';

export type OptionType = {
  id: string;
  label: string;
  variant?: 'info' | 'danger' | 'success' | 'default' | 'warning' | null;
};

export type Props = {
  placeholder: string;
  multiSelectFilter?: MultiSelectFilter[];
  showFilterInput?: boolean;
};
