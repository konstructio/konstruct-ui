import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { FC, PropsWithChildren } from 'react';

import { Button } from '../Button/Button';

import { Radio } from './Radio';
import { RadioProps } from './Radio.types';

describe('Radio', () => {
  const setup = (
    props?: Partial<RadioProps>,
    wrapper?: FC<PropsWithChildren>,
  ) => {
    const defaultProps = {
      name: 'radio-name',
      value: 'radio-value',
    } satisfies RadioProps;

    const { container: component } = render(
      <Radio {...defaultProps} {...props} />,
      {
        wrapper,
      },
    );

    const getRadio = async () => {
      return screen.findByRole('radio');
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

  it('should render with label', async () => {
    const label = 'radio label';

    setup({
      label,
    });

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup({ label: 'radio label' });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should send the value of radio whe submit the form', async () => {
    const mockSubmit = vitest.fn();
    const value = 'radio-value';

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

    const { getButton, user } = setup({ value, checked: true }, Wrapper);

    const button = await getButton();

    await user.click(button);

    expect(mockSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        'radio-name': value,
      }),
    );
  });
});
