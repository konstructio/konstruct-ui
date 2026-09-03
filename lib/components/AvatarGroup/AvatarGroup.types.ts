import { Props as AvatarProps } from '../Avatar/Avatar.types';

export type AvatarGroupItem = Omit<AvatarProps, 'size' | 'theme'> & {
  id: string | number;
};

export type Props = Pick<AvatarProps, 'size' | 'theme'> & {
  /** Additional CSS classes for the list */
  className?: string;
  /** Text shown when there are no items; renders a dashed placeholder */
  emptyLabel?: string;
  /** Avatars to display */
  items: AvatarGroupItem[];
  /** Accessible name of the list; receives the total count */
  label?: (count: number) => string;
  /** Maximum avatars shown before collapsing the rest into a "+N" bubble */
  max?: number;
  /** Accessible name of the "+N" bubble; receives the hidden count */
  overflowLabel?: (hiddenCount: number) => string;
};

export type AvatarGroupProps = Props;
