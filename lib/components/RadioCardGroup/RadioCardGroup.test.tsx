import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../Button/Button';

import { RadioCardGroup } from './RadioCardGroup';
import { RadioCardGroupProps } from './RadioCardGroup.types';

describe('RadioCardGroup', () => {
  const setup = (
    props?: Partial<RadioCardGroupProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const defaultProps: RadioCardGroupProps = {
      name: 'name-radio-group',
      options: [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ],
    };

    const { container: component } = render(
      <RadioCardGroup {...defaultProps} {...props} />,
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

  it('should render radio options with descriptions when provided', () => {
    const options = [
      {
        label: 'Option 1',
        value: '1',
        description: 'Description for option 1',
      },
      {
        label: 'Option 2',
        value: '2',
        description: 'Description for option 2',
      },
    ];

    setup({ options });

    expect(screen.getByText('Description for option 1')).toBeInTheDocument();
    expect(screen.getByText('Description for option 2')).toBeInTheDocument();
  });

  it('should render radio options without descriptions when not provided', () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];

    setup({ options });

    // Should not find any description text
    expect(
      screen.queryByText(/Description for option/),
    ).not.toBeInTheDocument();
  });

  it('should render radio options with mixed descriptions', () => {
    const options = [
      {
        label: 'Option 1',
        value: '1',
        description: 'Description for option 1',
      },
      { label: 'Option 2', value: '2' },
      {
        label: 'Option 3',
        value: '3',
        description: 'Description for option 3',
      },
    ];

    setup({ options });

    expect(screen.getByText('Description for option 1')).toBeInTheDocument();
    expect(
      screen.queryByText(/Description for option 2/),
    ).not.toBeInTheDocument();
    expect(screen.getByText('Description for option 3')).toBeInTheDocument();
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
        defaultChecked: options.at(0)!.value,
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
