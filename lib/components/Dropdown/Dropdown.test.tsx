import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DropdownProps } from './Dropdown.types';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const defaultProps = {
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

  const setup = (props?: Partial<DropdownProps>) => {
    render(<Dropdown {...defaultProps} {...props} />);

    const user = userEvent.setup();
    const getComboBox = () => screen.getByRole('combobox');
    const getElement = (value: string | RegExp) =>
      screen.getByText(new RegExp(value, 'i'));

    return {
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
    expect(onChange).toHaveBeenCalledOnce();
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
});
