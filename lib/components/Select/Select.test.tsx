import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, FormEvent, PropsWithChildren, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { Drawer } from '@/components/Drawer/Drawer';
import { Modal } from '@/components/Modal/Modal';

import { Select } from './Select';
import { Props } from './Select.types';

const defaultProps = {
  label: 'Select',
  name: 'select-label',
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
} satisfies Props;

describe('Select', () => {
  const setup = (props?: Partial<Props>, wrapper?: FC) => {
    const { onFetchMoreOptions: _, ...restProps } = props || {};

    const { container: component } = render(
      <Select
        {...defaultProps}
        {...restProps}
        isInfiniteScrollEnabled={false}
      />,
      {
        wrapper,
      },
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

  describe('General test for select', () => {
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

    it('should expose the label as the accessible name of the combobox', async () => {
      setup();

      expect(
        await screen.findByRole('combobox', { name: 'Select' }),
      ).toBeInTheDocument();
    });

    it('should not emit duplicated ids', async () => {
      const { component } = setup({ isRequired: true, error: 'Required' });

      const ids = [...component.querySelectorAll('[id]')].map(
        (element) => element.id,
      );

      expect(ids).toHaveLength(new Set(ids).size);
    });

    it('should point the label at the combobox instead of itself', async () => {
      const { component } = setup();

      const label = component.querySelector('label');
      const comboBox = await screen.findByRole('combobox');

      expect(label?.getAttribute('for')).toBe(comboBox.id);
      expect(label?.getAttribute('for')).not.toBe(label?.id);
    });

    it('should fall back to the placeholder when there is no label', async () => {
      setup({ label: undefined, placeholder: 'Pick a region' });

      expect(
        await screen.findByRole('combobox', { name: 'Pick a region' }),
      ).toBeInTheDocument();
    });

    it('should describe the combobox with its error message', async () => {
      setup({ error: 'Required', isRequired: true });

      const comboBox = await screen.findByRole('combobox');

      expect(comboBox).toHaveAttribute('aria-invalid', 'true');
      expect(comboBox).toHaveAttribute('aria-required', 'true');
      expect(comboBox).toHaveAccessibleDescription('Required');
    });

    it('should describe the combobox with its helper text', async () => {
      setup({ helperText: 'Pick the closest region' });

      const comboBox = await screen.findByRole('combobox');

      expect(comboBox).not.toHaveAttribute('aria-invalid');
      expect(comboBox).toHaveAccessibleDescription('Pick the closest region');
    });

    it('should reference the listbox it controls while open', async () => {
      const { user, findComboBox } = setup();

      const comboBox = await findComboBox();

      expect(comboBox).toHaveAttribute('aria-haspopup', 'listbox');
      expect(comboBox).not.toHaveAttribute('aria-controls');

      await user.click(comboBox);

      const listbox = await screen.findByRole('listbox');

      expect(comboBox).toHaveAttribute('aria-controls', listbox.id);
    });

    it('should expose grouped options as named groups', async () => {
      const { user, findComboBox } = setup({
        options: [
          {
            groupLabel: 'Europe',
            options: [{ label: 'Ireland', value: 'ie' }],
          },
          {
            groupLabel: 'Americas',
            options: [{ label: 'Canada', value: 'ca' }],
          },
        ],
      });

      await user.click(await findComboBox());

      expect(
        await screen.findByRole('group', { name: 'Europe' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('group', { name: 'Americas' }),
      ).toBeInTheDocument();

      const europe = screen.getByRole('group', { name: 'Europe' });

      expect(
        within(europe).getByRole('option', { name: /Ireland/ }),
      ).toBeInTheDocument();
    });

    it('should allow overriding the loading text', async () => {
      const { user, findComboBox } = setup({
        isLoading: true,
        loadingText: 'Cargando...',
      });

      await user.click(await findComboBox());

      expect(screen.getByText('Cargando...')).toBeInTheDocument();
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
        target: {
          value: defaultProps.options[0].value,
          name: defaultProps.name,
        },
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
        target: {
          value: defaultProps.options[1].value,
          name: defaultProps.name,
        },
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

    it('should focus the search input when opening a searchable select', async () => {
      const { user, findComboBox } = setup({ searchable: true });

      const comboBox = await findComboBox();

      await user.click(comboBox);

      const searchInput = screen.getByRole('textbox');

      await waitFor(() => {
        expect(searchInput).toHaveFocus();
      });
      expect(searchInput).toHaveAttribute('tabindex', '-1');
    });

    it('should allow typing right after opening a searchable select', async () => {
      const { user, findComboBox } = setup({ searchable: true });

      const comboBox = await findComboBox();

      await user.click(comboBox);
      await waitFor(() => {
        expect(screen.getByRole('textbox')).toHaveFocus();
      });
      await user.keyboard('Option 2');

      expect(screen.getByRole('textbox')).toHaveValue('Option 2');
    });

    it('should keep the combobox as the tab stop in searchable mode', async () => {
      const { user, findComboBox } = setup({ searchable: true });

      const comboBox = await findComboBox();

      await user.tab();

      expect(comboBox).toHaveFocus();
      expect(screen.getByRole('textbox')).toHaveAttribute('tabindex', '-1');
    });

    it('should not expand the combobox just by focusing it', async () => {
      const { user, findComboBox } = setup();

      const comboBox = await findComboBox();

      await user.tab();

      expect(comboBox).toHaveFocus();
      expect(comboBox).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it.each(['{ArrowDown}', '{Enter}', ' '])(
      'should open the list when pressing %s on the focused combobox',
      async (key) => {
        const { user, findComboBox } = setup();

        const comboBox = await findComboBox();

        await user.tab();
        await user.keyboard(key);

        expect(comboBox).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByRole('listbox')).toBeInTheDocument();
      },
    );

    it('should move the focus to the first option on the second ArrowDown', async () => {
      const { user, findComboBox } = setup();

      const comboBox = await findComboBox();

      await user.tab();
      await user.keyboard('{ArrowDown}');
      await user.keyboard('{ArrowDown}');

      expect(comboBox).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getAllByRole('option').at(0)).toHaveFocus();
    });

    it('should close the list when pressing Enter again on the combobox', async () => {
      const { user, findComboBox } = setup();

      const comboBox = await findComboBox();

      await user.tab();
      await user.keyboard('{Enter}');
      await user.keyboard('{Enter}');

      expect(comboBox).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should allow typing spaces in the search input of a searchable select', async () => {
      const { user, findComboBox } = setup({ searchable: true });

      const comboBox = await findComboBox();

      await user.click(comboBox);
      await waitFor(() => {
        expect(screen.getByRole('textbox')).toHaveFocus();
      });
      await user.keyboard('a b');

      expect(screen.getByRole('textbox')).toHaveValue('a b');
    });

    it('should render the labelAction next to the label', () => {
      setup({
        labelAction: <button type="button">Action</button>,
      });

      expect(screen.getByText('Action')).toBeInTheDocument();
    });
  });

  describe('select inside a form', () => {
    const mockSubmit = vi.fn();
    const mockOnSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      mockSubmit(data);
    };

    beforeEach(() => {
      vi.clearAllMocks();
    });

    it('should send the current selected value in a form', async () => {
      const Wrapper: FC<PropsWithChildren> = ({ children }) => (
        <form onSubmit={mockOnSubmit}>
          {children}

          <button type="submit">Submit</button>
        </form>
      );

      const { user, findComboBox } = setup({ name: 'select' }, Wrapper);

      const comboBox = await findComboBox();

      await user.click(comboBox);
      comboBox.focus();

      const option = await screen.findByText(defaultProps.options.at(0)!.label);
      await user.click(option);

      const button = await screen.findByRole('button', {
        name: /submit/i,
      });

      await user.click(button);

      expect(mockSubmit).toHaveBeenCalledWith({
        select: defaultProps.options.at(0)!.value,
      });
    });
  });

  describe('select in Modal', () => {
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

    it('should close select list after selecting an option in modal', async () => {
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
      const onChange = vi.fn();
      const { user, findComboBox } = setup({ onChange }, ModalWrapper);

      const buttonOpenModal = await screen.findByRole('button', {
        name: /open modal/i,
      });

      expect(buttonOpenModal).toBeInTheDocument();

      await user.click(buttonOpenModal);

      const comboBox = await findComboBox();
      await user.click(comboBox);

      const option = await screen.findByText(defaultProps.options.at(0)!.label);
      await user.click(option);

      expect(onChange).toHaveBeenCalledWith({
        target: {
          value: defaultProps.options[0].value,
          name: defaultProps.name,
        },
      });
    });
  });

  describe('select inside a drawer', () => {
    const DrawerWrapper: FC<PropsWithChildren> = ({ children }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <>
          <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
          <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <Drawer.Body>{children}</Drawer.Body>
          </Drawer>
        </>
      );
    };

    const openDrawer = async (user: UserEvent) => {
      await user.click(
        await screen.findByRole('button', { name: /open drawer/i }),
      );
    };

    it('should stay closed after selecting an option when the drawer returns focus to the combobox', async () => {
      const { user, findComboBox } = setup({}, DrawerWrapper);

      await openDrawer(user);

      const comboBox = await findComboBox();
      await user.click(comboBox);

      await user.click(screen.getByText(defaultProps.options[0].label));

      await waitFor(() => {
        expect(comboBox).toHaveFocus();
      });
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
      expect(comboBox).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
