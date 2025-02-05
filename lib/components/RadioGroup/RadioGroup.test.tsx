import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../Button/Button';

import { RadioGroup } from './RadioGroup';
import { RadioGroupProps } from './RadioGroup.types';

describe('RadioGroup', () => {
  const setup = (
    props?: Partial<RadioGroupProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const defaultProps: RadioGroupProps = {
      name: 'name-radio-group',
      options: [
        { label: 'Option 1', value: '1', checked: true },
        { label: 'Option 2', value: '2' },
      ],
    };

    const { container: component } = render(
      <RadioGroup {...defaultProps} {...props} />,
      { wrapper },
    );

    const getRadio = async (radioLabel: RegExp) => {
      return screen.findByRole('radio', { name: new RegExp(radioLabel, 'i') });
    };

    const getButton = async () => {
      return screen.findByRole('button');
    };

    const user = userEvent.setup();

    return {
      component,
      user,
      getRadio,
      getButton,
    };
  };

  it('should render correctly', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it('should render all radio options', async () => {
    const { getRadio } = setup();

    expect(await getRadio(/Option 1/i)).toBeInTheDocument();
    expect(await getRadio(/Option 2/i)).toBeInTheDocument();
  });

  it('should render the radio options with the correct name', async () => {
    const { getRadio } = setup();

    expect(await getRadio(/Option 1/i)).toHaveAttribute(
      'name',
      'name-radio-group',
    );
    expect(await getRadio(/Option 2/i)).toHaveAttribute(
      'name',
      'name-radio-group',
    );
  });

  it("should doesn't have violations", async () => {
    const { component } = setup({ label: 'radio label' });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should send the value of radio whe submit the form', async () => {
    const mockSubmit = vitest.fn();
    const options = [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
    ];

    const Wrapper: FC<PropsWithChildren> = ({ children }) => {
      return (
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
    };

    const { getButton, getRadio, user } = setup(
      {
        options,
      },
      Wrapper,
    );

    const radio = await getRadio(new RegExp(options.at(1)!.label, 'i'));

    await user.click(radio);

    const button = await getButton();

    await user.click(button);

    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        'name-radio-group': options.at(1)?.value,
      }),
    );
  });
});
