import { FC, useState } from 'react';

import { ProfileIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { Props } from './Avatar.types';
import { avatarVariants } from './Avatar.variants';
import { useGravatarUrl } from './hooks';

const SIZE_PX = { sm: 28, md: 40, lg: 56 } as const;

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
const Avatar: FC<Props> = ({
  alt,
  className,
  email,
  fallback,
  icon,
  size = 'md',
  src,
  theme,
}) => {
  const gravatarUrl = useGravatarUrl(
    src ? undefined : email,
    SIZE_PX[size ?? 'md'] * 2,
  );
  const imageUrl = src ?? gravatarUrl;
  const [erroredUrl, setErroredUrl] = useState<string | null>(null);
  const showImage = !!imageUrl && erroredUrl !== imageUrl;

  return (
    <span
      role="img"
      aria-label={alt}
      data-theme={theme}
      className={cn(avatarVariants({ size }), className)}
    >
      {showImage ? (
        <img
          src={imageUrl}
          alt=""
          className="size-full object-cover"
          onError={() => {
            setErroredUrl(imageUrl);
          }}
        />
      ) : fallback ? (
        <span aria-hidden="true">{fallback}</span>
      ) : (
        (icon ?? <ProfileIcon aria-hidden="true" className="size-1/2" />)
      )}
    </span>
  );
};

Avatar.displayName = 'KonstructAvatar';

export { Avatar };
