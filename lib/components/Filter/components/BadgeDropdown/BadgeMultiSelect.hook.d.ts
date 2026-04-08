import { Option } from '../../../../../components/Filter/Filter.types';
import { BadgeMultiSelectProps, SelectedOptions } from './BadgeMultiSelect.types';
export declare const useBadgeMultiSelect: ({ onApply, options, }: Pick<BadgeMultiSelectProps, "onApply" | "options">) => {
    isOpen: boolean;
    isAllSelected: boolean;
    selectedCount: SelectedOptions[];
    selectedOptions: SelectedOptions[];
    wrapperRef: import('../../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    handleApplyOptions: () => void;
    handleOpen: () => void;
    handleResetOptions: () => void;
    handleSelectAll: (allOptions: Option[], checked: boolean) => void;
    handleSelectOption: (option: Option, checked: boolean) => void;
};
