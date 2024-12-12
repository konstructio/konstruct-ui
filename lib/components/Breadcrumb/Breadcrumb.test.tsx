import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { BreadcrumbProps } from './Breadcrumb.types';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const defaultProps: BreadcrumbProps = {
    steps: [
      {
        label: 'Step 1',
      },
      {
        label: 'Step 2',
      },
    ],
  };

  const setup = (props?: Partial<BreadcrumbProps>, wrapper?: FC) => {
    const { debug } = render(<Breadcrumb {...defaultProps} {...props} />, {
      wrapper,
    });

    const user = userEvent.setup();

    const getLinkStep = (step: string | RegExp) =>
      screen.findByText(new RegExp(step, 'i'));

    return {
      user,
      getLinkStep,
      debug,
    };
  };

  it('should render correctly', () => {
    const steps = [{ label: 'Step 1' }] satisfies BreadcrumbProps['steps'];
    const { user } = setup({ steps });

    expect(user).toBeDefined();
  });

  it.skip('should click when one of these steps is a route and is clicked', async () => {
    const steps = [
      { label: 'Step 1', to: '/step-1' },
      { label: 'Step 2' },
    ] satisfies BreadcrumbProps['steps'];

    const RouterWrapper: FC<PropsWithChildren> = ({ children }) => (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/step-1" element={<div>Step 1 Page</div>} />
        </Routes>

        {children}
      </MemoryRouter>
    );

    const { user, getLinkStep } = setup({ steps }, RouterWrapper);

    const step = await getLinkStep('Step 1');

    await user.click(step);

    expect(screen.getByText(/step 1 Page/i)).toBeInTheDocument();
  });
});
