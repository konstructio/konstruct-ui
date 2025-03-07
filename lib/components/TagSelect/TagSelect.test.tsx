import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TagSelect } from './TagSelect';
import { TagSelectProps } from './TagSelect.types';
import { FC, PropsWithChildren } from 'react';

describe('TagSelect', () => {
  const options = [
    { id: '1', color: 'gray', label: 'gray' },
    { id: '2', color: 'cyan', label: 'cyan' },
  ] satisfies TagSelectProps['options'];

  const setup = (
    props: Partial<TagSelectProps> = {},
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const defaultProps = {
      name: 'tag-select',
      options,
    } satisfies TagSelectProps;

    const { container: component } = render(
      <TagSelect {...defaultProps} {...props} />,
      { wrapper },
    );

    const user = userEvent.setup();

    const findTagSelect = async () => screen.findByRole('combobox');
    const findOption = async (name: string) =>
      screen.findByRole('option', { name: new RegExp(name, 'i') });

    return {
      component,
      user,
      findTagSelect,
      findOption,
    };
  };

  it('should render correctly', async () => {
    const { findTagSelect } = setup();

    const tagSelect = await findTagSelect();

    expect(tagSelect).toBeInTheDocument();
  });

  it('should select a value', async () => {
    const { findTagSelect, findOption, user } = setup();

    const tagSelect = await findTagSelect();

    await user.click(tagSelect);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await waitFor(() => {
      expect(screen.queryAllByRole('option').length).toBe(0);
    });

    expect(screen.getByText(options.at(0)!.label)).toBeInTheDocument();
  });

  it('should select multiple values', async () => {
    const { findTagSelect, findOption, user } = setup();

    const tagSelect = await findTagSelect();

    await user.click(tagSelect);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await user.click(tagSelect);

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

    const { findTagSelect, findOption, user } = setup({}, Wrapper);

    const tagSelect = await findTagSelect();

    await user.click(tagSelect);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await user.click(tagSelect);

    const option2 = await findOption(options.at(1)!.label);

    await user.click(option2);

    const button = screen.getByRole('button', {
      name: /submit/i,
    });

    await user.click(button);

    const result = JSON.stringify(
      options.map(({ id, label }) => ({ id, value: label })),
    );

    expect(handleSubmit).toHaveBeenCalledWith({
      'tag-select': result,
    });
  });

  it('sould send just one value on the form because is not multiselect', async () => {
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

    const { findTagSelect, findOption, user } = setup(
      { multiselect: false },
      Wrapper,
    );

    const tagSelect = await findTagSelect();

    await user.click(tagSelect);

    const option = await findOption(options.at(0)!.label);

    await user.click(option);

    await user.click(tagSelect);

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
      'tag-select': result,
    });
  });
});
