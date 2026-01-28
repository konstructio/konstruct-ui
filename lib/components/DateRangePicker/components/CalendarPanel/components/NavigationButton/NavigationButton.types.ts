export type Props = {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled?: boolean;
  isAnimating?: boolean;
  canNavigate?: boolean;
  hideWhenDisabled?: boolean;
  className?: string;
  disabledClassName?: string;
  ariaLabel: string;
  size?: 'small' | 'medium';
};
