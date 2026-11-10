import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Filter } from './Filter';
import { FILTER_SHEET_QUERY } from './hooks';

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

const mockPhone = () => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches: query === FILTER_SHEET_QUERY,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
};

beforeAll(async () => {
  await import('@/components/DateRangePicker/components/CalendarPanel/components/CalendarMonth/components/CalendarMonthContent/CalendarMonthContent');
});

describe('Filter on phones', () => {
  const setup = (
    props: Partial<
      Parameters<typeof Filter.CustomDateRangeFilterDropdown>[0]
    > = {},
  ) => {
    const onApply = vi.fn();
    const user = userEvent.setup();
    const { container } = render(
      <Filter>
        <Filter.CustomDateRangeFilterDropdown
          label="Created"
          appliedRangeDisplay="split"
          presets={presets}
          revealCalendarOnCustom
          applyOnPresetSelect
          animationDuration={0}
          onApply={onApply}
          {...props}
        />
      </Filter>,
    );

    const trigger = () => screen.getByRole('button', { name: /created/i });
    const open = async () => user.click(trigger());
    const sheet = (name: string) => screen.findByRole('dialog', { name });

    return { container, onApply, open, sheet, trigger, user };
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockPhone();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should list the presets in a sheet with no actions until something is applied', async () => {
    const { open, sheet } = setup();

    await open();

    const presetSheet = await sheet('Created');

    expect(
      within(presetSheet).getByRole('button', { name: 'Last 7 days' }),
    ).toBeInTheDocument();
    expect(
      within(presetSheet).queryByRole('button', { name: /apply/i }),
    ).not.toBeInTheDocument();
    expect(
      within(presetSheet).queryByRole('button', { name: /clear/i }),
    ).not.toBeInTheDocument();
  });

  it('should apply a preset and close as soon as it is tapped', async () => {
    const { onApply, open, sheet, user } = setup();

    await open();
    await user.click(
      within(await sheet('Created')).getByRole('button', {
        name: 'Last 7 days',
      }),
    );

    expect(onApply).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('should show the applied range as a single chip even when split is asked for', async () => {
    const { open, sheet, trigger, user } = setup();

    await open();
    await user.click(
      within(await sheet('Created')).getByRole('button', {
        name: 'Last 7 days',
      }),
    );

    await waitFor(() => {
      expect(trigger()).toHaveTextContent(/ - /);
    });
    expect(trigger()).not.toHaveTextContent(/\bto\b/);
  });

  it('should offer clear once a preset is applied', async () => {
    const { onApply, open, sheet, user } = setup();

    await open();
    await user.click(
      within(await sheet('Created')).getByRole('button', {
        name: 'Last 7 days',
      }),
    );
    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    await open();
    await user.click(
      within(await sheet('Created')).getByRole('button', { name: /clear/i }),
    );

    expect(onApply).toHaveBeenLastCalledWith();
  });

  it('should move to the calendar with its actions for a custom range', async () => {
    const { open, sheet, user } = setup();

    await open();
    await user.click(
      within(await sheet('Created')).getByRole('button', {
        name: 'Custom range',
      }),
    );

    const calendarSheet = await sheet('Custom range');

    expect(
      await within(calendarSheet).findByRole('application', {
        name: /date range picker calendar/i,
      }),
    ).toBeInTheDocument();
    expect(
      within(calendarSheet).getByRole('button', { name: /apply/i }),
    ).toBeInTheDocument();
    expect(
      within(calendarSheet).getByRole('button', { name: /clear/i }),
    ).toBeInTheDocument();
  });

  it('should reopen on the calendar while a custom range is applied', async () => {
    const { open, sheet } = setup({
      defaultRange: {
        from: new Date(2026, 10, 3),
        to: new Date(2026, 10, 5),
      },
    });

    await open();

    expect(await sheet('Custom range')).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container, open, sheet } = setup();

    await open();
    await sheet('Created');

    expect(await axe(container.ownerDocument.body)).toHaveNoViolations();
  });

  describe('badge multi-select', () => {
    const setupBadges = () => {
      const onApply = vi.fn();
      const user = userEvent.setup();
      const { container } = render(
        <Filter>
          <Filter.BadgeMultiSelect
            label="Status"
            options={[
              { id: 'running', label: 'Running', variant: 'success' },
              { id: 'stopped', label: 'Stopped', variant: 'warning' },
            ]}
            onApply={onApply}
          />
        </Filter>,
      );

      return { container, onApply, user };
    };

    it('should open as a sheet named after the filter', async () => {
      const { user } = setupBadges();

      await user.click(screen.getByRole('button', { name: /status/i }));

      const statusSheet = await screen.findByRole('dialog', { name: 'Status' });

      expect(
        within(statusSheet).getByRole('checkbox', { name: 'Running' }),
      ).toBeInTheDocument();
    });

    it('should select an option by tapping its badge', async () => {
      const { onApply, user } = setupBadges();

      await user.click(screen.getByRole('button', { name: /status/i }));

      const statusSheet = await screen.findByRole('dialog', { name: 'Status' });

      await user.click(within(statusSheet).getByText('Running'));
      await user.click(
        within(statusSheet).getByRole('button', { name: /apply/i }),
      );

      expect(onApply).toHaveBeenCalledWith([
        expect.objectContaining({ id: 'running' }),
      ]);
    });

    it("shouldn't have accessibility violations", async () => {
      const { container, user } = setupBadges();

      await user.click(screen.getByRole('button', { name: /status/i }));
      await screen.findByRole('dialog', { name: 'Status' });

      expect(await axe(container.ownerDocument.body)).toHaveNoViolations();
    });
  });

  describe('time filter', () => {
    const lastHour = new Date(2026, 10, 10, 9, 0);

    const setupTime = () => {
      const onApply = vi.fn();
      const user = userEvent.setup();
      const { container } = render(
        <Filter>
          <Filter.TimeFilterDropdown
            label="Time"
            showTimePicker={false}
            presets={[{ label: 'Last 1 hour', value: lastHour }]}
            onApply={onApply}
          />
        </Filter>,
      );

      const open = async () => {
        await user.click(screen.getByRole('button', { name: /time/i }));

        return screen.findByRole('dialog', { name: 'Time' });
      };

      return { container, onApply, open, user };
    };

    it('should apply a preset from the sheet', async () => {
      const { onApply, open, user } = setupTime();

      const timeSheet = await open();

      await user.click(
        within(timeSheet).getByRole('button', { name: 'Last 1 hour' }),
      );
      await user.click(
        within(timeSheet).getByRole('button', { name: /apply/i }),
      );

      expect(onApply).toHaveBeenCalledWith(lastHour);
    });

    it("shouldn't have accessibility violations", async () => {
      const { container, open } = setupTime();

      await open();

      expect(await axe(container.ownerDocument.body)).toHaveNoViolations();
    });
  });
});
