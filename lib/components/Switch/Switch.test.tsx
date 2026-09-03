import React, { FC, PropsWithChildren, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Props } from './Switch.types';
import { Switch } from './Switch';

describe('Switch', () => {
  const defaultProps = {
    label: 'Switch',
  } satisfies Props;

  const setup = (props?: Partial<Props>, wrapper?: FC<PropsWithChildren>) => {
    const { container: component } = render(
      <Switch {...defaultProps} {...props} />,
      { wrapper: wrapper },
    );

    const user = userEvent.setup();
    const getSwitch = () => screen.findByRole('switch');

    return {
      component,
      user,
      getSwitch,
    };
  };

  it('should render correctly', async () => {
    const { getSwitch } = setup();

    const switchComponent = await getSwitch();

    expect(switchComponent).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render the aurora track by default', async () => {
    const { getSwitch } = setup();

    const switchComponent = await getSwitch();

    expect(switchComponent).toHaveClass('bg-aurora-500');
  });

  it('should render the black track when the black variant is used', async () => {
    const { getSwitch } = setup({ variant: 'black' });

    const switchComponent = await getSwitch();

    expect(switchComponent).toHaveClass('bg-black');
  });

  it("should doesn't have violations with the black variant", async () => {
    const { component } = setup({ variant: 'black' });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should activate the switch when the user has been clicked on it', async () => {
    const handleSubmit = vitest.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children, ...props }) => {
      const [value, setValue] = useState(false);
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            handleSubmit(data);
          }}
        >
          {React.cloneElement(children as React.ReactElement<Props>, {
            ...props,
            value,
            onChange: (value: boolean) => setValue(value),
          })}
          <button type="submit">Submit</button>
        </form>
      );
    };

    const { user, getSwitch } = setup({ name: 'switch' }, Wrapper);

    const switchComponent = await getSwitch();

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(switchComponent);
    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({ switch: 'true' });
  });

  it('should send the switch false value when the user has been submitted the form without change the switch status', async () => {
    const handleSubmit = vitest.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children, ...props }) => {
      const [value, setValue] = useState(false);
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            handleSubmit(data);
          }}
        >
          {React.cloneElement(children as React.ReactElement<Props>, {
            ...props,
            value,
            onChange: (value: boolean) => setValue(value),
          })}
          <button type="submit">Submit</button>
        </form>
      );
    };

    const { user } = setup({ name: 'switch' }, Wrapper);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({ switch: 'false' });
  });
  describe('labels and isLoading', () => {
    it('should show the label of the current state and switch it on toggle', async () => {
      const { user, getSwitch } = setup({
        label: undefined,
        labels: { on: 'Enabled', off: 'Disabled' },
        defaultChecked: false,
      });

      const switchComponent = await getSwitch();

      expect(screen.getByText('Disabled')).toBeInTheDocument();
      expect(switchComponent).toHaveAccessibleName('Disabled');

      await user.click(switchComponent);

      expect(screen.getByText('Enabled')).toBeInTheDocument();
      expect(switchComponent).toHaveAccessibleName('Enabled');
    });

    it('should follow the controlled value when using labels', async () => {
      const { getSwitch } = setup({
        label: undefined,
        labels: { on: 'Enabled', off: 'Disabled' },
        value: true,
      });

      expect(await getSwitch()).toHaveAccessibleName('Enabled');
    });

    it('should disable the switch and announce it as busy while loading', async () => {
      const onChange = vi.fn();
      const { user, getSwitch } = setup({ isLoading: true, onChange });

      const switchComponent = await getSwitch();

      expect(switchComponent).toBeDisabled();
      expect(switchComponent).toHaveAttribute('aria-busy', 'true');

      await user.click(switchComponent);

      expect(onChange).not.toHaveBeenCalled();
    });

    it("shouldn't have accessibility violations with labels and loading", async () => {
      const { component } = setup({
        label: undefined,
        labels: { on: 'Enabled', off: 'Disabled' },
        isLoading: true,
      });

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });
  });
});
