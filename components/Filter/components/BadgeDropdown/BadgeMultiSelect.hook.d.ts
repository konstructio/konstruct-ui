import { Option } from '../../Filter.types';
import { BadgeMultiSelectProps, SelectedOptions } from './BadgeMultiSelect.types';
export declare const useBadgeMultiSelect: ({ onApply, }: Pick<BadgeMultiSelectProps, "onApply">) => {
    isOpen: boolean;
    selectedCount: SelectedOptions[];
    selectedOptions: SelectedOptions[];
    wrapperRef: import('../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    handleApplyOptions: () => void;
    handleOpen: () => void;
    handleResetOptions: () => void;
    handleSelectOption: (option: Option, checked: boolean) => void;
};
