import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { useState } from 'react';

import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('should associate the label with the textarea', () => {
    render(<TextArea label="Description" />);

    expect(screen.getByLabelText('Description')).toBeInTheDocument();
  });

  it('should keep the label associated when a custom id is provided', () => {
    render(<TextArea label="Description" id="my-id" />);

    expect(screen.getByLabelText('Description')).toHaveAttribute('id', 'my-id');
  });

  it('should submit the value under its name', () => {
    render(<TextArea label="Bio" name="bio" initialValue="hello" />);

    const textarea = screen.getByLabelText('Bio');

    expect(textarea).toHaveAttribute('name', 'bio');
  });

  it('should seed the field with initialValue and stay editable', async () => {
    const user = userEvent.setup();

    render(<TextArea label="Notes" initialValue="seeded" />);

    const textarea = screen.getByLabelText('Notes');

    expect(textarea).toHaveValue('seeded');

    await user.type(textarea, ' MORE');

    expect(textarea).toHaveValue('seeded MORE');
  });

  it('should report every keystroke to onChange', async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();

    render(<TextArea label="Notes" initialValue="ab" onChange={onChange} />);

    await user.type(screen.getByLabelText('Notes'), 'cd');

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(screen.getByLabelText('Notes')).toHaveValue('abcd');
  });

  it('should stay controlled when a value prop is provided', async () => {
    const user = userEvent.setup();

    const Harness = () => {
      const [value, setValue] = useState('start');

      return (
        <TextArea
          label="Comments"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
      );
    };

    render(<Harness />);

    const textarea = screen.getByLabelText('Comments');

    await user.type(textarea, '!');

    expect(textarea).toHaveValue('start!');
  });

  it('should describe the textarea with its error message', () => {
    render(<TextArea label="Bio" error="Bio is required" />);

    const textarea = screen.getByLabelText('Bio');

    expect(screen.getByText('Bio is required')).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
    expect(textarea).toHaveAttribute('data-error', 'true');
    expect(textarea).toHaveAccessibleDescription('Bio is required');
  });

  it('should describe the textarea with its helper text', () => {
    render(<TextArea label="Bio" helperText="Max 200 characters" />);

    const textarea = screen.getByLabelText('Bio');

    expect(textarea).not.toHaveAttribute('aria-invalid');
    expect(textarea).toHaveAccessibleDescription('Max 200 characters');
  });

  it('should show the helper text only when there is no error', () => {
    const { rerender } = render(
      <TextArea label="Bio" helperText="Max 200 characters" />,
    );

    expect(screen.getByText('Max 200 characters')).toBeInTheDocument();

    rerender(
      <TextArea label="Bio" helperText="Max 200 characters" error="Too long" />,
    );

    expect(screen.queryByText('Max 200 characters')).not.toBeInTheDocument();
    expect(screen.getByText('Too long')).toBeInTheDocument();
  });

  it('should not treat an empty error string as an error', () => {
    render(<TextArea label="Bio" error="" helperText="Max 200 characters" />);

    const textarea = screen.getByLabelText('Bio');

    expect(textarea).toHaveAttribute('data-error', 'false');
    expect(textarea).not.toHaveAttribute('aria-invalid');
    expect(textarea).toHaveAccessibleDescription('Max 200 characters');
  });

  it('should expose the required state without polluting the accessible name', () => {
    render(<TextArea label="Bio" isRequired />);

    const textarea = screen.getByRole('textbox', { name: 'Bio' });

    expect(textarea).toHaveAttribute('aria-required', 'true');
  });

  it('should render the requested number of rows', () => {
    render(<TextArea label="Notes" rows={5} />);

    expect(screen.getByLabelText('Notes')).toHaveAttribute('rows', '5');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <TextArea label="Description" placeholder="Enter description..." />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
