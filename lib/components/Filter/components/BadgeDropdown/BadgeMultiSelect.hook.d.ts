import { Option } from '../../Filter.types';
import { BadgeMultiSelectProps, SelectedOptions } from './BadgeMultiSelect.types';
export declare const useBadgeMultiSelect: ({ onApply, options, }: Pick<BadgeMultiSelectProps, "onApply" | "options">) => {
    isOpen: boolean;
    isAllSelected: boolean;
    selectedCount: SelectedOptions[];
    selectedOptions: SelectedOptions[];
    handleApplyOptions: () => void;
    handleOpenChange: (open: boolean) => void;
    handleResetOptions: () => void;
    handleSelectAll: (allOptions: Option[], checked: boolean) => void;
    handleSelectOption: (option: Option, checked: boolean) => void;
};
