import { FC } from 'react';

import { cn } from '@/utils';

import { Avatar } from '../Avatar/Avatar';
import { avatarVariants } from '../Avatar/Avatar.variants';

import { Props } from './AvatarGroup.types';

const DEFAULT_MAX = 5;

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
const AvatarGroup: FC<Props> = ({
  className,
  emptyLabel = 'No members yet',
  items,
  label = (count) => `${count} members`,
  max = DEFAULT_MAX,
  overflowLabel = (hiddenCount) => `${hiddenCount} more members`,
  size = 'sm',
  theme,
}) => {
  if (items.length === 0) {
    return (
      <span
        role="img"
        aria-label={emptyLabel}
        data-theme={theme}
        className={cn(
          avatarVariants({ size }),
          'border border-dashed border-metal-500 bg-metal-300/15 text-metal-400',
          className,
        )}
      >
        ?
      </span>
    );
  }

  const visible = items.slice(0, max);
  const hiddenCount = items.length - visible.length;

  return (
    <ul
      aria-label={label(items.length)}
      data-theme={theme}
      className={cn('flex list-none items-center p-0', className)}
    >
      {visible.map((item, index) => (
        <li
          key={item.id}
          className={cn('relative flex', index > 0 && '-ml-2')}
          style={{ zIndex: visible.length - index }}
        >
          <Avatar
            {...item}
            size={size}
            className={cn(
              'border-2 border-white dark:border-metal-800',
              item.className,
            )}
          />
        </li>
      ))}

      {hiddenCount > 0 ? (
        <li className="relative -ml-2 flex">
          <span
            role="img"
            aria-label={overflowLabel(hiddenCount)}
            className={cn(
              avatarVariants({ size }),
              'border-2 border-white bg-gray-200 text-gray-600 dark:border-metal-800 dark:bg-metal-700 dark:text-metal-300',
            )}
          >
            +{hiddenCount}
          </span>
        </li>
      ) : null}
    </ul>
  );
};

AvatarGroup.displayName = 'KonstructAvatarGroup';

export { AvatarGroup };
