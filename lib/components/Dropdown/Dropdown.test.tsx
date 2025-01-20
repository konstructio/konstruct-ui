import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { DropdownProps, Option } from './Dropdown.types';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const defaultProps = {
    label: 'Dropdown',
    name: 'dropdown-label',
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
    ],
  } satisfies DropdownProps;

  const setup = (props?: Partial<DropdownProps>, wrapper?: FC) => {
    const { container: component } = render(
      <Dropdown {...defaultProps} {...props} />,
      { wrapper },
    );

    const user = userEvent.setup();
    const getComboBox = () => screen.getByRole('combobox');
    const getElement = (value: string | RegExp) =>
      screen.getByText(new RegExp(value, 'i'));

    return {
      component,
      user,
      getComboBox,
      getElement,
    };
  };

  it('should render correctly', () => {
    const { getComboBox } = setup();

    const comboBox = getComboBox();

    expect(comboBox).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render the options correctly', async () => {
    const { getComboBox } = setup();

    const comboBox = getComboBox();

    await userEvent.click(comboBox);

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(defaultProps.options.length);
  });

  it('should call the onChange function when an option is selected', async () => {
    const onChange = vitest.fn();
    const { getComboBox, getElement } = setup({ onChange });

    const comboBox = getComboBox();

    await userEvent.click(comboBox);

    const option = getElement(defaultProps.options[0].label);

    await userEvent.click(option);

    expect(onChange).toHaveBeenCalledWith(defaultProps.options[0]);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should call the onChange function when select two times the options', async () => {
    const onChange = vitest.fn();
    const { getComboBox, getElement } = setup({ onChange });

    const comboBox = getComboBox();

    await userEvent.click(comboBox);

    const option1 = getElement(defaultProps.options[0].label);

    await userEvent.click(option1);
    await userEvent.click(comboBox);

    const option2 = getElement(defaultProps.options[1].label);

    await userEvent.click(option2);

    expect(onChange).toHaveBeenLastCalledWith(defaultProps.options[1]);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('should send the current selected value in a form', async () => {
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

    const options: Option[] = [
      {
        label: 'Option 1',
        value: 'option-1',
      },
    ];

    const { user, getComboBox } = setup({ name: 'dropdown', options }, Wrapper);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    const comboBox = getComboBox();

    await user.click(comboBox);
    await user.keyboard('[ArrowDown]');
    await user.keyboard('[Enter]');
    await user.click(button);

    expect(handleSubmit).toHaveBeenCalledWith({
      dropdown: options.at(0)?.value,
    });
  });
});
