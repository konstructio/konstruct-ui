import { FC } from '../../../node_modules/react';
import { BreadcrumbProps } from './Breadcrumb.types';
/**
 * A breadcrumb navigation component showing the current location in a hierarchy.
 *
 * @example
 * ```tsx
 * // Basic breadcrumb
 * <Breadcrumb
 *   steps={[
 *     { label: 'Home', to: '/' },
 *     { label: 'Settings', to: '/settings' },
 *     { label: 'Profile', isActive: true },
 *   ]}
 * />
 *
 * // With custom Link component (e.g., react-router)
 * <Breadcrumb
 *   steps={[
 *     { label: 'Dashboard', to: '/dashboard', component: Link },
 *     { label: 'Users', to: '/users', component: Link },
 *     { label: 'Edit User', isActive: true },
 *   ]}
 * />
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-breadcrumb--docs Storybook}
 */
export declare const Breadcrumb: FC<BreadcrumbProps>;
