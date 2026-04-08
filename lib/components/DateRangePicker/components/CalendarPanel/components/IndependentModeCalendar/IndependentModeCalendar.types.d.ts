import { Matcher } from 'react-day-picker';
import { CalendarPanelClassNames } from '../../CalendarPanel.types';
import { UseIndependentCarouselProps } from '../../hooks';
export type Props = {
    className?: string;
    calendarWidth?: number;
    ariaLabelCalendar?: string;
    ariaLabelPrevMonthStart?: string;
    ariaLabelNextMonthStart?: string;
    ariaLabelPrevMonthEnd?: string;
    ariaLabelNextMonthEnd?: string;
    classNames?: CalendarPanelClassNames;
    range: {
        from?: Date;
        to?: Date;
    };
    onRangeSelect: (range: {
        from?: Date;
        to?: Date;
    }) => void;
    disabled?: boolean;
    disabledMatcher?: Matcher | Matcher[];
    showOutsideDays?: boolean;
    hideDisabledNavigation?: boolean;
    canLeftNavigatePrev: boolean;
    canLeftNavigateNext: boolean;
    canRightNavigatePrev: boolean;
    canRightNavigateNext: boolean;
    navigateLeftPrev: () => void;
    navigateLeftNext: () => void;
    navigateRightPrev: () => void;
    navigateRightNext: () => void;
    carouselProps: UseIndependentCarouselProps;
};
