import { cloneElement, FC, PropsWithChildren, useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { DropdownProps, Option } from './Dropdown.types';
import { Dropdown } from './Dropdown';
import { Modal } from '@/components/Modal/Modal';

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

    expect(onChange).toHaveBeenCalledWith({
      target: { value: defaultProps.options[0].value, name: defaultProps.name },
    });
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

    expect(onChange).toHaveBeenLastCalledWith({
      target: { value: defaultProps.options[1].value, name: defaultProps.name },
    });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('should send the current selected value in a form', async () => {
    const handleSubmit = vitest.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children }) => {
      const [value, setValue] = useState<string>();
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            handleSubmit(data);
          }}
        >
          {cloneElement(children as React.ReactElement<DropdownProps>, {
            onChange: ({
              target: { value },
            }: {
              target: { value: string };
            }) => {
              setValue(value);
            },
            value,
          })}
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

  it('should render the default value correctly', async () => {
    const { getComboBox, getElement } = setup({ defaultValue: 'option-1' });

    const comboBox = getComboBox();

    await userEvent.click(comboBox);

    const option = getElement(defaultProps.options[0].label);

    expect(option).toBeInTheDocument();
  });

  it('should render the loading state correctly', async () => {
    const { getComboBox, getElement } = setup({ isLoading: true });

    const comboBox = getComboBox();

    await userEvent.click(comboBox);

    const option = getElement('Loading...');

    expect(option).toBeInTheDocument();
  });

  it('should render the no options state correctly', async () => {
    const { getComboBox, getElement } = setup({ options: [] });

    const comboBox = getComboBox();

    await userEvent.click(comboBox);

    const option = getElement('No options');

    expect(option).toBeInTheDocument();
  });

  describe('Dropdown in Modal', () => {
    const ModalWrapper: FC<PropsWithChildren> = ({ children }) => {
      const [isOpen, setIsOpen] = useState(true);
      return (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Body>
            <div className="p-6">{children}</div>
          </Modal.Body>
        </Modal>
      );
    };

    it('should render and interact correctly inside a modal', async () => {
      const onChange = vitest.fn();
      const { user, getComboBox, getElement } = setup(
        { onChange },
        ModalWrapper,
      );

      const comboBox = getComboBox();
      expect(comboBox).toBeInTheDocument();

      await user.click(comboBox);
      const option = getElement(defaultProps.options[0].label);
      expect(option).toBeInTheDocument();

      await user.click(option);
      expect(onChange).toHaveBeenCalledWith({
        target: {
          value: defaultProps.options[0].value,
          name: defaultProps.name,
        },
      });
    });

    it('should close dropdown list after selecting an option in modal', async () => {
      const { user, getComboBox } = setup({}, ModalWrapper);

      const comboBox = getComboBox();
      await user.click(comboBox);

      // Get the list element
      const list = screen.getByRole('listbox');
      expect(list).toBeInTheDocument();

      // Select an option
      const option = screen.getByText(defaultProps.options[0].label);
      await user.click(option);

      // The list should be hidden
      expect(list).toHaveAttribute('data-state', 'closed');
    });

    it('should handle keyboard navigation inside modal', async () => {
      const onChange = vitest.fn();
      const { user, getComboBox } = setup({ onChange }, ModalWrapper);

      const comboBox = getComboBox();
      await user.click(comboBox);

      // Navigate to first option
      await user.keyboard('{ArrowDown}');
      // Select the option
      await user.keyboard('{Enter}');

      expect(onChange).toHaveBeenCalledWith({
        target: {
          value: defaultProps.options[0].value,
          name: defaultProps.name,
        },
      });
    });
  });
});
