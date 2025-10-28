import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../Button/Button';

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
      getCheckbox: async () => screen.findByRole('checkbox'),
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the component', async () => {
    const { getCheckbox } = setup();

    const checkbox = await getCheckbox();

    expect(checkbox).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render not checked component', async () => {
    const { getCheckbox } = setup();

    const checkbox = await getCheckbox();

    expect(checkbox).not.toBeChecked();
  });

  it('should render checked component', async () => {
    const { getCheckbox } = setup({ defaultChecked: true });

    const checkbox = await getCheckbox();

    expect(checkbox).toBeChecked();
  });

  it('should render disabled component', async () => {
    const { getCheckbox } = setup({ disabled: true });

    const checkbox = await getCheckbox();

    expect(checkbox).toBeDisabled();
  });

  describe('Form', () => {
    const mockSubmit = vi.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const data = Object.fromEntries(formData.entries());
          mockSubmit(data);
        }}
      >
        {children}

        <Button type="submit">Submit</Button>
      </form>
    );

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('should send the checkbox name inside a form', async () => {
      const { user, getCheckbox } = setup({ name: 'checkbox' }, Wrapper);

      const checkbox = await getCheckbox();
      const button = screen.getByRole('button', {
        name: /submit/i,
      });

      await user.click(checkbox);
      await user.click(button);

      expect(mockSubmit).toHaveBeenCalledWith({ checkbox: 'on' });
    });
  });
});
