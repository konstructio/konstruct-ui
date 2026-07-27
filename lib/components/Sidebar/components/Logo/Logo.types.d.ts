import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from '../../../../../node_modules/react';
import { logoVariants } from './Logo.variants';
export interface Props extends PropsWithChildren, VariantProps<typeof logoVariants> {
    className?: string;
    /**
     * When true, keeps the logo content visible while the sidebar is in
     * `collapsed` mode. By default the logo content hides in collapsed mode,
     * while a `Sidebar.CollapseTrigger` placed as a direct child of
     * `Sidebar.Logo` stays visible so the user can still expand the sidebar.
     * Defaults to `false`.
     */
    showOnCollapse?: boolean;
}
/** @deprecated Use Props instead */
export type LogoProps = Props;
