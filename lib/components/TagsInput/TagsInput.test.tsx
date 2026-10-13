import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { useState } from 'react';

import { TagsInput } from './TagsInput';
import { Props } from './TagsInput.types';

const Controlled = (props: Partial<Props>) => {
  const [tags, setTags] = useState<string[]>(props.value ?? []);

  return (
    <TagsInput
      label="Tags"
      {...props}
      value={tags}
      onChange={(next) => {
        setTags(next);
        props.onChange?.(next);
      }}
    />
  );
};

describe('TagsInput', () => {
  const setup = (props: Partial<Props> = {}) => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    const utils = render(<Controlled {...props} onChange={onChange} />);

    return {
      ...utils,
      user,
      onChange,
      getInput: () => screen.getByRole('combobox', { name: 'Tags' }),
    };
  };

  it('should add tags with Enter and comma, trimming and ignoring duplicates', async () => {
    const { user, onChange, getInput } = setup();

    await user.type(getInput(), ' web {Enter}database,web{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(['web', 'database']);
    expect(screen.getByText('web')).toBeInTheDocument();
    expect(screen.getByText('database')).toBeInTheDocument();
    expect(getInput()).toHaveValue('');
  });

  it('should remove the last tag with Backspace on an empty input and any tag from its badge', async () => {
    const { user, onChange, getInput } = setup({ value: ['web', 'database'] });

    await user.click(getInput());
    await user.keyboard('{Backspace}');

    expect(onChange).toHaveBeenLastCalledWith(['web']);

    await user.click(screen.getByRole('button', { name: 'Dismiss' }));

    expect(onChange).toHaveBeenLastCalledWith([]);
  });

  it('should offer suggestions filtered by the typed text and select them with the keyboard', async () => {
    const { user, onChange, getInput } = setup({
      suggestions: ['staging', 'production', 'web'],
      value: ['web'],
    });

    await user.type(getInput(), 'p');

    const listbox = screen.getByRole('listbox');

    expect(
      screen.getByRole('option', { name: 'production' }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('option', { name: 'web' }),
    ).not.toBeInTheDocument();
    expect(getInput()).toHaveAttribute('aria-controls', listbox.id);

    await user.keyboard('{ArrowDown}{Enter}');

    expect(onChange).toHaveBeenLastCalledWith(['web', 'production']);
    expect(
      screen.queryByRole('option', { name: 'production' }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'staging' })).toBeInTheDocument();
  });

  it('should select a suggestion with the mouse', async () => {
    const { user, onChange, getInput } = setup({
      suggestions: ['staging', 'production'],
    });

    await user.click(getInput());
    await user.click(screen.getByRole('option', { name: 'staging' }));

    expect(onChange).toHaveBeenLastCalledWith(['staging']);
  });

  it('should commit the pending text when the input loses focus', async () => {
    const { user, onChange, getInput } = setup();

    await user.type(getInput(), 'critical');
    await user.tab();

    expect(onChange).toHaveBeenLastCalledWith(['critical']);
  });

  it('should keep the pending text on blur when commitOnBlur is false', async () => {
    const { user, onChange, getInput } = setup({ commitOnBlur: false });

    await user.type(getInput(), 'critical');
    await user.tab();

    expect(onChange).not.toHaveBeenCalled();
    expect(getInput()).toHaveValue('critical');
  });

  it('should describe the field with the error and hide the helper text', () => {
    const { getInput } = setup({
      error: 'Add at least one tag',
      helperText: 'Press Enter to add',
    });

    const error = screen.getByText('Add at least one tag');

    expect(getInput()).toHaveAttribute('aria-invalid', 'true');
    expect(getInput()).toHaveAttribute('aria-describedby', error.id);
    expect(screen.queryByText('Press Enter to add')).not.toBeInTheDocument();
  });

  it('should announce loading and block edits while disabled', async () => {
    const { user, onChange, getInput } = setup({
      isLoading: true,
      disabled: true,
      value: ['web'],
    });

    expect(screen.getByRole('status')).toHaveTextContent('Loading suggestions');
    expect(getInput()).toBeDisabled();

    await user.click(screen.getByRole('button', { name: 'Dismiss' }));

    expect(onChange).not.toHaveBeenCalled();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = setup({
      value: ['web'],
      helperText: 'Press Enter to add',
      isRequired: true,
    });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
