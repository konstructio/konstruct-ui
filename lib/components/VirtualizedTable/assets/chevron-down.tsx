import { FC } from 'react';

const SvgComponent: FC<{ className: string; onClick: VoidFunction }> = ({
  className,
  onClick,
}) => (
  <svg
    width="7"
    height="5"
    viewBox="0 0 7 5"
    fill="none"
    className={className}
    onClick={onClick}
  >
    <path
      d="M0.8225 0L3.5 2.67167L6.1775 0L7 0.8225L3.5 4.3225L0 0.8225L0.8225 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
