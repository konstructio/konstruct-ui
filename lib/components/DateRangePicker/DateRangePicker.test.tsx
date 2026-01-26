import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC } from 'react';

import { DateRangePicker } from './DateRangePicker';
import type { DateRangePickerProps } from './DateRangePicker.types';

describe('DateRangePicker', () => {
  const defaultProps = {
    onRangeChange: vi.fn(),
  } satisfies DateRangePickerProps;

  const setup = (props: Partial<DateRangePickerProps> = {}, wrapper?: FC) => {
    const { container: component } = render(
      <DateRangePicker {...defaultProps} {...props} />,
      { wrapper },
    );

    const user = userEvent.setup();
    const getDateRangePicker = () =>
      screen.findByRole('group', { name: /date range picker/i });
    const getPresetOption = (label: string) => screen.findByText(label);
    const getStartDateInput = () => screen.findByLabelText(/start date/i);
    const getEndDateInput = () => screen.findByLabelText(/end date/i);
    const getStartTimeInput = () => screen.findByLabelText(/start time/i);
    const getEndTimeInput = () => screen.findByLabelText(/end time/i);

    return {
      component,
      user,
      getDateRangePicker,
      getPresetOption,
      getStartDateInput,
      getEndDateInput,
      getStartTimeInput,
      getEndTimeInput,
    };
  };

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

  it('should render preset options', async () => {
    const { getPresetOption } = setup();

    expect(await getPresetOption('Today')).toBeInTheDocument();
    expect(await getPresetOption('Current month')).toBeInTheDocument();
    expect(await getPresetOption('Custom')).toBeInTheDocument();
    expect(await getPresetOption('Last 7 days')).toBeInTheDocument();
    expect(await getPresetOption('Last 2 weeks')).toBeInTheDocument();
  });

  it('should call onRangeChange when preset is selected', async () => {
    const mockOnRangeChange = vi.fn();
    const { user, getPresetOption } = setup({
      onRangeChange: mockOnRangeChange,
    });

    const todayOption = await getPresetOption('Today');

    await user.click(todayOption);

    expect(mockOnRangeChange).toHaveBeenCalled();
  });

  it('should render date and time inputs', async () => {
    const {
      getStartDateInput,
      getEndDateInput,
      getStartTimeInput,
      getEndTimeInput,
    } = setup();

    expect(await getStartDateInput()).toBeInTheDocument();
    expect(await getEndDateInput()).toBeInTheDocument();
    expect(await getStartTimeInput()).toBeInTheDocument();
    expect(await getEndTimeInput()).toBeInTheDocument();
  });

  it('should update range when valid date is entered in input', async () => {
    const mockOnRangeChange = vi.fn();
    const { user, getStartDateInput } = setup({
      onRangeChange: mockOnRangeChange,
    });

    const startDateInput = await getStartDateInput();

    await user.clear(startDateInput);
    await user.type(startDateInput, '15 January 2024');

    expect(mockOnRangeChange).toHaveBeenCalled();
  });

  it('should show error for invalid date format', async () => {
    const { user, getStartDateInput } = setup();

    const startDateInput = await getStartDateInput();

    await user.clear(startDateInput);
    await user.type(startDateInput, 'invalid');

    const errorMessage = await screen.findByText(/invalid date/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should show error for invalid time format', async () => {
    const { user, getStartTimeInput } = setup();

    const startTimeInput = await getStartTimeInput();

    await user.clear(startTimeInput);
    await user.type(startTimeInput, '99:99');
    await user.click(document.body); // Click outside to blur and trigger validation

    const errorMessage = await screen.findByText(/invalid time/i);

    expect(errorMessage).toBeInTheDocument();
  });

  it('should render with default range', async () => {
    const today = new Date(2024, 0, 15);
    const nextWeek = new Date(2024, 0, 22);

    const { getStartDateInput, getEndDateInput } = setup({
      defaultRange: {
        from: today,
        to: nextWeek,
      },
    });

    const startDateInput = await getStartDateInput();
    const endDateInput = await getEndDateInput();

    expect(startDateInput).toHaveValue('15 January 2024');
    expect(endDateInput).toHaveValue('22 January 2024');
  });

  it('should render with default preset', async () => {
    const mockOnRangeChange = vi.fn();
    setup({
      defaultPreset: 'today',
      onRangeChange: mockOnRangeChange,
    });

    // The "Today" radio should be selected
    const todayRadio = await screen.findByRole('radio', { name: /today/i });
    expect(todayRadio).toBeChecked();
  });

  it('should render in disabled state', async () => {
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

  it('should render calendar with two months', async () => {
    setup();

    const calendar = await screen.findByRole('application', {
      name: /date range picker calendar/i,
    });

    expect(calendar).toBeInTheDocument();
  });
});
