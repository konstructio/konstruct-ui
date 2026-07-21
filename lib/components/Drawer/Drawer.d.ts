import { FC } from '../../../node_modules/react';
import { BodyProps, FooterProps, HeaderProps } from './components';
import { Props } from './Drawer.types';
/**
 * A drawer/panel component that slides in from the side of the screen.
 * Supports Header, Body, and Footer sub-components, keyboard navigation (Escape to close),
 * and optional resizing.
 *
 * @example
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
 *
 * <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
 *   <Drawer.Header>Panel Title</Drawer.Header>
 *   <Drawer.Body>
 *     Panel content goes here.
 *   </Drawer.Body>
 *   <Drawer.Footer>
 *     <Button variant="secondary" onClick={() => setIsOpen(false)}>
 *       Cancel
 *     </Button>
 *     <Button onClick={handleConfirm}>Confirm</Button>
 *   </Drawer.Footer>
 * </Drawer>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-drawer--docs Storybook}
 */
declare const Drawer: FC<Props> & {
    Header: FC<HeaderProps>;
    Body: FC<BodyProps>;
    Footer: FC<FooterProps>;
};
export { Drawer };
