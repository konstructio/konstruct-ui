export type UseIndependentCarouselProps = {
    displayedMonths: [Date, Date];
    animationDuration: number;
    navigationMode: 'together' | 'independent';
};
export declare const useIndependentCarousel: ({ displayedMonths, animationDuration, navigationMode, }: UseIndependentCarouselProps) => {
    leftInternalMonth: Date;
    leftPrevMonth: Date;
    leftNextMonth: Date;
    leftCarouselRef: import('../../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    isLeftAnimating: boolean;
    enableLeftTransition: boolean;
    leftAnimateTransform: boolean;
    getLeftTransform: () => string;
    rightInternalMonth: Date;
    rightPrevMonth: Date;
    rightNextMonth: Date;
    rightCarouselRef: import('../../../../../../node_modules/react').RefObject<HTMLDivElement | null>;
    isRightAnimating: boolean;
    enableRightTransition: boolean;
    rightAnimateTransform: boolean;
    getRightTransform: () => string;
    calendarHeight: number;
};
