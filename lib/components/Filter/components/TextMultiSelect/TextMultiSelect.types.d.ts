import { Option } from '../../Filter.types';
export type Props = {
    label: string;
    options: Option[];
    position?: 'left' | 'right';
    onApply?: (selectedOptions: Option[]) => void;
    showSelectAll?: boolean;
    selectAllLabel?: string;
};
