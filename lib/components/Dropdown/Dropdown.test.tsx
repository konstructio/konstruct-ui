import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren, useState } from 'react';

import { Modal } from '@/components/Modal/Modal';

import { Button } from '../Button/Button';

import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

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
    const findComboBox = async () => screen.findByRole('combobox');
    const getElement = (value: string | RegExp) =>
      screen.getByText(new RegExp(value, 'i'));

    return {
      component,
      user,
      findComboBox,
      getElement,
    };
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly', async () => {
    const { findComboBox } = setup();

    const comboBox = await findComboBox();

    expect(comboBox).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should render the options correctly', async () => {
    const { user, findComboBox } = setup();

    const comboBox = await findComboBox();

    await user.click(comboBox);

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(defaultProps.options.length);
  });

  it('should call the onChange function when an option is selected', async () => {
    const onChange = vitest.fn();
    const { user, findComboBox, getElement } = setup({ onChange });

    const comboBox = await findComboBox();

    await user.click(comboBox);

    const option = getElement(defaultProps.options[0].label);

    await user.click(option);

    expect(onChange).toHaveBeenCalledWith({
      target: { value: defaultProps.options[0].value, name: defaultProps.name },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should call the onChange function when select two times the options', async () => {
    const onChange = vitest.fn();
    const { user, findComboBox, getElement } = setup({ onChange });

    const comboBox = await findComboBox();

    await user.click(comboBox);

    const option1 = getElement(defaultProps.options[0].label);

    await user.click(option1);
    await user.click(comboBox);

    const option2 = getElement(defaultProps.options[1].label);

    await user.click(option2);

    expect(onChange).toHaveBeenLastCalledWith({
      target: { value: defaultProps.options[1].value, name: defaultProps.name },
    });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('should render the default value correctly', async () => {
    const { user, findComboBox, getElement } = setup({
      defaultValue: 'option-1',
    });

    const comboBox = await findComboBox();

    await user.click(comboBox);

    const option = getElement(defaultProps.options[0].label);

    expect(option).toBeInTheDocument();
  });

  it('should render the loading state correctly', async () => {
    const { user, findComboBox, getElement } = setup({ isLoading: true });

    const comboBox = await findComboBox();

    await user.click(comboBox);

    const option = getElement('Loading...');

    expect(option).toBeInTheDocument();
  });

  it('should render the no options state correctly', async () => {
    const { user, findComboBox, getElement } = setup({ options: [] });

    const comboBox = await findComboBox();

    await user.click(comboBox);

    const option = getElement('No options');

    expect(option).toBeInTheDocument();
  });

  describe('Dropdown inside a form', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('should send the current selected value in a form', async () => {
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

          <button type="submit">Submit</button>
        </form>
      );

      const { user, findComboBox } = setup({ name: 'dropdown' }, Wrapper);

      const comboBox = await findComboBox();

      await user.click(comboBox);
      comboBox.focus();

      await user.keyboard('{ArrowDown}');
      await user.keyboard('{Enter}');

      const button = await screen.findByRole('button', {
        name: /submit/i,
      });

      await user.click(button);

      expect(mockSubmit).toHaveBeenCalledWith({
        dropdown: defaultProps.options.at(0)!.value,
      });
    });
  });

  describe('Dropdown in Modal', () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    const ModalWrapper: FC<PropsWithChildren> = ({ children }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Modal.Body>
              <div className="p-6">{children}</div>
            </Modal.Body>
          </Modal>
        </>
      );
    };

    it('should render and interact correctly inside a modal', async () => {
      const onChange = vitest.fn();
      const { user, findComboBox, getElement } = setup(
        { onChange },
        ModalWrapper,
      );

      const buttonOpenModal = await screen.findByRole('button', {
        name: /open modal/i,
      });
      expect(buttonOpenModal).toBeInTheDocument();

      await user.click(buttonOpenModal);

      const comboBox = await findComboBox();
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
      const { user, findComboBox } = setup({}, ModalWrapper);

      const buttonOpenModal = await screen.findByRole('button', {
        name: /open modal/i,
      });
      expect(buttonOpenModal).toBeInTheDocument();

      await user.click(buttonOpenModal);

      const comboBox = await findComboBox();
      await user.click(comboBox);

      // Get the list element
      const list = screen.getByRole('listbox');
      expect(list).toBeInTheDocument();

      // Select an option
      const option = screen.getByText(defaultProps.options[0].label);
      await user.click(option);

      const queryList = screen.queryByRole('listbox');
      expect(queryList).not.toBeInTheDocument();
    });

    it('should handle keyboard navigation inside modal', async () => {
      const onChange = vitest.fn();
      const { user, findComboBox } = setup({ onChange }, ModalWrapper);

      const buttonOpenModal = await screen.findByRole('button', {
        name: /open modal/i,
      });
      expect(buttonOpenModal).toBeInTheDocument();

      await user.click(buttonOpenModal);

      const comboBox = await findComboBox();
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
