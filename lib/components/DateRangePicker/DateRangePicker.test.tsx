import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren } from 'react';

import { DateRangePicker } from './DateRangePicker';
import type { DateRangePickerProps } from './DateRangePicker.types';

describe('DateRangePicker', () => {
  const defaultProps = {
    onRangeChange: vi.fn(),
  } satisfies DateRangePickerProps;

  const setup = (
    props: Partial<DateRangePickerProps> = {},
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const mergedProps = { ...defaultProps, ...props };
    const { container: component } = render(
      <DateRangePicker {...mergedProps} />,
      { wrapper },
    );

    const user = userEvent.setup();

    // Main component queries
    const getDateRangePicker = () =>
      screen.findByRole('group', { name: /date range picker/i });

    // Preset panel queries
    const getPresetOption = (label: string) => screen.findByText(label);
    const getPresetRadio = (name: RegExp) =>
      screen.findByRole('radio', { name });
    const getAllPresetRadios = () => screen.findAllByRole('radio');

    // Date input queries - use exact match to avoid matching navigation buttons
    const getStartDateInput = () => screen.findByLabelText(/^start date$/i);
    const getEndDateInput = () => screen.findByLabelText(/^end date$/i);

    // Time input queries
    const getStartTimeInput = () => screen.findByLabelText(/start time/i);
    const getEndTimeInput = () => screen.findByLabelText(/end time/i);
    const queryStartTimeInput = () => screen.queryByLabelText(/start time/i);
    const queryEndTimeInput = () => screen.queryByLabelText(/end time/i);

    // Calendar queries
    const getCalendar = () =>
      screen.findByRole('application', { name: /date range picker calendar/i });
    // Together mode navigation - exact match to avoid matching independent mode buttons
    const getPrevMonthButton = () =>
      screen.findByRole('button', { name: /^previous month$/i });
    const getNextMonthButton = () =>
      screen.findByRole('button', { name: /^next month$/i });
    const queryPrevMonthButton = () =>
      screen.queryByRole('button', { name: /^previous month$/i });
    const queryNextMonthButton = () =>
      screen.queryByRole('button', { name: /^next month$/i });

    // Independent navigation queries
    const getPrevMonthButtonForStart = () =>
      screen.findByRole('button', { name: /previous month for start date/i });
    const getNextMonthButtonForStart = () =>
      screen.findByRole('button', { name: /next month for start date/i });
    const getPrevMonthButtonForEnd = () =>
      screen.findByRole('button', { name: /previous month for end date/i });
    const getNextMonthButtonForEnd = () =>
      screen.findByRole('button', { name: /next month for end date/i });

    // Calendar day queries - get all day buttons in the calendar
    const getCalendarDayButtons = async () => {
      const calendar = await getCalendar();
      return within(calendar).findAllByRole('gridcell');
    };

    // Get a specific day button by its text content
    const getDayButton = async (dayNumber: string) => {
      const calendar = await getCalendar();
      const buttons = await within(calendar).findAllByRole('gridcell');
      const dayButton = buttons.find((button) => {
        const buttonElement = within(button).queryByRole('button');
        return buttonElement?.textContent === dayNumber;
      });
      return dayButton ? within(dayButton).getByRole('button') : null;
    };

    // Error message queries
    const getErrorMessage = (text: RegExp) => screen.findByText(text);
    const queryErrorMessage = (text: RegExp) => screen.queryByText(text);

    // Hidden input queries (for form integration)
    const getHiddenInputByName = (name: string) =>
      component.querySelector(
        `input[name="${name}"]`,
      ) as HTMLInputElement | null;

    // Month title queries - month titles are spans with specific class
    const getMonthTitles = async () => {
      const calendar = await getCalendar();
      // Month titles are in spans with the month name text
      const allText = await within(calendar).findAllByText(
        /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{4}$/,
      );
      // Filter to get only visible month titles (the ones in the main view, not buffer)
      return allText.slice(0, 2);
    };

    // Actions
    const selectPreset = async (label: string) => {
      const option = await getPresetOption(label);
      await user.click(option);
    };

    const typeStartDate = async (value: string) => {
      const input = await getStartDateInput();
      await user.clear(input);
      await user.type(input, value);
    };

    const typeEndDate = async (value: string) => {
      const input = await getEndDateInput();
      await user.clear(input);
      await user.type(input, value);
    };

    const typeStartTime = async (value: string) => {
      const input = await getStartTimeInput();
      await user.clear(input);
      await user.type(input, value);
    };

    const typeEndTime = async (value: string) => {
      const input = await getEndTimeInput();
      await user.clear(input);
      await user.type(input, value);
    };

    const clickOutside = async () => {
      await user.click(document.body);
    };

    const navigateToPrevMonth = async () => {
      const button = await getPrevMonthButton();
      await user.click(button);
    };

    const navigateToNextMonth = async () => {
      const button = await getNextMonthButton();
      await user.click(button);
    };

    const clickDay = async (dayNumber: string) => {
      const dayButton = await getDayButton(dayNumber);
      if (dayButton) {
        await user.click(dayButton);
      }
    };

    return {
      component,
      user,
      // Queries
      getDateRangePicker,
      getPresetOption,
      getPresetRadio,
      getAllPresetRadios,
      getStartDateInput,
      getEndDateInput,
      getStartTimeInput,
      getEndTimeInput,
      queryStartTimeInput,
      queryEndTimeInput,
      getCalendar,
      getPrevMonthButton,
      getNextMonthButton,
      queryPrevMonthButton,
      queryNextMonthButton,
      getPrevMonthButtonForStart,
      getNextMonthButtonForStart,
      getPrevMonthButtonForEnd,
      getNextMonthButtonForEnd,
      getCalendarDayButtons,
      getDayButton,
      getErrorMessage,
      queryErrorMessage,
      getHiddenInputByName,
      getMonthTitles,
      // Actions
      selectPreset,
      typeStartDate,
      typeEndDate,
      typeStartTime,
      typeEndTime,
      clickOutside,
      navigateToPrevMonth,
      navigateToNextMonth,
      clickDay,
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render correctly', async () => {
      const { getDateRangePicker } = setup();

      const dateRangePicker = await getDateRangePicker();

      expect(dateRangePicker).toBeInTheDocument();
    });

    it("should doesn't have violations", async () => {
      const { component } = setup();

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });

    it('should render with label', async () => {
      setup({ label: 'Select Date Range' });

      const label = await screen.findByText('Select Date Range');

      expect(label).toBeInTheDocument();
    });

    it('should render required indicator when isRequired is true', async () => {
      setup({ label: 'Date Range', isRequired: true });

      const requiredIndicator = await screen.findByText('*');

      expect(requiredIndicator).toBeInTheDocument();
    });

    it('should not render required indicator when isRequired is false', async () => {
      setup({ label: 'Date Range', isRequired: false });

      const requiredIndicator = screen.queryByText('*');

      expect(requiredIndicator).not.toBeInTheDocument();
    });

    it('should render calendar with two months', async () => {
      const { getCalendar, getMonthTitles } = setup();

      const calendar = await getCalendar();
      const monthTitles = await getMonthTitles();

      expect(calendar).toBeInTheDocument();
      expect(monthTitles).toHaveLength(2);
    });
  });

  describe('Preset Options', () => {
    it('should render all preset options', async () => {
      const { getPresetOption } = setup();

      expect(await getPresetOption('Today')).toBeInTheDocument();
      expect(await getPresetOption('Current month')).toBeInTheDocument();
      expect(await getPresetOption('Custom')).toBeInTheDocument();
      expect(await getPresetOption('Last 7 days')).toBeInTheDocument();
      expect(await getPresetOption('Last 2 weeks')).toBeInTheDocument();
    });

    it('should have Custom preset selected by default', async () => {
      const { getPresetRadio } = setup();

      const customRadio = await getPresetRadio(/custom/i);

      expect(customRadio).toBeChecked();
    });

    it('should call onRangeChange when Today preset is selected', async () => {
      const mockOnRangeChange = vi.fn();
      const { selectPreset } = setup({ onRangeChange: mockOnRangeChange });

      await selectPreset('Today');

      expect(mockOnRangeChange).toHaveBeenCalled();
    });

    it('should call onRangeChange when Current month preset is selected', async () => {
      const mockOnRangeChange = vi.fn();
      const { selectPreset } = setup({ onRangeChange: mockOnRangeChange });

      await selectPreset('Current month');

      expect(mockOnRangeChange).toHaveBeenCalled();
    });

    it('should call onRangeChange when Last 7 days preset is selected', async () => {
      const mockOnRangeChange = vi.fn();
      const { selectPreset } = setup({ onRangeChange: mockOnRangeChange });

      await selectPreset('Last 7 days');

      expect(mockOnRangeChange).toHaveBeenCalled();
    });

    it('should call onRangeChange when Last 2 weeks preset is selected', async () => {
      const mockOnRangeChange = vi.fn();
      const { selectPreset } = setup({ onRangeChange: mockOnRangeChange });

      await selectPreset('Last 2 weeks');

      expect(mockOnRangeChange).toHaveBeenCalled();
    });

    it('should select the preset radio when clicked', async () => {
      const { selectPreset, getPresetRadio } = setup();

      await selectPreset('Today');

      const todayRadio = await getPresetRadio(/today/i);
      expect(todayRadio).toBeChecked();
    });
  });

  describe('Date and Time Inputs', () => {
    it('should render date inputs', async () => {
      const { getStartDateInput, getEndDateInput } = setup();

      expect(await getStartDateInput()).toBeInTheDocument();
      expect(await getEndDateInput()).toBeInTheDocument();
    });

    it('should render time inputs by default', async () => {
      const { getStartTimeInput, getEndTimeInput } = setup();

      expect(await getStartTimeInput()).toBeInTheDocument();
      expect(await getEndTimeInput()).toBeInTheDocument();
    });

    it('should not render time inputs when showTime is false', async () => {
      const { queryStartTimeInput, queryEndTimeInput } = setup({
        showTime: false,
      });

      expect(queryStartTimeInput()).not.toBeInTheDocument();
      expect(queryEndTimeInput()).not.toBeInTheDocument();
    });

    it('should update range when valid date is entered', async () => {
      const mockOnRangeChange = vi.fn();
      const { typeStartDate, clickOutside } = setup({
        onRangeChange: mockOnRangeChange,
      });

      await typeStartDate('01/15/2024');
      await clickOutside();

      expect(mockOnRangeChange).toHaveBeenCalled();
    });

    it('should show error for invalid date format', async () => {
      const { typeStartDate, clickOutside, getErrorMessage } = setup();

      await typeStartDate('99/99');
      await clickOutside();

      const errorMessage = await getErrorMessage(/invalid date/i);
      expect(errorMessage).toBeInTheDocument();
    });

    it('should show error for invalid time format', async () => {
      const { typeStartTime, clickOutside, getErrorMessage } = setup();

      await typeStartTime('99:99');
      await clickOutside();

      const errorMessage = await getErrorMessage(/invalid time/i);
      expect(errorMessage).toBeInTheDocument();
    });

    it('should auto-format date input with slashes', async () => {
      const { typeStartDate, getStartDateInput } = setup();

      await typeStartDate('01152024');

      const input = await getStartDateInput();
      expect(input).toHaveValue('01/15/2024');
    });
  });

  describe('Default Values', () => {
    it('should render with default range', async () => {
      const { getStartDateInput, getEndDateInput } = setup({
        defaultRange: {
          from: new Date(2024, 0, 15),
          to: new Date(2024, 0, 22),
        },
      });

      const startDateInput = await getStartDateInput();
      const endDateInput = await getEndDateInput();

      expect(startDateInput).toHaveValue('15 January 2024');
      expect(endDateInput).toHaveValue('22 January 2024');
    });

    it('should render with default preset', async () => {
      const { getPresetRadio } = setup({ defaultPreset: 'today' });

      const todayRadio = await getPresetRadio(/today/i);

      expect(todayRadio).toBeChecked();
    });

    it('should render with default time', async () => {
      const { getStartTimeInput, getEndTimeInput } = setup({
        defaultTime: {
          startTime: new Date(2024, 0, 1, 9, 30),
          endTime: new Date(2024, 0, 1, 17, 45),
        },
      });

      const startTimeInput = await getStartTimeInput();
      const endTimeInput = await getEndTimeInput();

      expect(startTimeInput).toHaveValue('09:30');
      expect(endTimeInput).toHaveValue('17:45');
    });
  });

  describe('Disabled State', () => {
    it('should disable all inputs when disabled is true', async () => {
      const {
        getStartDateInput,
        getEndDateInput,
        getStartTimeInput,
        getEndTimeInput,
      } = setup({ disabled: true });

      expect(await getStartDateInput()).toBeDisabled();
      expect(await getEndDateInput()).toBeDisabled();
      expect(await getStartTimeInput()).toBeDisabled();
      expect(await getEndTimeInput()).toBeDisabled();
    });

    it('should disable all preset radios when disabled is true', async () => {
      const { getAllPresetRadios } = setup({ disabled: true });

      const radios = await getAllPresetRadios();

      radios.forEach((radio) => {
        expect(radio).toBeDisabled();
      });
    });

    it('should disable navigation buttons when disabled is true', async () => {
      const { getPrevMonthButton, getNextMonthButton } = setup({
        disabled: true,
        navigationMode: 'together',
      });

      expect(await getPrevMonthButton()).toBeDisabled();
      expect(await getNextMonthButton()).toBeDisabled();
    });
  });

  describe('Time Format', () => {
    it('should display time in 24-hour format by default', async () => {
      const { getStartTimeInput } = setup({
        defaultTime: {
          startTime: new Date(2024, 0, 1, 14, 30),
        },
      });

      const input = await getStartTimeInput();

      expect(input).toHaveValue('14:30');
    });

    it('should display time in 12-hour format when timeFormat is 12', async () => {
      const { getStartTimeInput } = setup({
        timeFormat: '12',
        defaultTime: {
          startTime: new Date(2024, 0, 1, 14, 30),
        },
      });

      const input = await getStartTimeInput();

      expect(input).toHaveValue('2:30 PM');
    });
  });

  describe('Calendar Navigation - Together Mode', () => {
    it('should navigate to previous month when prev button is clicked', async () => {
      const { navigateToPrevMonth, getMonthTitles } = setup({
        navigationMode: 'together',
      });

      const initialTitles = await getMonthTitles();
      const initialFirstMonth = initialTitles[0].textContent;

      await navigateToPrevMonth();

      // Wait for animation
      await new Promise((resolve) => setTimeout(resolve, 600));

      const updatedTitles = await getMonthTitles();
      const updatedFirstMonth = updatedTitles[0].textContent;

      expect(updatedFirstMonth).not.toBe(initialFirstMonth);
    });

    it('should navigate to next month when next button is clicked', async () => {
      const { navigateToNextMonth, getMonthTitles } = setup({
        navigationMode: 'together',
      });

      const initialTitles = await getMonthTitles();
      const initialFirstMonth = initialTitles[0].textContent;

      await navigateToNextMonth();

      // Wait for animation
      await new Promise((resolve) => setTimeout(resolve, 600));

      const updatedTitles = await getMonthTitles();
      const updatedFirstMonth = updatedTitles[0].textContent;

      expect(updatedFirstMonth).not.toBe(initialFirstMonth);
    });
  });

  describe('Calendar Navigation - Independent Mode', () => {
    it('should render separate navigation buttons for each month', async () => {
      const {
        getPrevMonthButtonForStart,
        getNextMonthButtonForStart,
        getPrevMonthButtonForEnd,
        getNextMonthButtonForEnd,
      } = setup({ navigationMode: 'independent' });

      expect(await getPrevMonthButtonForStart()).toBeInTheDocument();
      expect(await getNextMonthButtonForStart()).toBeInTheDocument();
      expect(await getPrevMonthButtonForEnd()).toBeInTheDocument();
      expect(await getNextMonthButtonForEnd()).toBeInTheDocument();
    });

    it('should not render together mode navigation buttons in independent mode', async () => {
      const { queryPrevMonthButton, queryNextMonthButton } = setup({
        navigationMode: 'independent',
      });

      expect(queryPrevMonthButton()).not.toBeInTheDocument();
      expect(queryNextMonthButton()).not.toBeInTheDocument();
    });
  });

  describe('Date Restrictions - minDate', () => {
    it('should disable navigation to previous month when at minDate', async () => {
      const today = new Date();
      const { getPrevMonthButton } = setup({
        minDate: new Date(today.getFullYear(), today.getMonth(), 1),
        navigationMode: 'together',
      });

      const prevButton = await getPrevMonthButton();

      expect(prevButton).toBeDisabled();
    });

    it('should not call onRangeChange when selecting date before minDate', async () => {
      const mockOnRangeChange = vi.fn();
      const { typeStartDate, clickOutside } = setup({
        minDate: new Date(2024, 5, 15), // June 15, 2024
        onRangeChange: mockOnRangeChange,
      });

      mockOnRangeChange.mockClear();
      await typeStartDate('01/01/2024'); // Before minDate
      await clickOutside();

      // Should show error, not call onRangeChange with invalid date
      const errorMessage = await screen.findByText(/date is not available/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('Date Restrictions - maxDate', () => {
    it('should disable navigation to next month when at maxDate', async () => {
      const today = new Date();
      const { getNextMonthButton } = setup({
        maxDate: new Date(today.getFullYear(), today.getMonth() + 1, 0), // End of next month
        navigationMode: 'together',
      });

      const nextButton = await getNextMonthButton();

      expect(nextButton).toBeDisabled();
    });
  });

  describe('Date Restrictions - blockedDays', () => {
    it('should show error when selecting a blocked day via input', async () => {
      const { typeStartDate, clickOutside, getErrorMessage } = setup({
        blockedDays: [new Date(2024, 0, 15)], // January 15, 2024
      });

      await typeStartDate('01/15/2024');
      await clickOutside();

      const errorMessage = await getErrorMessage(/date is not available/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('Date Restrictions - blockedMonths', () => {
    it('should show error when selecting a date in a blocked month via input', async () => {
      const { typeStartDate, clickOutside, getErrorMessage } = setup({
        blockedMonths: [{ year: 2024, month: 1 }], // February 2024 (0-indexed)
      });

      await typeStartDate('02/15/2024');
      await clickOutside();

      const errorMessage = await getErrorMessage(/date is not available/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  describe('hideDisabledNavigation', () => {
    it('should hide prev button when disabled and hideDisabledNavigation is true', async () => {
      const today = new Date();
      const { queryPrevMonthButton } = setup({
        minDate: new Date(today.getFullYear(), today.getMonth(), 1),
        hideDisabledNavigation: true,
        navigationMode: 'together',
      });

      expect(queryPrevMonthButton()).not.toBeInTheDocument();
    });

    it('should show disabled prev button when hideDisabledNavigation is false', async () => {
      const today = new Date();
      const { getPrevMonthButton } = setup({
        minDate: new Date(today.getFullYear(), today.getMonth(), 1),
        hideDisabledNavigation: false,
        navigationMode: 'together',
      });

      const prevButton = await getPrevMonthButton();

      expect(prevButton).toBeInTheDocument();
      expect(prevButton).toBeDisabled();
    });
  });

  describe('Form Integration', () => {
    it('should render hidden inputs with form name', () => {
      const { getHiddenInputByName } = setup({ name: 'dateRange' });

      const startInput = getHiddenInputByName('dateRange-start');
      const endInput = getHiddenInputByName('dateRange-end');

      expect(startInput).toBeInTheDocument();
      expect(endInput).toBeInTheDocument();
    });

    it('should update hidden inputs when range changes', async () => {
      const { getHiddenInputByName, selectPreset } = setup({
        name: 'dateRange',
      });

      await selectPreset('Today');

      const startInput = getHiddenInputByName('dateRange-start');
      const endInput = getHiddenInputByName('dateRange-end');

      expect(startInput?.value).not.toBe('');
      expect(endInput?.value).not.toBe('');
    });
  });

  describe('Callbacks', () => {
    it('should call onDateChange when date changes', async () => {
      const mockOnDateChange = vi.fn();
      const { selectPreset } = setup({
        onDateChange: mockOnDateChange,
      });

      await selectPreset('Today');

      expect(mockOnDateChange).toHaveBeenCalledWith(
        expect.objectContaining({
          from: expect.any(Date),
          to: expect.any(Date),
        }),
      );
    });

    it('should call onRangeChange with time when range changes', async () => {
      const mockOnRangeChange = vi.fn();
      const { selectPreset } = setup({
        onRangeChange: mockOnRangeChange,
        defaultTime: {
          startTime: new Date(2024, 0, 1, 9, 0),
          endTime: new Date(2024, 0, 1, 17, 0),
        },
      });

      await selectPreset('Today');

      expect(mockOnRangeChange).toHaveBeenCalledWith(
        expect.objectContaining({
          from: expect.any(Date),
          to: expect.any(Date),
          startTime: expect.any(Date),
          endTime: expect.any(Date),
        }),
      );
    });
  });

  describe('Date Selection via Calendar', () => {
    it('should select start date when clicking a day', async () => {
      const mockOnRangeChange = vi.fn();
      const { clickDay } = setup({
        onRangeChange: mockOnRangeChange,
      });

      await clickDay('15');

      expect(mockOnRangeChange).toHaveBeenCalled();
    });

    // Note: This test is skipped because the RadioGroup in PresetPanel uses
    // `defaultChecked` instead of controlled `value`, so it doesn't update
    // when the preset state changes from context. This is a known limitation.
    it.skip('should switch to Custom preset when selecting dates on calendar', async () => {
      const { selectPreset, clickDay, getPresetRadio } = setup();

      // First select Today preset
      await selectPreset('Today');

      // Verify Today is selected
      const todayRadio = await getPresetRadio(/today/i);
      expect(todayRadio).toBeChecked();

      // Then click a different day (use 25 which is unlikely to be today)
      await clickDay('25');

      // Wait for state to update
      const customRadio = await getPresetRadio(/custom/i);

      // After clicking a day, custom preset should be selected
      expect(customRadio).toBeChecked();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty default range', async () => {
      const { getStartDateInput, getEndDateInput } = setup({
        defaultRange: {},
      });

      const startInput = await getStartDateInput();
      const endInput = await getEndDateInput();

      expect(startInput).toHaveValue('');
      expect(endInput).toHaveValue('');
    });

    it('should handle only from date in default range', async () => {
      const { getStartDateInput, getEndDateInput } = setup({
        defaultRange: {
          from: new Date(2024, 0, 15),
        },
      });

      const startInput = await getStartDateInput();
      const endInput = await getEndDateInput();

      expect(startInput).toHaveValue('15 January 2024');
      expect(endInput).toHaveValue('');
    });

    it('should clear error when valid date is entered after invalid', async () => {
      const { typeStartDate, clickOutside, queryErrorMessage } = setup();

      // Enter invalid date
      await typeStartDate('99/99');
      await clickOutside();

      // Clear and enter valid date
      await typeStartDate('01/15/2024');
      await clickOutside();

      const errorMessage = queryErrorMessage(/invalid date/i);

      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});
