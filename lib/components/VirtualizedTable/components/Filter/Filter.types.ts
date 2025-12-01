import { ButtonProps } from '@/components/Button/Button.types';
import { MultiSelectFilter } from '../../VirtualizedTable.types';
export type { Option } from '@/components/Filter/Filter.types';

export type FilterAction = {
  label: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
};

export type Props = {
  actions?: FilterAction[];
  multiSelectFilter?: MultiSelectFilter[];
  placeholder: string;
  showFilterInput?: boolean;
  showResetButton?: boolean;
  resetButtonClassName?: string;
};
