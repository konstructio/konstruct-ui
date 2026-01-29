import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC } from 'react';

import { DatePicker } from './DatePicker';
import type { DatePickerProps } from './DatePicker.types';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

describe('DatePicker', () => {
  // Use a fixed date to avoid month overflow issues (e.g., Jan 31 -> Feb 31 rolls to March)
  const currentMonth = new Date(2026, 0, 15); // January 15, 2026

  const defaultProps = {
    onSelect: vi.fn(),
    animate: false,
    defaultMonth: currentMonth,
  } satisfies DatePickerProps;

  const setup = (props: Partial<DatePickerProps> = {}, wrapper?: FC) => {
    const { container: component } = render(
      <DatePicker {...defaultProps} {...props} />,
      { wrapper },
    );

    const user = userEvent.setup();
    const getDatepicker = () => screen.findByRole('dialog');
    const getDay = (day: number) => screen.findByText(day.toString());
    const getButtonNextMonth = () =>
      screen.findByRole('button', { name: /next month/i });
    const getButtonPreviousMonth = () =>
      screen.findByRole('button', { name: /previous month/i });
    const getMonth = (month: number) =>
      screen.findByText(new RegExp(months[month], 'i'));

    return {
      component,
      user,
      getDatepicker,
      getDay,
      getButtonNextMonth,
      getButtonPreviousMonth,
      getMonth,
    };
  };

  it('should render correctly', async () => {
    const { getDatepicker } = setup();

    const datepicker = await getDatepicker();

    expect(datepicker).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should select a date when clicked', async () => {
    const mockOnSelect = vi.fn();
    const { user, getDay } = setup({ onSelect: mockOnSelect });

    const day = await getDay(15);

    await user.click(day);

    expect(mockOnSelect).toHaveBeenCalled();
  });

  it('should navigate to the next month', async () => {
    const mockOnSelect = vi.fn();

    const { user, getDay, getButtonNextMonth, getMonth } = setup({
      onSelect: mockOnSelect,
    });

    const nextMonth = await getButtonNextMonth();

    await user.click(nextMonth);

    const nextMonthDate = new Date(currentMonth);
    nextMonthDate.setMonth(currentMonth.getMonth() + 1);

    const month = await getMonth(nextMonthDate.getMonth());

    const day = await getDay(15);

    await user.click(day);

    expect(mockOnSelect).toHaveBeenCalled();
    expect(month).toBeInTheDocument();
  });

  it('should navigate to the previous month', async () => {
    const mockOnSelect = vi.fn();

    const { user, getDay, getButtonPreviousMonth, getMonth } = setup({
      onSelect: mockOnSelect,
    });

    const nextMonth = await getButtonPreviousMonth();

    await user.click(nextMonth);

    const nextMonthDate = new Date(currentMonth);
    nextMonthDate.setMonth(currentMonth.getMonth() - 1);

    const month = await getMonth(nextMonthDate.getMonth());

    const day = await getDay(15);

    await user.click(day);

    expect(mockOnSelect).toHaveBeenCalled();
    expect(month).toBeInTheDocument();
  });
});
