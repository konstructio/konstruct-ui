import { FC } from '../../../node_modules/react';
import { Props } from './Avatar.types';
/**
 * A round avatar that shows an image, falls back to a Gravatar looked up by
 * email, then to initials, then to an icon.
 *
 * @example
 * ```tsx
 * <Avatar alt="Ada Lovelace" email="ada@example.com" fallback="AL" />
 * <Avatar alt="Ada Lovelace" src="/ada.png" size="lg" />
 * ```
 */
declare const Avatar: FC<Props>;
export { Avatar };
