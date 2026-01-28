import { FC } from '../../../node_modules/react';
import { ToastProps } from './Toast.types';
/**
 * A toast notification component built on Radix UI primitives.
 * Wraps a trigger element and shows a toast when clicked.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Toast
 *   open={open}
 *   setOpen={setOpen}
 *   title="Saved"
 *   description="Your changes have been saved successfully"
 *   variant="success"
 *   duration={3000}
 * >
 *   <Button>Save Changes</Button>
 * </Toast>
 * ```
 *
 * @see {@link https://konstructio.github.io/konstruct-ui/?path=/docs/components-toast--docs Storybook}
 */
export declare const Toast: FC<ToastProps>;
