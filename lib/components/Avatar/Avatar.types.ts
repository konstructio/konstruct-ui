import { VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';

import { Theme } from '@/domain/theme';

import { avatarVariants } from './Avatar.variants';

export interface Props extends VariantProps<typeof avatarVariants> {
  /** Accessible name of the avatar, e.g. the person's name */
  alt: string;
  /** Additional CSS classes */
  className?: string;
  /** Email used to look up a Gravatar when `src` is not provided; missing avatars fall back to `fallback` */
  email?: string;
  /** Initials shown when there is no image */
  fallback?: string;
  /** Icon shown when there is neither an image nor initials */
  icon?: ReactNode;
  /** Image URL; takes precedence over `email` */
  src?: string;
  /** Theme override for this component */
  theme?: Theme;
}

export type AvatarProps = Props;
