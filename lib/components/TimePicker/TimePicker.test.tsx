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
});
