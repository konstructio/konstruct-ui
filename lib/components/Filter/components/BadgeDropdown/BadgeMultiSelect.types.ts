import { Option } from '../../Filter.types';

export type SelectedOptions = Option & {
  isApplied?: boolean;
  isRemoved?: boolean;
};

export type Props = {
  label: string;
  options: Option[];
  position?: 'left' | 'right';
  onApply?: (selectedOptions: Option[]) => void;
  showSelectAll?: boolean;
  selectAllLabel?: string;
};
