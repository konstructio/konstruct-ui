import { Matcher } from 'react-day-picker';
import { CalendarPanelClassNames } from '../../CalendarPanel.types';
import { UseTogetherCarouselProps } from '../../hooks';
export type Props = {
    className?: string;
    calendarWidth?: number;
    /** The month spans the container's width instead of its fixed one */
    fluid?: boolean;
    ariaLabelCalendar?: string;
    ariaLabelPrevMonth?: string;
    ariaLabelNextMonth?: string;
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
    canNavigatePrev: boolean;
    canNavigateNext: boolean;
    carouselProps: UseTogetherCarouselProps;
};
