import { VariantProps } from 'class-variance-authority';
import { ReactNode } from '../../../../../../node_modules/react';
import { navigationOptionVariants } from './NavigationOption.variants';
type NavigationOption = VariantProps<typeof navigationOptionVariants> & {
    className?: string;
    isVisible?: boolean;
    isActive?: boolean;
    /**
     * Whether clicking this option should close the drawer when the Sidebar
     * is in `drawer` mode. Defaults to `true`. Has no effect in `expanded` or
     * `collapsed` modes.
     */
    closeDrawerOnClick?: boolean;
    /**
     * Tooltip content shown on hover when the Sidebar is in `collapsed` mode
     * with `expandOnHover` (rendered via Radix portal — escapes any overflow
     * clipping on the consumer side). When omitted, the component falls back
     * to the content registered by a nested `Sidebar.Label`.
     */
    tooltip?: ReactNode;
    /**
     * Tailwind classes for the tooltip background. Defaults to
     * `bg-kubefirst-dark-blue-900`.
     */
    tooltipBgClassName?: string;
    /**
     * Tailwind classes for the tooltip arrow fill. Defaults to
     * `fill-kubefirst-dark-blue-900`.
     */
    tooltipArrowClassName?: string;
    /**
     * Tailwind classes for the tooltip text color. Defaults to `text-white`.
     */
    tooltipTextClassName?: string;
    /**
     * Additional Tailwind classes merged into the tooltip content node.
     */
    tooltipClassName?: string;
};
export type Props = NavigationOption & ({
    role: 'button';
    children: ReactNode;
    onClick: VoidFunction;
} | {
    role?: never;
    children: ReactNode;
});
/** @deprecated Use Props instead */
export type NavigationOptionProps = Props;
export {};
