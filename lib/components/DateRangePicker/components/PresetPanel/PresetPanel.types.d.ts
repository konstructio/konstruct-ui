export type PresetLabels = {
    /** Label for 'Today' preset (default: 'Today') */
    today?: string;
    /** Label for 'Current month' preset (default: 'Current month') */
    currentMonth?: string;
    /** Label for 'Custom' preset (default: 'Custom') */
    custom?: string;
    /** Label for 'Last 7 days' preset (default: 'Last 7 days') */
    last7Days?: string;
    /** Label for 'Last 2 weeks' preset (default: 'Last 2 weeks') */
    last2Weeks?: string;
};
export type PresetPanelClassNames = {
    /** Root container of the preset panel */
    root?: string;
    /** Title text */
    title?: string;
    /** RadioGroup wrapper */
    radioGroup?: string;
};
export type PresetPanelProps = {
    className?: string;
    /** Title for the preset panel (default: 'Time period') */
    labelTimePeriod?: string;
    /** Aria label for the preset panel (default: 'Time period options') */
    ariaLabelTimePeriod?: string;
    /** Custom labels for preset options */
    presetLabels?: PresetLabels;
    /** Custom class names for styling */
    classNames?: PresetPanelClassNames;
};
