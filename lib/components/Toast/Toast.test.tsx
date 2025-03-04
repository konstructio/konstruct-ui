import React, { PropsWithChildren, useState } from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Toast } from './Toast';
import { ToastProps } from './Toast.types';

describe('Toast', () => {
  const defaultProps: ToastProps = {
    title: <h1>Default title</h1>,
    description: 'Default description',
    open: false,
    setOpen: () => {
      console.log('setOpen');
    },
  };

  const setup = (
    props?: Partial<ToastProps>,
    wrapper?: React.FC<PropsWithChildren>,
  ) => {
    const { container: component } = render(
      <Toast {...defaultProps} {...props} />,
      {
        wrapper,
      },
    );

    const user = userEvent.setup();

    return {
      component,
      user,
    };
  };

  it('should render correctly', async () => {
    setup({ ...defaultProps, open: true });
    expect(screen.getByText('Default title')).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should call setOpen when the toast duration is over', async () => {
    const props = {
      ...defaultProps,
      duration: 500,
    } satisfies ToastProps;

    const Wrapper = ({ children, ...props }: PropsWithChildren) => {
      const [open, setOpen] = useState(true);

      return (
        <div {...props}>
          {React.cloneElement(children as React.ReactElement<ToastProps>, {
            ...props,
            open,
            setOpen: (value: boolean) => {
              console.log('setOpen', value);
              setOpen(value);
            },
          })}
        </div>
      );
    };

    setup(props, Wrapper);

    expect(screen.getByText('Default title')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.queryByText('Default title'), {
      timeout: 1000,
    });
  });
});
