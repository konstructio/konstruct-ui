import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren } from 'react';

import { TimePicker } from './TimePicker';
import { TimePickerProps } from './TimePicker.types';

describe('TimePicker', () => {
  const setup = (
    props?: Partial<TimePickerProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const defaultProps = {
      name: 'time-picker-name',
    } satisfies TimePickerProps;

    const { container: component } = render(
      <TimePicker {...defaultProps} {...props} />,
      {
        wrapper,
      },
    );

    const user = userEvent.setup();

    const getButton = async () =>
      screen.findByRole('button', { name: props?.name ?? defaultProps.name });

    const handleOpenTimePicker = async () => {
      const button = screen.getByRole('button', {
        name: props?.name ?? defaultProps.name,
      });
      await user.click(button);
    };

    const getHoursList = async () => {
      return screen.findByRole('listbox', { name: 'hours' });
    };

    const getMinutesList = async () => {
      return screen.findByRole('listbox', { name: 'minutes' });
    };

    const getMeridianList = async () => {
      return screen.findByRole('listbox', { name: 'meridian' });
    };

    const selectHour = async (hour: string) => {
      const hoursList = await getHoursList();

      const hourNode = await within(hoursList).findByText(
        new RegExp(new RegExp(`^${hour}$`), 'i'),
      );

      await user.click(hourNode);
    };

    const selectMinute = async (minute: string) => {
      const minutesList = await getMinutesList();

      const minuteNode = await within(minutesList).findByText(minute);

      await user.click(minuteNode);
    };

    const clickAM = async () => {
      const meridianList = await getMeridianList();

      const amButton = await within(meridianList).findByText(/am/i);

      await user.click(amButton);
    };

    const clickPM = async () => {
      const meridianList = await getMeridianList();

      const pmButton = await within(meridianList).findByText(/pm/i);

      await user.click(pmButton);
    };

    return {
      component,
      user,
      getButton,
      handleOpenTimePicker,
      getHoursList,
      getMinutesList,
      selectHour,
      selectMinute,
      clickAM,
      clickPM,
    };
  };

  it('should render correctly', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup({ label: 'Time picker label' });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it("should doesn't have violations when the listbox is open", async () => {
    const { component, handleOpenTimePicker } = setup({
      label: 'Time picker label',
    });

    await handleOpenTimePicker();
    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should open time picker when button is clicked', async () => {
    const { handleOpenTimePicker, getHoursList } = setup();

    await handleOpenTimePicker();

    const hoursList = await getHoursList();

    expect(hoursList).toBeInTheDocument();
  });

  it('should open and close time picker', async () => {
    const { handleOpenTimePicker } = setup();

    await handleOpenTimePicker();
    await handleOpenTimePicker();

    expect(
      screen.queryByRole('listbox', { name: 'hours' }),
    ).not.toBeInTheDocument();
  });

  it.each(Array.from({ length: 12 }, (_, index) => index + 1))(
    'should select hour with format 12 and hour: %s',
    async (hour) => {
      const { handleOpenTimePicker, selectHour, getButton } = setup({
        format: '12',
        time: new Date(2025, 0, 1, 0, 0, 0),
      });

      await handleOpenTimePicker();
      await selectHour(hour.toString());

      const button = await getButton();

      expect(button).toHaveTextContent(new RegExp(hour.toString(), 'i'));
    },
  );

  it.each(Array.from({ length: 24 }, (_, index) => index))(
    'should select hour with format 24 and hour: %s',
    async (hour) => {
      const { handleOpenTimePicker, selectHour, getButton } = setup({
        format: '24',
        time: new Date(2025, 0, 1, 0, 0, 0),
      });

      await handleOpenTimePicker();
      await selectHour(hour.toString());

      const button = await getButton();

      expect(button).toHaveTextContent(new RegExp(hour.toString(), 'i'));
    },
  );

  it.each(Array.from({ length: 60 }, (_, index) => index))(
    'should select minute with format 12 and minute: %s',
    async (minute) => {
      const { handleOpenTimePicker, selectMinute, getButton } = setup({
        format: '12',
        time: new Date(2025, 0, 1, 0, 0, 0),
      });

      const formattedMinute = `0${minute}`.slice(-2);

      await handleOpenTimePicker();
      await selectMinute(formattedMinute);

      const button = await getButton();

      expect(button).toHaveTextContent(
        new RegExp(formattedMinute.toString(), 'i'),
      );
    },
  );

  it('should select am in format 12', async () => {
    const {
      handleOpenTimePicker,
      selectHour,
      selectMinute,
      clickAM,
      getButton,
    } = setup({
      format: '12',
      time: new Date(2025, 0, 1, 0, 0, 0),
    });

    await handleOpenTimePicker();
    await selectHour('11');
    await selectMinute('30');

    await clickAM();

    const button = await getButton();

    expect(button).toHaveTextContent('AM');
  });

  it('should select pm in format 12', async () => {
    const {
      handleOpenTimePicker,
      selectHour,
      selectMinute,
      clickPM,
      getButton,
    } = setup({
      format: '12',
      time: new Date(2025, 0, 1, 0, 0, 0),
    });

    await handleOpenTimePicker();
    await selectHour('11');
    await selectMinute('30');

    await clickPM();

    const button = await getButton();

    expect(button).toHaveTextContent('PM');
  });

  it.each(['AM', 'PM'])(
    'should send the time picker data inside a form when format is 12 and %s is selected',
    async (meridian) => {
      const handleSubmit = vitest.fn();

      const Wrapper: FC<PropsWithChildren> = ({ children }) => {
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              handleSubmit(data);
            }}
          >
            {children}
            <button type="submit">Submit</button>
          </form>
        );
      };

      const {
        user,
        handleOpenTimePicker,
        selectHour,
        selectMinute,
        clickAM,
        clickPM,
      } = setup({ format: '12', name: 'timepicker' }, Wrapper);

      await handleOpenTimePicker();
      await selectHour('11');
      await selectMinute('30');

      if (meridian === 'AM') {
        await clickAM();
      } else {
        await clickPM();
      }

      const button = screen.getByRole('button', {
        name: /submit/i,
      });

      await user.click(button);

      expect(handleSubmit).toHaveBeenCalledWith({
        timepicker: `11:30 ${meridian}`,
      });
    },
  );

  it('should send the time picker data inside a form when format is 24', async () => {
    const handleSubmit = vitest.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children }) => {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            handleSubmit(data);
          }}
        >
          {children}
          <button type="submit">Submit</button>
        </form>
      );
    };

    const { user, handleOpenTimePicker, selectHour, selectMinute } = setup(
      { format: '24', name: 'timepicker' },
      Wrapper,
    );

    await handleOpenTimePicker();
    await selectHour('16');
    await selectMinute('30');

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({ timepicker: '16:30' });
  });

  describe('Input Mode with List', () => {
    const setup = (props?: Partial<TimePickerProps>) => {
      const defaultProps = {
        name: 'time-input',
        mode: 'input' as const,
        showList: true,
      } satisfies Partial<TimePickerProps>;

      const { container: component } = render(
        <TimePicker {...defaultProps} {...props} />,
      );

      const user = userEvent.setup();

      const getInput = () =>
        screen.getByRole('textbox', { name: props?.name ?? defaultProps.name });

      const getHoursList = () =>
        screen.queryByRole('listbox', { name: 'hours' });

      const getMinutesList = () =>
        screen.queryByRole('listbox', { name: 'minutes' });

      const getMeridianList = () =>
        screen.queryByRole('listbox', { name: 'meridian' });

      return {
        component,
        user,
        getInput,
        getHoursList,
        getMinutesList,
        getMeridianList,
      };
    };

    it('should render an input instead of a button', () => {
      const { getInput } = setup();

      expect(getInput()).toBeInTheDocument();
      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should show placeholder when provided', () => {
      const { getInput } = setup({ placeholder: '12:00 PM' });

      expect(getInput()).toHaveAttribute('placeholder', '12:00 PM');
    });

    it('should open list on focus', async () => {
      const { user, getInput, getHoursList } = setup();

      await user.click(getInput());

      expect(getHoursList()).toBeInTheDocument();
    });

    it('should filter invalid characters for 24h format', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, 'abc12:34xyz');

      expect(input).toHaveValue('12:34');
    });

    it('should filter invalid characters for 12h format', async () => {
      const { user, getInput } = setup({ format: '12' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '12:30 PMxyz');

      expect(input).toHaveValue('12:30 PM');
    });

    it('should auto-insert colon after 2 digits', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '12');

      expect(input).toHaveValue('12:');
    });

    it('should allow deleting the colon', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '12');
      expect(input).toHaveValue('12:');

      await user.type(input, '{Backspace}');
      expect(input).toHaveValue('12');
    });

    it('should convert AM/PM letters to uppercase', async () => {
      const { user, getInput } = setup({ format: '12' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '12:30 pm');

      expect(input).toHaveValue('12:30 PM');
    });

    it('should show error on blur for invalid time', async () => {
      const { user, getInput } = setup({
        format: '24',
        showList: false,
      });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '99:99');
      await user.tab();

      expect(screen.getByText('Invalid time')).toBeInTheDocument();
    });

    it('should not show error while typing', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '99');

      expect(screen.queryByText('Invalid time')).not.toBeInTheDocument();
    });

    it('should clear error when focusing input again', async () => {
      const { user, getInput } = setup({
        format: '24',
        showList: false,
      });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '99:99');
      await user.tab();

      expect(screen.getByText('Invalid time')).toBeInTheDocument();

      await user.click(input);

      expect(screen.queryByText('Invalid time')).not.toBeInTheDocument();
    });

    it('should auto-format to HH:MM for 24h format on blur', async () => {
      const { user, getInput } = setup({
        format: '24',
        showList: false,
      });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '3:5');
      await user.tab();

      expect(input).toHaveValue('03:05');
    });

    it('should display external error prop', () => {
      const { getInput } = setup({ error: 'Custom error message' });

      getInput();

      expect(screen.getByText('Custom error message')).toBeInTheDocument();
    });

    it('should show external error over internal error', async () => {
      const { user, getInput } = setup({
        format: '24',
        error: 'External error',
      });

      const input = getInput();
      await user.type(input, '99:99');
      await user.tab();

      expect(screen.getByText('External error')).toBeInTheDocument();
      expect(screen.queryByText('Invalid time')).not.toBeInTheDocument();
    });

    it('should sync list selection when typing valid time', async () => {
      const { user, getInput, getHoursList, getMinutesList } = setup({
        format: '24',
        time: new Date(2025, 0, 1, 0, 0, 0),
      });

      const input = getInput();
      await user.click(input);
      await user.clear(input);
      await user.type(input, '15:30');

      const hoursList = getHoursList();
      const minutesList = getMinutesList();

      expect(within(hoursList!).getByText('15').closest('li')).toHaveAttribute(
        'data-active',
        'true',
      );
      expect(
        within(minutesList!).getByText('30').closest('li'),
      ).toHaveAttribute('data-active', 'true');
    });

    it('should maintain ring while list is open', async () => {
      const { user, getInput } = setup();

      const input = getInput();
      await user.click(input);

      expect(input).toHaveAttribute('data-open', 'true');
    });

    it("should doesn't have violations in input mode", async () => {
      const { component, user, getInput } = setup({
        label: 'Time input label',
      });

      await user.click(getInput());
      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });
  });

  describe('Input Mode without List', () => {
    const setup = (props?: Partial<TimePickerProps>) => {
      const defaultProps = {
        name: 'time-input-no-list',
        mode: 'input' as const,
        showList: false,
      } satisfies Partial<TimePickerProps>;

      const { container: component } = render(
        <TimePicker {...defaultProps} {...props} />,
      );

      const user = userEvent.setup();

      const getInput = () =>
        screen.getByRole('textbox', { name: props?.name ?? defaultProps.name });

      return {
        component,
        user,
        getInput,
      };
    };

    it('should render an input without list', () => {
      const { getInput } = setup();

      expect(getInput()).toBeInTheDocument();
      expect(
        screen.queryByRole('listbox', { name: 'hours' }),
      ).not.toBeInTheDocument();
    });

    it('should not open list on focus when showList is false', async () => {
      const { user, getInput } = setup();

      await user.click(getInput());

      expect(
        screen.queryByRole('listbox', { name: 'hours' }),
      ).not.toBeInTheDocument();
    });

    it('should allow typing time manually', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '14:45');

      expect(input).toHaveValue('14:45');
    });

    it('should validate on blur without list', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '25:00');
      await user.tab();

      expect(screen.getByText('Invalid time')).toBeInTheDocument();
    });

    it('should accept valid time on blur without list', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '14:30');
      await user.tab();

      expect(screen.queryByText('Invalid time')).not.toBeInTheDocument();
      expect(input).toHaveValue('14:30');
    });

    it('should auto-format for 24h without list', async () => {
      const { user, getInput } = setup({ format: '24' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '9:5');
      await user.tab();

      expect(input).toHaveValue('09:05');
    });

    it('should work with 12h format without list', async () => {
      const { user, getInput } = setup({ format: '12' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '12:30 PM');
      await user.tab();

      expect(screen.queryByText('Invalid time')).not.toBeInTheDocument();
    });

    it('should show error for invalid 12h format without list', async () => {
      const { user, getInput } = setup({ format: '12' });

      const input = getInput();
      await user.clear(input);
      await user.type(input, '13:00 PM');
      await user.tab();

      expect(screen.getByText('Invalid time')).toBeInTheDocument();
    });

    it('should send data in form submission', async () => {
      const handleSubmit = vitest.fn();

      const Wrapper: FC<PropsWithChildren> = ({ children }) => {
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const data = Object.fromEntries(formData.entries());
              handleSubmit(data);
            }}
          >
            {children}
            <button type="submit">Submit</button>
          </form>
        );
      };

      const { container } = render(
        <TimePicker
          name="time-form"
          mode="input"
          showList={false}
          format="24"
        />,
        { wrapper: Wrapper },
      );

      const user = userEvent.setup();
      const input = screen.getByRole('textbox', { name: 'time-form' });

      await user.clear(input);
      await user.type(input, '16:45');
      await user.tab();

      const submitButton = screen.getByRole('button', { name: /submit/i });
      await user.click(submitButton);

      expect(handleSubmit).toHaveBeenCalledWith({ 'time-form': '16:45' });
      expect(container).toBeInTheDocument();
    });

    it("should doesn't have violations without list", async () => {
      const { component } = setup({
        label: 'Time input no list label',
      });

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });
  });
});
