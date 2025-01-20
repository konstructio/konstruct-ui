import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('Checkbox', () => {
  const defaultProps = {
    defaultChecked: false,
    name: 'button-name',
    label: 'Checkbox',
    ariaLabelledBy: 'checkbox-label',
    title: 'Checkbox title',
  } satisfies CheckboxProps;

  const setup = (
    props?: Partial<CheckboxProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const { container } = render(<Checkbox {...defaultProps} {...props} />, {
      wrapper,
    });

    const user = userEvent.setup();

    return {
      component: container,
      user,
      getCheckbox: () => screen.getByRole('checkbox'),
    };
  };

  it('should render the component', () => {
    const { getCheckbox } = setup();

    const checkbox = getCheckbox();

    expect(checkbox).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render not checked component', () => {
    const { getCheckbox } = setup();

    const checkbox = getCheckbox();

    expect(checkbox).not.toBeChecked();
  });

  it('should render checked component', () => {
    const { getCheckbox } = setup({ defaultChecked: true });

    const checkbox = getCheckbox();

    expect(checkbox).toBeChecked();
  });

  it('should render disabled component', () => {
    const { getCheckbox } = setup({ disabled: true });

    const checkbox = getCheckbox();

    expect(checkbox).toBeDisabled();
  });

  it('should send the checkbox name inside form', async () => {
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

    const { user, getCheckbox } = setup({ name: 'checkbox' }, Wrapper);

    const checkbox = getCheckbox();
    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(checkbox);
    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({ checkbox: 'on' });
  });
});
