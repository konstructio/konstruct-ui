import { FC, SVGProps } from 'react';

export const HelpIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_229_307)">
      <path d="M10.9 18.6H13.1V16.4H10.9V18.6ZM12 1C5.928 1 1 5.928 1 12C1 18.072 5.928 23 12 23C18.072 23 23 18.072 23 12C23 5.928 18.072 1 12 1ZM12 20.8C7.149 20.8 3.2 16.851 3.2 12C3.2 7.149 7.149 3.2 12 3.2C16.851 3.2 20.8 7.149 20.8 12C20.8 16.851 16.851 20.8 12 20.8ZM12 5.4C9.569 5.4 7.6 7.369 7.6 9.8H9.8C9.8 8.59 10.79 7.6 12 7.6C13.21 7.6 14.2 8.59 14.2 9.8C14.2 12 10.9 11.725 10.9 15.3H13.1C13.1 12.825 16.4 12.55 16.4 9.8C16.4 7.369 14.431 5.4 12 5.4Z" />
    </g>
    <defs>
      <clipPath id="clip0_229_307">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
);

export default HelpIcon;
