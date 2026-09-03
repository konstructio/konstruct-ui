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

import { DateRangeWithTime } from '../DateRangePicker/DateRangePicker.types';

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

const pickDay = async (
  user: ReturnType<typeof userEvent.setup>,
  day: string,
) => {
  const calendar = await screen.findByRole('application', {
    name: /date range picker calendar/i,
  });
  const cells = await within(calendar).findAllByRole('gridcell');
  const cell = cells.find((candidate) => {
    return within(candidate).queryByRole('button')?.textContent === day;
  });

  await user.click(within(cell as HTMLElement).getByRole('button'));
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

    it('should enable apply once a preset changes the selection', async () => {
      const { open, pick, queryApply } = setupRange({
        revealCalendarOnCustom: false,
        applyOnPresetSelect: false,
      });

      await open();
      expect(queryApply()).toBeDisabled();

      await pick('Last 7 days');

      expect(queryApply()).toBeEnabled();
    });

    it('should disable apply again while the selection matches what was applied', async () => {
      const { user, open, pick, queryApply } = setupRange({
        revealCalendarOnCustom: false,
        applyOnPresetSelect: false,
      });

      await open();
      await pick('Last 7 days');
      await user.click(queryApply() as HTMLElement);
      await open();

      expect(queryApply()).toBeDisabled();
    });
  });

  describe('CustomDateRangeFilterDropdown selected preset', () => {
    const setupSelected = (props = {}) => {
      render(
        <Filter>
          <Filter.CustomDateRangeFilterDropdown
            label="Created"
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

      const getRadio = (name: RegExp) => screen.findByRole('radio', { name });

      return { user, open, pick, getRadio };
    };

    it('should keep the applied preset marked when reopened', async () => {
      const { open, pick, getRadio } = setupSelected();

      await open();
      await pick('Last 30 days');
      await open();

      expect(await getRadio(/last 30 days/i)).toBeChecked();
    });

    it('should discard a pending preset when closed without applying', async () => {
      const { user, open, pick } = setupSelected({
        applyOnPresetSelect: false,
      });

      await open();
      await pick('Last 7 days');
      await user.keyboard('{Escape}');
      await open();

      const radios = await screen.findAllByRole('radio');

      radios.forEach((radio) => {
        expect(radio).not.toBeChecked();
      });
      expect(
        screen.queryByRole('button', { name: /apply/i }),
      ).not.toBeInTheDocument();
    });

    it('should fall back to the applied preset when closed mid-change', async () => {
      const { user, open, pick, getRadio } = setupSelected({
        applyOnPresetSelect: false,
      });

      await open();
      await pick('Last 30 days');
      await user.click(screen.getByRole('button', { name: /apply/i }));
      await open();
      await pick('Last 7 days');
      await user.keyboard('{Escape}');
      await open();

      expect(await getRadio(/last 30 days/i)).toBeChecked();
      expect(await getRadio(/last 7 days/i)).not.toBeChecked();
    });

    it('should mark the preset even when the calendar is always up', async () => {
      const { open, pick, getRadio } = setupSelected({
        revealCalendarOnCustom: false,
      });

      await open();
      await pick('Last 7 days');
      await open();

      expect(await getRadio(/last 7 days/i)).toBeChecked();
    });

    it('should leave every preset unmarked after clearing', async () => {
      const { user, open, pick } = setupSelected();

      await open();
      await pick('Last 30 days');
      await open();
      await user.click(screen.getByRole('button', { name: /clear/i }));
      await open();

      const radios = await screen.findAllByRole('radio');

      radios.forEach((radio) => {
        expect(radio).not.toBeChecked();
      });
    });

    it('should fold the custom range back when closed without applying', async () => {
      const { user, open, pick } = setupSelected();

      await open();
      await pick('Custom range');
      await user.keyboard('{Escape}');
      await open();

      expect(await screen.findByText('Last 24 hours')).toBeInTheDocument();
      expect(screen.queryByLabelText(/^start date$/i)).not.toBeInTheDocument();
      expect(
        await screen.findByRole('radio', { name: /custom range/i }),
      ).not.toBeChecked();
    });

    it('should drop a picked day when closed without applying', async () => {
      const { user, open, pick } = setupSelected();

      await open();
      await pick('Last 7 days');
      await open();
      await pick('Custom range');
      await pickDay(user, '15');
      await user.keyboard('{Escape}');
      await open();

      expect(
        await screen.findByRole('radio', { name: /last 7 days/i }),
      ).toBeChecked();
      expect(screen.queryByLabelText(/^start date$/i)).not.toBeInTheDocument();
    });

    it('should span the whole day when a single day is picked', async () => {
      const onApply = vi.fn();
      const { user, open, pick } = setupSelected({ onApply });

      await open();
      await pick('Custom range');
      await pickDay(user, '15');
      await user.click(screen.getByRole('button', { name: /apply/i }));

      const [{ from, to }] = onApply.mock.lastCall as [
        Required<DateRangeWithTime>,
      ];

      expect([from.getHours(), from.getMinutes(), from.getSeconds()]).toEqual([
        0, 0, 0,
      ]);
      expect([to.getHours(), to.getMinutes(), to.getSeconds()]).toEqual([
        23, 59, 59,
      ]);
      expect(to.getDate()).toBe(from.getDate());
    });

    it('should leave a preset window untouched', async () => {
      const onApply = vi.fn();
      const { open, pick } = setupSelected({ onApply });

      await open();
      await pick('Last 24 hours');

      const [{ from, to }] = onApply.mock.lastCall as [
        Required<DateRangeWithTime>,
      ];

      expect(to.getTime() - from.getTime()).toBe(24 * 60 * 60 * 1000);
    });

    it('should keep an applied custom range open when reopened', async () => {
      const { user, open, pick } = setupSelected();

      await open();
      await pick('Custom range');
      await pickDay(user, '15');
      await user.click(screen.getByRole('button', { name: /apply/i }));
      await open();

      expect(await screen.findByLabelText(/^start date$/i)).toBeInTheDocument();
      expect(
        await screen.findByRole('radio', { name: /custom range/i }),
      ).toBeChecked();
      expect(screen.getByRole('button', { name: /apply/i })).toBeDisabled();
    });
  });

  describe('CustomDateRangeFilterDropdown presets', () => {
    const setupPresets = (props = {}) => {
      render(
        <Filter>
          <Filter.CustomDateRangeFilterDropdown
            label="Created"
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

      const getOptions = () => screen.findAllByRole('radio');

      return { user, open, pick, getOptions };
    };

    it('should offer the built-in presets when none are supplied', async () => {
      const { open } = setupPresets();

      await open();

      expect(await screen.findByText('Last 24 hours')).toBeInTheDocument();
      expect(screen.getByText('Last 7 days')).toBeInTheDocument();
      expect(screen.getByText('Last 30 days')).toBeInTheDocument();
      expect(screen.getByText('Custom range')).toBeInTheDocument();
    });

    it('should take the rolling windows from props', async () => {
      const { open, getOptions } = setupPresets({
        rollingPresets: [
          { label: 'Past hour', duration: '1h' },
          { label: 'Past day', duration: '1day' },
          { label: 'Past week', duration: '7days' },
          { label: 'Past quarter', duration: '90d' },
        ],
        labelCustomRange: 'Pick dates',
      });

      await open();

      expect(await getOptions()).toHaveLength(5);
      expect(screen.getByText('Past hour')).toBeInTheDocument();
      expect(screen.getByText('Past quarter')).toBeInTheDocument();
      expect(screen.getByText('Pick dates')).toBeInTheDocument();
      expect(screen.queryByText('Last 24 hours')).not.toBeInTheDocument();
    });

    it('should roll a supplied window back by its duration', async () => {
      const onApply = vi.fn();
      const { open, pick } = setupPresets({
        onApply,
        rollingPresets: [
          { label: 'Past hour', duration: '1h' },
          { label: 'Past quarter', duration: '90d' },
        ],
      });

      await open();
      await pick('Past hour');

      const [{ from, to }] = onApply.mock.lastCall as [
        Required<DateRangeWithTime>,
      ];

      expect(to.getTime() - from.getTime()).toBe(60 * 60 * 1000);
    });

    it('should keep a supplied window marked by its derived id when reopened', async () => {
      const { open, pick } = setupPresets({
        rollingPresets: [{ label: 'Past quarter', duration: '90d' }],
      });

      await open();
      await pick('Past quarter');
      await open();

      expect(
        await screen.findByRole('radio', { name: /past quarter/i }),
      ).toBeChecked();
    });

    it('should resolve a built-in preset to a rolling window', async () => {
      const onApply = vi.fn();
      const { open, pick } = setupPresets({ onApply });

      await open();
      await pick('Last 24 hours');

      const [{ from, to }] = onApply.mock.lastCall as [
        Required<DateRangeWithTime>,
      ];

      expect(to.getTime() - from.getTime()).toBe(24 * 60 * 60 * 1000);
    });

    it('should leave the custom range out when it is switched off', async () => {
      const { open, getOptions } = setupPresets({ showCustomRange: false });

      await open();

      expect(await getOptions()).toHaveLength(3);
      expect(screen.queryByText('Custom range')).not.toBeInTheDocument();
    });

    it('should never show the calendar without a custom range', async () => {
      const { open } = setupPresets({
        showCustomRange: false,
        revealCalendarOnCustom: false,
      });

      await open();

      expect(await screen.findByText('Last 24 hours')).toBeInTheDocument();
      expect(screen.queryByLabelText(/^start date$/i)).not.toBeInTheDocument();
    });

    it('should drop a supplied manual-selection entry as well', async () => {
      const { open, getOptions } = setupPresets({
        showCustomRange: false,
        presets: [
          {
            value: 'today',
            label: 'Today',
            resolve: (now: Date) => ({ from: now, to: now }),
          },
          { value: 'custom', label: 'Choose', resolve: () => ({}) },
        ],
      });

      await open();

      expect(await getOptions()).toHaveLength(1);
      expect(screen.queryByText('Choose')).not.toBeInTheDocument();
    });

    it('should show a single month with shared navigation when asked', async () => {
      const { open, pick } = setupPresets({ numberOfMonths: 1 });

      await open();
      await pick('Custom range');

      expect(
        await screen.findByRole('button', { name: /^previous month$/i }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', {
          name: /previous month for start date/i,
        }),
      ).not.toBeInTheDocument();
    });

    it('should move both months as a pair when asked', async () => {
      const { open, pick } = setupPresets({ navigationMode: 'together' });

      await open();
      await pick('Custom range');

      expect(
        await screen.findByRole('button', { name: /^previous month$/i }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', {
          name: /previous month for start date/i,
        }),
      ).not.toBeInTheDocument();
    });

    it('should read the dates numerically when asked', async () => {
      const { open } = setupPresets({
        dateDisplayFormat: 'numeric',
        defaultRange: { from: new Date(2026, 8, 3), to: new Date(2026, 8, 20) },
      });

      await open();

      expect(await screen.findByLabelText(/^start date$/i)).toHaveValue(
        '09/03/2026',
      );
    });

    it('should show two months with their own navigation by default', async () => {
      const { open, pick } = setupPresets();

      await open();
      await pick('Custom range');

      expect(
        await screen.findByRole('button', {
          name: /previous month for start date/i,
        }),
      ).toBeInTheDocument();
    });
  });

  describe('CustomDateRangeFilterDropdown applied badge', () => {
    const setupBadge = (props = {}) => {
      render(
        <Filter>
          <Filter.CustomDateRangeFilterDropdown
            label="Created"
            revealCalendarOnCustom
            animationDuration={0}
            {...props}
          />
        </Filter>,
      );

      const user = userEvent.setup();
      const getTrigger = () =>
        screen.findByRole('button', { name: /created/i });

      const applyCustom = async () => {
        await user.click(await getTrigger());
        await user.click(await screen.findByText('Custom range'));
        await pickDay(user, '15');
        await user.click(screen.getByRole('button', { name: /apply/i }));
      };

      return { user, getTrigger, applyCustom };
    };

    it('should show one badge with both ends by default', async () => {
      const { getTrigger, applyCustom } = setupBadge();

      await applyCustom();

      const trigger = await getTrigger();

      expect(
        within(trigger).getByText(
          /^[A-Z][a-z]{2} \d{1,2} - [A-Z][a-z]{2} \d{1,2}$/,
        ),
      ).toBeInTheDocument();
      expect(within(trigger).queryByText('to')).not.toBeInTheDocument();
    });

    it('should show each end in its own badge when split', async () => {
      const { getTrigger, applyCustom } = setupBadge({
        appliedRangeDisplay: 'split',
      });

      await applyCustom();

      const trigger = await getTrigger();

      expect(
        within(trigger).getAllByText(/^\d{1,2} [A-Z][a-z]{2} \d{4}$/),
      ).toHaveLength(2);
      expect(within(trigger).getByText('to')).toBeInTheDocument();
    });

    it('should show a default range as applied before anything is picked', async () => {
      const { getTrigger } = setupBadge({
        appliedRangeDisplay: 'split',
        defaultRange: { from: new Date(2026, 6, 6), to: new Date(2026, 7, 4) },
      });

      const trigger = await getTrigger();

      expect(within(trigger).getByText('6 Jul 2026')).toBeInTheDocument();
      expect(within(trigger).getByText('to')).toBeInTheDocument();
      expect(within(trigger).getByText('4 Aug 2026')).toBeInTheDocument();
    });

    it('should not offer apply for a default range until it changes', async () => {
      const { user, getTrigger } = setupBadge({
        defaultRange: { from: new Date(2026, 6, 6), to: new Date(2026, 7, 4) },
      });

      await user.click(await getTrigger());

      expect(screen.getByRole('button', { name: /apply/i })).toBeDisabled();
    });

    it('should take the word between the ends from props', async () => {
      const { getTrigger, applyCustom } = setupBadge({
        appliedRangeDisplay: 'split',
        labelRangeSeparator: 'until',
      });

      await applyCustom();

      expect(within(await getTrigger()).getByText('until')).toBeInTheDocument();
    });
  });
});
