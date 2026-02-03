import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren, useState } from 'react';

import { Button } from '../Button/Button';

import { ButtonGroup } from './ButtonGroup';
import { Props } from './ButtonGroup.types';

describe('ButtonGroup', () => {
  const setup = (props?: Partial<Props>, wrapper?: FC<PropsWithChildren>) => {
    const defaultProps: Props = {
      name: 'test-button-group',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    };

    const { container: component } = render(
      <ButtonGroup {...defaultProps} {...props} />,
      { wrapper },
    );

    const findRadioGroup = () => screen.findByRole('radiogroup');

    const findRadio = (name: string | RegExp) =>
      screen.findByRole('radio', { name: new RegExp(name.toString(), 'i') });

    const findAllRadios = () => screen.findAllByRole('radio');

    const findByText = (text: string | RegExp) => screen.findByText(text);

    const findButton = (name: string | RegExp) =>
      screen.findByRole('button', { name: new RegExp(name.toString(), 'i') });

    const user = userEvent.setup();

    return {
      component,
      findAllRadios,
      findButton,
      findByText,
      findRadio,
      findRadioGroup,
      user,
    };
  };

  it('should render correctly', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it('should render all options', async () => {
    const { findAllRadios } = setup();

    const radios = await findAllRadios();

    expect(radios).toHaveLength(3);
  });

  it('should render label when provided', async () => {
    const { findByText } = setup({ label: 'Select an option' });

    const label = await findByText('Select an option');

    expect(label).toBeInTheDocument();
  });

  it('should render required indicator when isRequired is true', async () => {
    const { findByText } = setup({ label: 'Required field', isRequired: true });

    const asterisk = await findByText('*');

    expect(asterisk).toBeInTheDocument();
  });

  it('should render error message when provided', async () => {
    const { findByText } = setup({ error: 'This field is required' });

    const errorMessage = await findByText('This field is required');

    expect(errorMessage).toBeInTheDocument();
  });

  it('should render helper text when provided', async () => {
    const { findByText } = setup({ helperText: 'Select one option' });

    const helperText = await findByText('Select one option');

    expect(helperText).toBeInTheDocument();
  });

  it('should not render helper text when error is provided', async () => {
    const { findByText } = setup({
      error: 'Error message',
      helperText: 'Helper text',
    });

    const errorMessage = await findByText('Error message');

    expect(errorMessage).toBeInTheDocument();
    expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
  });

  it('should render option descriptions when provided', async () => {
    const { findByText } = setup({
      options: [
        { value: 'opt1', label: 'Option 1', description: 'Description 1' },
        { value: 'opt2', label: 'Option 2', description: 'Description 2' },
      ],
    });

    const description1 = await findByText('Description 1');
    const description2 = await findByText('Description 2');

    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
  });

  it('should not render description element when not provided', async () => {
    const { findAllRadios } = setup({
      options: [
        { value: 'opt1', label: 'Option 1' },
        { value: 'opt2', label: 'Option 2' },
      ],
    });

    const radios = await findAllRadios();

    radios.forEach((radio) => {
      const button = radio as HTMLButtonElement;
      expect(
        within(button).queryByText(/description/i),
      ).not.toBeInTheDocument();
    });
  });

  describe('uncontrolled mode', () => {
    it('should use defaultValue as initial selection', async () => {
      const { findRadio } = setup({ defaultValue: 'option2' });

      const option2 = await findRadio('Option 2');
      const option1 = await findRadio('Option 1');

      expect(option2).toHaveAttribute('aria-checked', 'true');
      expect(option1).toHaveAttribute('aria-checked', 'false');
    });

    it('should change selection when clicking an option', async () => {
      const { user, findRadio } = setup({ defaultValue: 'option1' });

      const option1Before = await findRadio('Option 1');
      expect(option1Before).toHaveAttribute('aria-checked', 'true');

      const option2 = await findRadio('Option 2');
      await user.click(option2);

      const option2After = await findRadio('Option 2');
      const option1After = await findRadio('Option 1');

      expect(option2After).toHaveAttribute('aria-checked', 'true');
      expect(option1After).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('controlled mode', () => {
    it('should use value prop as selection', async () => {
      const { findRadio } = setup({ value: 'option3' });

      const option3 = await findRadio('Option 3');

      expect(option3).toHaveAttribute('aria-checked', 'true');
    });

    it('should not change selection internally when clicking', async () => {
      const ControlledComponent = () => {
        const [value] = useState('option1');
        return (
          <ButtonGroup
            name="test"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
            value={value}
          />
        );
      };

      render(<ControlledComponent />);
      const user = userEvent.setup();

      const option2 = await screen.findByRole('radio', { name: /Option 2/i });
      await user.click(option2);

      const option1 = await screen.findByRole('radio', { name: /Option 1/i });

      expect(option1).toHaveAttribute('aria-checked', 'true');
    });
  });

  it('should call onValueChange callback when selection changes', async () => {
    const onValueChange = vitest.fn();
    const { user, findRadio } = setup({ onValueChange });

    const option2 = await findRadio('Option 2');
    await user.click(option2);

    expect(onValueChange).toHaveBeenCalledWith('option2');
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });

  describe('disabled state', () => {
    it('should disable entire group when disabled prop is true', async () => {
      const { findAllRadios } = setup({ disabled: true });

      const radios = await findAllRadios();

      radios.forEach((radio) => {
        expect(radio).toBeDisabled();
      });
    });

    it('should not call onValueChange when disabled', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({ disabled: true, onValueChange });

      const option2 = await findRadio('Option 2');
      await user.click(option2);

      expect(onValueChange).not.toHaveBeenCalled();
    });

    it('should disable individual options', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        options: [
          { value: 'opt1', label: 'Option 1' },
          { value: 'opt2', label: 'Option 2', disabled: true },
          { value: 'opt3', label: 'Option 3' },
        ],
        onValueChange,
      });

      const disabledOption = await findRadio('Option 2');
      expect(disabledOption).toBeDisabled();

      await user.click(disabledOption);
      expect(onValueChange).not.toHaveBeenCalled();

      const option3 = await findRadio('Option 3');
      await user.click(option3);

      expect(onValueChange).toHaveBeenCalledWith('opt3');
    });
  });

  describe('keyboard navigation', () => {
    it('should move to next option with ArrowRight', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        defaultValue: 'option1',
        onValueChange,
      });

      const option1 = await findRadio('Option 1');
      await user.click(option1);
      await user.keyboard('{ArrowRight}');

      expect(onValueChange).toHaveBeenCalledWith('option2');
    });

    it('should move to previous option with ArrowLeft', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        defaultValue: 'option2',
        onValueChange,
      });

      const option2 = await findRadio('Option 2');
      await user.click(option2);
      await user.keyboard('{ArrowLeft}');

      expect(onValueChange).toHaveBeenCalledWith('option1');
    });

    it('should wrap around from last to first with ArrowRight', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        defaultValue: 'option3',
        onValueChange,
      });

      const option3 = await findRadio('Option 3');
      await user.click(option3);
      await user.keyboard('{ArrowRight}');

      expect(onValueChange).toHaveBeenCalledWith('option1');
    });

    it('should wrap around from first to last with ArrowLeft', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        defaultValue: 'option1',
        onValueChange,
      });

      const option1 = await findRadio('Option 1');
      await user.click(option1);
      await user.keyboard('{ArrowLeft}');

      expect(onValueChange).toHaveBeenCalledWith('option3');
    });

    it('should move to first option with Home key', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        defaultValue: 'option3',
        onValueChange,
      });

      const option3 = await findRadio('Option 3');
      await user.click(option3);
      await user.keyboard('{Home}');

      expect(onValueChange).toHaveBeenCalledWith('option1');
    });

    it('should move to last option with End key', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        defaultValue: 'option1',
        onValueChange,
      });

      const option1 = await findRadio('Option 1');
      await user.click(option1);
      await user.keyboard('{End}');

      expect(onValueChange).toHaveBeenCalledWith('option3');
    });

    it('should skip disabled options during keyboard navigation', async () => {
      const onValueChange = vitest.fn();
      const { user, findRadio } = setup({
        options: [
          { value: 'opt1', label: 'Option 1' },
          { value: 'opt2', label: 'Option 2', disabled: true },
          { value: 'opt3', label: 'Option 3' },
        ],
        defaultValue: 'opt1',
        onValueChange,
      });

      const option1 = await findRadio('Option 1');
      await user.click(option1);
      await user.keyboard('{ArrowRight}');

      expect(onValueChange).toHaveBeenCalledWith('opt3');
    });
  });

  describe('form submission', () => {
    it('should submit the selected value with the form', async () => {
      const mockSubmit = vitest.fn();

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

      const { user, findRadio, findButton } = setup(
        { defaultValue: 'option1' },
        Wrapper,
      );

      const option2 = await findRadio('Option 2');
      await user.click(option2);

      const submitButton = await findButton('submit');
      await user.click(submitButton);

      expect(mockSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          'test-button-group': 'option2',
        }),
      );
    });
  });

  describe('accessibility', () => {
    it('should not have accessibility violations', async () => {
      const { component } = setup({ label: 'Select an option' });

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });

    it('should have proper ARIA attributes', async () => {
      const { findRadioGroup, findRadio } = setup({ defaultValue: 'option1' });

      const radioGroup = await findRadioGroup();
      const option1 = await findRadio('Option 1');
      const option2 = await findRadio('Option 2');

      expect(radioGroup).toBeInTheDocument();
      expect(option1).toHaveAttribute('aria-checked', 'true');
      expect(option2).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('icons', () => {
    it('should render icons when provided', async () => {
      setup({
        options: [
          {
            value: 'opt1',
            label: 'Option 1',
            icon: <span>🚀</span>,
          },
          { value: 'opt2', label: 'Option 2' },
        ],
      });

      // Icons appear in both base and overlay text layers
      const icons = await screen.findAllByText('🚀');

      expect(icons.length).toBeGreaterThanOrEqual(1);
    });
  });
});
