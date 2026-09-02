import {
  act,
  queryByAttribute,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Filter } from './Filter';
import { Option } from './Filter.types';
import { BadgeMultiSelectProps, DateFilterDropdownProps } from './components';
import { resetEvent } from './events';

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
      return queryByAttribute(
        'data-label',
        document.body,
        new RegExp(option, 'i'),
      );
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
      return queryByAttribute(
        'aria-label',
        document.body,
        new RegExp(date, 'i'),
      );
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

    // Reopen the dropdown (it closes automatically on Apply by default)
    await user.click(badgeButton);

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

  it('should close the dropdown when clicking outside', async () => {
    const { user, getBadgeButton, getOptionBadge } = setup();

    await user.click(await getBadgeButton('Badge'));

    expect(await getOptionBadge(options.at(0)!.id)).toBeInTheDocument();

    await user.click(document.body);

    expect(await getOptionBadge(options.at(0)!.id)).not.toBeInTheDocument();
  });

  it('should keep the dropdown open when clicking inside the portaled menu', async () => {
    const { user, getBadgeButton, getOptionBadge, getApplyButton } = setup();

    await user.click(await getBadgeButton('Badge'));

    const option = await getOptionBadge(options.at(0)!.id);

    await user.click(option!);

    expect(await getApplyButton()).toBeInTheDocument();
    expect(await getOptionBadge(options.at(0)!.id)).toBeInTheDocument();
  });

  it('should clear applied values when the reset event fires', async () => {
    const mockOnApply = vi.fn();

    const { user, getBadgeButton, getOptionBadge, getApplyButton } = setup({
      onApplyBadge: mockOnApply,
    });

    await user.click(await getBadgeButton('Badge'));
    await user.click((await getOptionBadge(options.at(0)!.id))!);
    await user.click(await getApplyButton());

    expect(mockOnApply).toHaveBeenCalledWith([
      { id: 'creating', label: 'Creating', variant: 'warning' },
    ]);

    act(() => {
      resetEvent();
    });

    expect(mockOnApply).toHaveBeenCalledWith([]);
  });

  it('should only reset dropdowns within the matching scope', async () => {
    const onApplyA = vi.fn();
    const onApplyB = vi.fn();

    render(
      <>
        <Filter resetScope="scope-a">
          <Filter.BadgeMultiSelect
            label="Badge A"
            options={options}
            onApply={onApplyA}
          />
        </Filter>
        <Filter resetScope="scope-b">
          <Filter.BadgeMultiSelect
            label="Badge B"
            options={options}
            onApply={onApplyB}
          />
        </Filter>
      </>,
    );

    act(() => {
      resetEvent('scope-a');
    });

    expect(onApplyA).toHaveBeenCalledWith([]);
    expect(onApplyB).not.toHaveBeenCalled();
  });

  it('should reset every dropdown when the reset event has no scope', async () => {
    const onApplyA = vi.fn();
    const onApplyB = vi.fn();

    render(
      <>
        <Filter resetScope="scope-a">
          <Filter.BadgeMultiSelect
            label="Badge A"
            options={options}
            onApply={onApplyA}
          />
        </Filter>
        <Filter resetScope="scope-b">
          <Filter.BadgeMultiSelect
            label="Badge B"
            options={options}
            onApply={onApplyB}
          />
        </Filter>
      </>,
    );

    act(() => {
      resetEvent();
    });

    expect(onApplyA).toHaveBeenCalledWith([]);
    expect(onApplyB).toHaveBeenCalledWith([]);
  });

  it('should reset only its own Filter root when clicking the reset button', async () => {
    const onApplyA = vi.fn();
    const onApplyB = vi.fn();
    const user = userEvent.setup();

    render(
      <>
        <Filter>
          <Filter.BadgeMultiSelect
            label="Badge A"
            options={options}
            onApply={onApplyA}
          />
          <Filter.ResetButton />
        </Filter>
        <Filter>
          <Filter.BadgeMultiSelect
            label="Badge B"
            options={options}
            onApply={onApplyB}
          />
        </Filter>
      </>,
    );

    await user.click(screen.getByRole('button', { name: /reset/i }));

    expect(onApplyA).toHaveBeenCalledWith([]);
    expect(onApplyB).not.toHaveBeenCalled();
  });

  describe('Select All', () => {
    const getCheckbox = async (name: string) => {
      return screen.findByRole('checkbox', { name });
    };

    it('should check every option when checking the select all checkbox', async () => {
      const { user, getBadgeButton } = setup();

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));

      expect(await getCheckbox('Creating')).toBeChecked();
      expect(await getCheckbox('Ready')).toBeChecked();
    });

    it('should re-check every option when checking select all after unchecking an option', async () => {
      const { user, getBadgeButton } = setup();

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));
      await user.click(await getCheckbox('Creating'));

      expect(await getCheckbox('Creating')).not.toBeChecked();
      expect(await getCheckbox('All')).not.toBeChecked();

      await user.click(await getCheckbox('All'));

      expect(await getCheckbox('Creating')).toBeChecked();
      expect(await getCheckbox('Ready')).toBeChecked();
    });

    it('should uncheck every option when unchecking the select all checkbox', async () => {
      const { user, getBadgeButton } = setup();

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));
      await user.click(await getCheckbox('All'));

      expect(await getCheckbox('Creating')).not.toBeChecked();
      expect(await getCheckbox('Ready')).not.toBeChecked();
    });

    it('should uncheck the select all checkbox when unchecking an option', async () => {
      const { user, getBadgeButton } = setup();

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));

      expect(await getCheckbox('All')).toBeChecked();

      await user.click(await getCheckbox('Ready'));

      expect(await getCheckbox('All')).not.toBeChecked();
    });

    it('should apply every option after select all and none after unchecking it', async () => {
      const mockOnApply = vi.fn();
      const { user, getBadgeButton, getApplyButton } = setup({
        onApplyBadge: mockOnApply,
      });

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));
      await user.click(await getApplyButton());

      expect(mockOnApply).toHaveBeenCalledWith([
        { id: 'creating', label: 'Creating', variant: 'warning' },
        { id: 'ready', label: 'Ready', variant: 'success' },
      ]);

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));
      await user.click(await getApplyButton());

      expect(mockOnApply).toHaveBeenLastCalledWith([]);
    });

    it('should keep the applied count while editing until apply', async () => {
      const mockOnApply = vi.fn();
      const { user, getBadgeButton, getApplyButton } = setup({
        onApplyBadge: mockOnApply,
      });

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));
      await user.click(await getApplyButton());

      const badgeButton = await getBadgeButton('Badge');

      expect(badgeButton).toHaveTextContent('2');

      await user.click(badgeButton);
      await user.click(await getCheckbox('All'));

      expect(badgeButton).toHaveTextContent('2');

      await user.click(await getApplyButton());

      expect(badgeButton).not.toHaveTextContent('2');
    });

    it('should not apply duplicated options after re-checking an unchecked option', async () => {
      const mockOnApply = vi.fn();
      const { user, getBadgeButton, getApplyButton } = setup({
        onApplyBadge: mockOnApply,
      });

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('All'));
      await user.click(await getCheckbox('Creating'));
      await user.click(await getCheckbox('Creating'));
      await user.click(await getApplyButton());

      expect(mockOnApply).toHaveBeenCalledWith([
        { id: 'creating', label: 'Creating', variant: 'warning' },
        { id: 'ready', label: 'Ready', variant: 'success' },
      ]);
    });

    it('should show applied options as checked after abandoning staged changes', async () => {
      const mockOnApply = vi.fn();
      const { user, getBadgeButton, getApplyButton } = setup({
        onApplyBadge: mockOnApply,
      });

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('Creating'));
      await user.click(await getApplyButton());

      await user.click(await getBadgeButton('Badge'));
      await user.click(await getCheckbox('Creating'));

      expect(await getCheckbox('Creating')).not.toBeChecked();

      await user.click(document.body);
      await user.click(await getBadgeButton('Badge'));

      expect(await getCheckbox('Creating')).toBeChecked();
    });
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

    // Reopen the dropdown (it closes automatically on Apply by default)
    await user.click(dateButton);

    const resetButton = await getResetButton();

    await user.click(resetButton);

    expect(mockOnApply).toHaveBeenCalledWith();
  });

  describe('CustomDateRangeFilterDropdown actions', () => {
    const DAY_MS = 24 * 60 * 60 * 1000;

    const presets = [
      {
        value: 'last-7-days',
        label: 'Last 7 days',
        resolve: (now: Date) => ({
          from: new Date(now.getTime() - 7 * DAY_MS),
          to: now,
        }),
      },
      { value: 'custom', label: 'Custom range', resolve: () => ({}) },
    ];

    const setupRange = (props = {}) => {
      render(
        <Filter>
          <Filter.CustomDateRangeFilterDropdown
            label="Created"
            presets={presets}
            revealCalendarOnCustom
            applyOnPresetSelect
            animationDuration={0}
            {...props}
          />
        </Filter>,
      );

      const user = userEvent.setup();

      const open = async () =>
        user.click(await screen.findByRole('button', { name: /created/i }));

      const pick = async (label: string) =>
        user.click(await screen.findByText(label));

      const queryApply = () => screen.queryByRole('button', { name: /apply/i });
      const queryClear = () => screen.queryByRole('button', { name: /clear/i });

      return { user, open, pick, queryApply, queryClear };
    };

    it('should offer clear alone once a filter is applied', async () => {
      const { open, pick, queryApply, queryClear } = setupRange();

      await open();
      await pick('Last 7 days');
      await open();

      // The preset already applied itself, so there is nothing to apply — but
      // there is now something to clear.
      expect(queryClear()).toBeInTheDocument();
      expect(queryApply()).not.toBeInTheDocument();
    });

    it('should drop clear again once the filter is cleared', async () => {
      const { user, open, pick, queryClear } = setupRange();

      await open();
      await pick('Last 7 days');
      await open();
      await user.click(queryClear() as HTMLElement);
      await open();

      expect(queryClear()).not.toBeInTheDocument();
    });

    it('should not offer the actions on the bare preset list', async () => {
      const { open, queryApply, queryClear } = setupRange();

      await open();

      expect(queryApply()).not.toBeInTheDocument();
      expect(queryClear()).not.toBeInTheDocument();
    });

    it('should offer them once the custom range is chosen', async () => {
      const { open, pick, queryApply, queryClear } = setupRange();

      await open();
      await pick('Custom range');

      expect(queryApply()).toBeInTheDocument();
      expect(queryClear()).toBeInTheDocument();
    });

    it('should hide them again when the custom range is collapsed', async () => {
      const { open, pick, queryApply, queryClear } = setupRange();

      await open();
      await pick('Custom range');
      expect(queryApply()).toBeInTheDocument();

      await pick('Custom range');

      await waitFor(() => {
        expect(queryApply()).not.toBeInTheDocument();
      });
      expect(queryClear()).not.toBeInTheDocument();
    });

    it('should offer them again when the custom range is expanded once more', async () => {
      const { open, pick, queryApply, queryClear } = setupRange();

      await open();
      await pick('Custom range');
      await pick('Custom range');
      await waitFor(() => {
        expect(queryApply()).not.toBeInTheDocument();
      });

      await pick('Custom range');

      expect(queryApply()).toBeInTheDocument();
      expect(queryClear()).toBeInTheDocument();
    });

    it('should tuck pending dates away with the collapsed custom range', async () => {
      const { user, open, pick, queryApply } = setupRange({
        applyOnPresetSelect: false,
      });

      await open();
      await pick('Custom range');

      const cells = await screen.findAllByRole('gridcell');
      const day = cells
        .map((cell) => {
          return within(cell).queryByRole('button');
        })
        .find((button) => {
          return button && !button.hasAttribute('disabled');
        }) as HTMLElement;
      await user.click(day);
      expect(queryApply()).toBeEnabled();

      await pick('Custom range');

      await waitFor(() => {
        expect(queryApply()).not.toBeInTheDocument();
      });

      await pick('Custom range');

      expect(
        await screen.findByRole('button', { name: /apply/i }),
      ).toBeEnabled();
    });

    it('should only empty the inputs when clear is pressed inside the calendar', async () => {
      const { user, open, pick, queryApply, queryClear } = setupRange({
        applyOnPresetSelect: false,
      });

      await open();
      await pick('Custom range');

      const cells = await screen.findAllByRole('gridcell');
      const day = cells
        .map((cell) => {
          return within(cell).queryByRole('button');
        })
        .find((button) => {
          return button && !button.hasAttribute('disabled');
        }) as HTMLElement;
      await user.click(day);
      expect(screen.getByLabelText(/^start date$/i)).not.toHaveValue('');

      await user.click(queryClear() as HTMLElement);

      expect(screen.getByLabelText(/^start date$/i)).toHaveValue('');
      expect(
        screen.getByRole('application', {
          name: /date range picker calendar/i,
        }),
      ).toBeInTheDocument();
      expect(queryApply()).toBeDisabled();
    });

    it('should keep them hidden after a preset applies on its own', async () => {
      const { open, pick, queryApply } = setupRange();

      await open();
      await pick('Last 7 days');
      await open();

      expect(queryApply()).not.toBeInTheDocument();
    });

    it('should offer apply for a preset that does not apply itself', async () => {
      const { open, pick, queryApply } = setupRange({
        applyOnPresetSelect: false,
      });

      await open();
      await pick('Last 7 days');

      // The preset filled the selection but applied nothing, and it resolves to
      // a window so the calendar stays closed. Without apply here the choice
      // could never reach the table.
      expect(queryApply()).toBeInTheDocument();
      expect(queryApply()).toBeEnabled();
    });

    it('should apply that selection when the button is pressed', async () => {
      const onApply = vi.fn();
      const { user, open, pick, queryApply } = setupRange({
        applyOnPresetSelect: false,
        onApply,
      });

      await open();
      await pick('Last 7 days');
      await user.click(queryApply() as HTMLElement);

      expect(onApply).toHaveBeenCalledTimes(1);
      expect(onApply.mock.lastCall?.[0]?.from).toBeInstanceOf(Date);
    });

    it('should always offer them when the calendar is always up', async () => {
      const { open, queryApply, queryClear } = setupRange({
        revealCalendarOnCustom: false,
      });

      await open();

      expect(queryApply()).toBeInTheDocument();
      expect(queryClear()).toBeInTheDocument();
    });

    it('should leave apply disabled until a date is chosen', async () => {
      const { open, pick, queryApply } = setupRange();

      await open();
      await pick('Custom range');

      expect(queryApply()).toBeDisabled();
    });
  });
});
