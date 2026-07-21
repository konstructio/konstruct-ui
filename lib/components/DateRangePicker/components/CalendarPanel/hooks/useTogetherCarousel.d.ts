export type UseTogetherCarouselProps = {
    displayedMonths: [Date, Date];
    animationDuration: number;
    disabled: boolean;
    canNavigatePrev: boolean;
    canNavigateNext: boolean;
    navigationMode: 'together' | 'independent';
    navigatePrevMonth: () => void;
    navigateNextMonth: () => void;
};
export declare const useTogetherCarousel: ({ displayedMonths, animationDuration, disabled, canNavigatePrev, canNavigateNext, navigationMode, navigatePrevMonth, navigateNextMonth, }: UseTogetherCarouselProps) => {
    carouselRef: import('../../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    isAnimating: boolean;
    enableTransition: boolean;
    animateTransform: boolean;
    calendarHeight: number;
    carouselTotalWidth: number;
    monthsToRender: Date[];
    handlePrevMonth: () => void;
    handleNextMonth: () => void;
    getTransform: () => string;
};
