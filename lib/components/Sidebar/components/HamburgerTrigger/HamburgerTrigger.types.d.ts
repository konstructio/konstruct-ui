export interface Props {
    isOpen: boolean;
    /** Accessible label for the navigation trigger */
    openNavigationLabel?: string;
    onClick: VoidFunction;
    className?: string;
}
/** @deprecated Use Props instead */
export type HamburgerTriggerProps = Props;
