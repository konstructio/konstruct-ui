import { Option } from '../../Filter.types';

export type TextMultiSelectProps = {
  label: string;
  options: Option[];
  position?: 'left' | 'right';
  onApply?: (selectedOptions: Option[]) => void;
  showSelectAll?: boolean;
  selectAllLabel?: string;
};
