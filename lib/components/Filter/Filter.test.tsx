import { queryByAttribute, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Filter } from './Filter';
import { Option } from './Filter.types';
import { BadgeMultiSelectProps, DateFilterDropdownProps } from './components';

const options: Option[] = [
  {
    id: 'creating',
    label: 'Creating',
    variant: 'warning',
  },
  {
    id: 'ready',
    label: 'Ready',
    variant: 'success',
  },
];

const getOrdinal = (n: number) => {
  if (n % 100 >= 11 && n % 100 <= 13) {
    return 'th';
  }

  switch (n % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

const formatDateWithOrdinal = (date: Date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
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

  const weekday = days[date.getDay()];
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const suffix = getOrdinal(day);

  return `${weekday}, ${month} ${day}${suffix}, ${year}`;
};

type FilterTestProps = {
  onApplyBadge?: BadgeMultiSelectProps['onApply'];
  onApplyDate?: DateFilterDropdownProps['onApply'];
};

describe('FilterComponent', () => {
  const setup = ({ onApplyBadge, onApplyDate }: FilterTestProps = {}) => {
    const { container: component } = render(
      <Filter>
        <Filter.BadgeMultiSelect
          label="Badge"
          options={options}
          onApply={onApplyBadge}
        />
        <Filter.DateFilterDropdown label="Date" onApply={onApplyDate} />
      </Filter>,
    );

    const user = userEvent.setup();

    const getBadgeButton = async (label: string) => {
      return screen.findByRole('button', { name: new RegExp(label, 'i') });
    };

    const getOptionBadge = async (option: string) => {
      return queryByAttribute('data-label', component, new RegExp(option, 'i'));
    };

    const getApplyButton = async () => {
      return screen.findByRole('button', { name: /apply/i });
    };

    const getResetButton = async () => {
      return screen.findByRole('button', { name: /reset/i });
    };

    const getDateButton = async () => {
      return screen.findByRole('button', { name: /date/i });
    };

    const getDateButtonByLabel = async (date: string) => {
      return queryByAttribute('aria-label', component, new RegExp(date, 'i'));
    };

    return {
      component,
      user,
      getApplyButton,
      getBadgeButton,
      getDateButton,
      getDateButtonByLabel,
      getOptionBadge,
      getResetButton,
    };
  };

  it('should render component', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should select an option inside the badge multiselect', async () => {
    const mockOnApply = vi.fn();

    const { user, getBadgeButton, getOptionBadge, getApplyButton } = setup({
      onApplyBadge: mockOnApply,
    });

    const badgeButton = await getBadgeButton('Badge');

    await user.click(badgeButton);

    const option = await getOptionBadge(options.at(0)!.id);

    await user.click(option!);

    const applyButton = await getApplyButton();

    await user.click(applyButton);

    expect(mockOnApply).toHaveBeenCalledWith([
      { id: 'creating', label: 'Creating', variant: 'warning' },
    ]);
  });

  it('should select multiple option inside the badge multiselect', async () => {
    const mockOnApply = vi.fn();

    const { user, getBadgeButton, getOptionBadge, getApplyButton } = setup({
      onApplyBadge: mockOnApply,
    });

    const badgeButton = await getBadgeButton('Badge');

    await user.click(badgeButton);

    const option = await getOptionBadge(options.at(0)!.id);
    const option2 = await getOptionBadge(options.at(1)!.id);

    await user.click(option!);
    await user.click(option2!);

    const applyButton = await getApplyButton();

    await user.click(applyButton);

    expect(mockOnApply).toHaveBeenCalledWith([
      { id: 'creating', label: 'Creating', variant: 'warning' },
      { id: 'ready', label: 'Ready', variant: 'success' },
    ]);
  });

  it('should select an option and reset the values', async () => {
    const mockOnApply = vi.fn();

    const {
      user,
      getBadgeButton,
      getOptionBadge,
      getApplyButton,
      getResetButton,
    } = setup({
      onApplyBadge: mockOnApply,
    });

    const badgeButton = await getBadgeButton('Badge');

    await user.click(badgeButton);

    const option = await getOptionBadge(options.at(0)!.id);

    await user.click(option!);

    const applyButton = await getApplyButton();

    await user.click(applyButton);

    expect(mockOnApply).toHaveBeenCalledWith([
      { id: 'creating', label: 'Creating', variant: 'warning' },
    ]);

    const resetButton = await getResetButton();

    await user.click(resetButton);

    expect(mockOnApply).toHaveBeenCalledWith([]);
  });

  it('should select a date and apply', async () => {
    const mockOnApply = vi.fn();

    const { user, getDateButton, getApplyButton, getDateButtonByLabel } = setup(
      {
        onApplyDate: mockOnApply,
      },
    );

    const dateButton = await getDateButton();

    await user.click(dateButton);

    const dateButtonByLabel = await getDateButtonByLabel(
      formatDateWithOrdinal(new Date()),
    );

    await user.click(dateButtonByLabel!);

    const applyButton = await getApplyButton();

    await user.click(applyButton);

    expect(mockOnApply).toHaveBeenCalledWith(expect.any(Date));
  });

  it('should select a date and reset the values', async () => {
    const mockOnApply = vi.fn();

    const {
      user,
      getDateButton,
      getApplyButton,
      getResetButton,
      getDateButtonByLabel,
    } = setup({
      onApplyDate: mockOnApply,
    });

    const dateButton = await getDateButton();

    await user.click(dateButton);

    const dateButtonByLabel = await getDateButtonByLabel(
      formatDateWithOrdinal(new Date()),
    );

    await user.click(dateButtonByLabel!);

    const applyButton = await getApplyButton();

    await user.click(applyButton);

    expect(mockOnApply).toHaveBeenCalledWith(expect.any(Date));

    const resetButton = await getResetButton();

    await user.click(resetButton);

    expect(mockOnApply).toHaveBeenCalledWith();
  });
});
