export type UseTogetherCarouselProps = {
  displayedMonths: [Date, Date];
  animationDuration: number;
  disabled: boolean;
  canNavigatePrev: boolean;
  canNavigateNext: boolean;
  navigationMode: 'together' | 'independent';
  numberOfMonths?: 1 | 2;
  /** Width of one month in pixels; a fluid calendar passes the one it measured */
  monthWidth?: number;
  navigatePrevMonth: () => void;
  navigateNextMonth: () => void;
};
