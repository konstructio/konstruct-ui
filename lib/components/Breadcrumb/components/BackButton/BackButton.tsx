import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { ArrowBackIcon } from '@/assets/icons/components';
import { cn } from '@/utils';

import { useBreadcrumb } from '../../hooks/useBreadcrumb';

import { Props } from './BackButton.types';
import { backButtonVariants } from './BackButton.variants';

export const BackButton: FC<Props> = ({
  icon,
  onClick,
  to,
  target,
  label = 'Go back',
  theme,
  component = 'a',
}) => {
  const { isInsideRouter } = useBreadcrumb();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (to === '#') {
      e.preventDefault();
    }

    onClick?.();
  };

  const content = (
    <span className="w-5 h-5 inline-flex items-center justify-center">
      {icon ?? <ArrowBackIcon className="w-5 h-5" />}
    </span>
  );

  const Component = component;

  if (to) {
    return isInsideRouter ? (
      <Link
        to={to}
        target={target}
        aria-label={label}
        className={cn(backButtonVariants())}
        data-theme={theme}
        onClick={handleClick}
      >
        {content}
      </Link>
    ) : (
      <Component
        href={Component === 'a' ? to : undefined}
        to={Component !== 'a' ? to : undefined}
        target={target}
        aria-label={label}
        className={cn(backButtonVariants())}
        data-theme={theme}
        onClick={handleClick}
      >
        {content}
      </Component>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      className={cn(backButtonVariants())}
      data-theme={theme}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
