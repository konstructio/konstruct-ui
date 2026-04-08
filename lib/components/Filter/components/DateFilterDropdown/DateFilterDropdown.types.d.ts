export type DateFilterDropdownProps = {
    label: string;
    position?: 'left' | 'right';
    onApply?: (date?: Date) => void;
    /** Country code for locale formatting (default: 'US') */
    countryCode?: string;
};
