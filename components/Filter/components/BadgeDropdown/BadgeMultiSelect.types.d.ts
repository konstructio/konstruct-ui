import { Option } from '../../Filter.types';
export type SelectedOptions = Option & {
    isApplied?: boolean;
    isRemoved?: boolean;
};
export type BadgeMultiSelectProps = {
    label: string;
    options: Option[];
    position?: 'left' | 'right';
    onApply?: (selectedOptions: Option[]) => void;
};
