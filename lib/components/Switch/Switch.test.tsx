import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { SwitchProps } from './Switch.types';
import { Switch } from './Switch';

describe('Switch', () => {
  const defaultProps = {
    defaultChecked: false,
    label: 'Switch',
  } satisfies SwitchProps;

  const setup = (
    props?: Partial<SwitchProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
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

  it('should activate the switch when the user has been clicked on it', async () => {
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

    const { user } = setup({ name: 'switch', defaultChecked: false }, Wrapper);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({ switch: 'false' });
  });
});
