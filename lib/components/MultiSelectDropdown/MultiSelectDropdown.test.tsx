import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, PropsWithChildren } from 'react';

import { MultiSelectDropdown } from './MultiSelectDropdown';
import { MultiSelectDropdownProps } from './MultiSelectDropdown.types';

describe('MultiSelectDropdown', () => {
  const options = [
    { id: '1', label: 'Gray Option', badge: 'gray' },
    { id: '2', label: 'Cyan Option', badge: 'cyan' },
  ] satisfies MultiSelectDropdownProps['options'];

  const setup = (
    props: Partial<MultiSelectDropdownProps> = {},
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const defaultProps = {
      name: 'multi-select-dropdown',
      options,
    } satisfies MultiSelectDropdownProps;

    const { container: component } = render(
      <MultiSelectDropdown {...defaultProps} {...props} />,
      { wrapper },
    );

    const user = userEvent.setup();

    const findMultiSelectDropdown = async () => screen.findByRole('combobox');
    const findOption = async (name: string) =>
      screen.findByRole('option', { name: new RegExp(name, 'i') });

    return {
      component,
      user,
      findMultiSelectDropdown,
      findOption,
    };
  };

  it('should render correctly', async () => {
    const { findMultiSelectDropdown } = setup();

    const multiSelectDropdown = await findMultiSelectDropdown();

    expect(multiSelectDropdown).toBeInTheDocument();
  });

  it('should select a value', async () => {
    const { findMultiSelectDropdown, findOption, user } = setup();

    const multiSelectDropdown = await findMultiSelectDropdown();

    await user.click(multiSelectDropdown);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await waitFor(() => {
      expect(screen.queryAllByRole('option').length).toBe(0);
    });

    expect(screen.getByText(options.at(0)!.label)).toBeInTheDocument();
  });

  it('should select multiple values', async () => {
    const { findMultiSelectDropdown, findOption, user } = setup();

    const multiSelectDropdown = await findMultiSelectDropdown();

    await user.click(multiSelectDropdown);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await user.click(multiSelectDropdown);

    const option2 = await findOption(options.at(1)!.label);

    await user.click(option2);

    await waitFor(() => {
      expect(screen.queryAllByRole('option').length).toBe(0);
    });

    expect(screen.getByText(options.at(0)!.label)).toBeInTheDocument();
    expect(screen.getByText(options.at(1)!.label)).toBeInTheDocument();
  });

  it('should send values when the input is located in a form', async () => {
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

    const { findMultiSelectDropdown, findOption, user } = setup({}, Wrapper);

    const multiSelectDropdown = await findMultiSelectDropdown();

    await user.click(multiSelectDropdown);

    const option1 = await findOption(options.at(0)!.label);

    await user.click(option1);

    await user.click(multiSelectDropdown);

    const option2 = await findOption(options.at(1)!.label);

    await user.click(option2);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(button);

    const result = JSON.stringify(
      options.slice(0, 2).map(({ id, label }) => ({ id, value: label })),
    );

    expect(handleSubmit).toHaveBeenCalledWith({
      'multi-select-dropdown': result,
    });
  });

  it('sould send just one value on the form because is not multiselect', async () => {
    const handleSubmit = vitest.fn();

    const Wrapper: FC<PropsWithChildren> = ({ children }) => (
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

    const { findMultiSelectDropdown, findOption, user } = setup(
      { multiselect: false },
      Wrapper,
    );

    const multiSelectDropdown = await findMultiSelectDropdown();

    await user.click(multiSelectDropdown);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await user.click(multiSelectDropdown);

    const option2 = await findOption(options.at(1)!.label);

    await user.click(option2);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(button);

    const result = JSON.stringify([
      {
        id: options.at(1)!.id,
        value: options.at(1)!.label,
      },
    ]);

    expect(handleSubmit).toHaveBeenCalledWith({
      'multi-select-dropdown': result,
    });
  });
});
