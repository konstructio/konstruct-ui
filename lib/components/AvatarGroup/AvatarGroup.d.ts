import { FC } from '../../../node_modules/react';
import { Props } from './AvatarGroup.types';
/**
 * A stack of overlapping avatars that collapses the ones beyond `max` into a
 * "+N" bubble.
 *
 * @example
 * ```tsx
 * <AvatarGroup
 *   items={members.map((member) => ({ id: member.id, alt: member.name, email: member.email, fallback: member.initials }))}
 *   max={4}
 * />
 * ```
 */
declare const AvatarGroup: FC<Props>;
export { AvatarGroup };
