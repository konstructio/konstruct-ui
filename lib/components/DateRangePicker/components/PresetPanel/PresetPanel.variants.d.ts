/**
 * The column runs flush to the picker's edge and is set apart by a hairline, not
 * by a fill — it shares the surface behind it. Its own padding stands in for the
 * padding the picker no longer applies.
 */
export declare const presetPanelVariants: (props?: ({
    divided?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/**
 * The title sits on the same left edge as the option labels below it, so its
 * inset has to match the padding an option row applies on top of the panel's.
 */
export declare const presetTitleVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
/**
 * A row reads as a list item rather than a radio: the control itself is hidden
 * and selection shows as a trailing check, so the whole row is the hit target
 * and carries the hover fill.
 *
 * `[&>div]:flex-1` grows the wrapper Radio puts around its label, which is what
 * lets the trailing icon sit against the right edge.
 */
export declare const presetOptionVariants: (props?: ({
    disabled?: boolean | null | undefined;
    active?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export declare const presetChevronVariants: (props?: ({
    expanded?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
/** Lays the label out as text on the left and its trailing icon on the right. */
export declare const presetOptionLabelVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
/**
 * The rule above a trailing manual-selection entry ('Custom range').
 *
 * It is drawn as a pseudo-element rather than a border so it can run full-bleed
 * across the panel — the insets cancel the panel's `px-2.5` — while the row's own
 * hover fill stays inset. It sits in the row's top margin so the fill never
 * touches it. Keep the two in step.
 */
export declare const presetSeparatorVariants: (props?: import('class-variance-authority/types').ClassProp | undefined) => string;
