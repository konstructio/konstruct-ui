import { FC } from 'react';

const SvgComponent: FC<{ className: string; onClick: VoidFunction }> = ({
  className,
  onClick,
}) => (
  <svg
    width="7"
    height="5"
    viewBox="0 0 7 5"
    fill="currentColor"
    className={className}
    onClick={onClick}
  >
    <path
      d="M0.8225 4.99999L3.5 2.32832L6.1775 4.99999L7 4.17749L3.5 0.67749L0 4.17749L0.8225 4.99999Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
