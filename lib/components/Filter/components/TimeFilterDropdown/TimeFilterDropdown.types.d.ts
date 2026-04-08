export type TimePreset = {
    label: string;
    value: Date;
};
export type TimeFilterDropdownProps = {
    label: string;
    position?: 'left' | 'right';
    format?: '12' | '24';
    presets?: TimePreset[];
    /** Whether to show the TimePicker for custom time selection (default: true) */
    showTimePicker?: boolean;
    onApply?: (time?: Date) => void;
};
