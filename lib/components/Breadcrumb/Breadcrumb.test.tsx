import { FC, PropsWithChildren } from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Props } from './Breadcrumb.types';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const defaultProps: Props = {
    steps: [
      {
        label: 'Step 1',
      },
      {
        label: 'Step 2',
      },
    ],
  };

  const setup = (props?: Partial<Props>, wrapper?: FC) => {
    const { container: component, debug } = render(
      <Breadcrumb {...defaultProps} {...props} />,
      {
        wrapper,
      },
    );

    const user = userEvent.setup();

    const getLinkStep = async (step: string | RegExp) => {
      return screen.findByRole('link', { name: new RegExp(step, 'i') });
    };

    return {
      component,
      user,
      getLinkStep,
      debug,
    };
  };

  it('should render correctly', () => {
    const steps = [{ label: 'Step 1' }] satisfies Props['steps'];
    const { user } = setup({ steps });

    expect(user).toBeDefined();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should click when one of these steps is a route and is clicked', async () => {
    const steps = [
      { label: 'Step 1', to: '/step-1' },
      { label: 'Step 2' },
    ] satisfies Props['steps'];

    const RouterWrapper: FC<PropsWithChildren> = ({ children }) => (
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {children}
                <main>Home Page</main>
              </>
            }
          />
          <Route
            path="/step-1"
            element={
              <>
                {children}
                <main>Step 1 Page</main>
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const { user, getLinkStep } = setup({ steps }, RouterWrapper);

    const step = await getLinkStep('Step 1');

    await user.click(step);

    expect(screen.getByText(/step 1 Page/i)).toBeInTheDocument();
  });

  it('should navigate to the new route and find the right text of the breadcrumbs', async () => {
    const steps = [
      { label: 'Step 1', isActive: false },
      { label: 'Step 2', isActive: false },
      { label: 'Step 3', isActive: false },
      { label: 'Step 4', to: '/step-4' },
      { label: 'Step 5' },
    ] satisfies Props['steps'];

    const RouterWrapper: FC<PropsWithChildren> = ({ children }) => (
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {children}
                <main>Home Page</main>
              </>
            }
          />
          <Route
            path="/step-4"
            element={
              <>
                {children}
                <main>Step 4 Page</main>
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const { user, getLinkStep } = setup({ steps }, RouterWrapper);

    const step = await getLinkStep('Step 4');

    await user.click(step);

    expect(screen.getByText(/step 5/i)).toBeInTheDocument();
  });

  it('should not render the back button by default', () => {
    setup();

    expect(
      screen.queryByRole('button', { name: /go back/i }),
    ).not.toBeInTheDocument();
  });

  it('should render the back button and call onClick when clicked', async () => {
    const onClick = vi.fn();
    const { user } = setup({ backButton: { onClick } });

    const backButton = screen.getByRole('button', { name: /go back/i });

    await user.click(backButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render the back button as a link and navigate when it has a route', async () => {
    const RouterWrapper: FC<PropsWithChildren> = ({ children }) => (
      <MemoryRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {children}
                <main>Home Page</main>
              </>
            }
          />
          <Route
            path="/back"
            element={
              <>
                {children}
                <main>Back Page</main>
              </>
            }
          />
        </Routes>
      </MemoryRouter>
    );

    const { user } = setup({ backButton: { to: '/back' } }, RouterWrapper);

    const backButton = screen.getByRole('link', { name: /go back/i });

    await user.click(backButton);

    expect(screen.getByText(/back page/i)).toBeInTheDocument();
  });

  it('should render the leftIcon and rightIcon of a step', () => {
    const steps = [
      {
        label: 'Step 1',
        leftIcon: <span data-testid="left-icon" />,
        rightIcon: <span data-testid="right-icon" />,
      },
      { label: 'Step 2' },
    ] satisfies Props['steps'];

    setup({ steps });

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });

  it('should render only the leftIcon when rightIcon is not provided', () => {
    const steps = [
      { label: 'Step 1', leftIcon: <span data-testid="left-icon" /> },
      { label: 'Step 2' },
    ] satisfies Props['steps'];

    setup({ steps });

    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('right-icon')).not.toBeInTheDocument();
  });

  it('should render the default back icon when no custom icon is provided', () => {
    setup({ backButton: { onClick: vi.fn() } });

    const backButton = screen.getByRole('button', { name: /go back/i });

    expect(backButton.querySelector('svg')).toBeInTheDocument();
  });

  it('should render a custom icon inside the back button', () => {
    setup({
      backButton: { onClick: vi.fn(), icon: <span data-testid="back-icon" /> },
    });

    expect(screen.getByTestId('back-icon')).toBeInTheDocument();
  });

  it('should use a custom accessible label for the back button', () => {
    setup({ backButton: { onClick: vi.fn(), label: 'Go home' } });

    expect(
      screen.getByRole('button', { name: /go home/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /go back/i }),
    ).not.toBeInTheDocument();
  });

  it('should call onClick even when the back button has a route', async () => {
    const onClick = vi.fn();

    const RouterWrapper: FC<PropsWithChildren> = ({ children }) => (
      <MemoryRouter>{children}</MemoryRouter>
    );

    const { user } = setup({ backButton: { to: '#', onClick } }, RouterWrapper);

    const backButton = screen.getByRole('link', { name: /go back/i });

    await user.click(backButton);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not have accessibility violations with a back button and step icons', async () => {
    const { component } = setup({
      backButton: { onClick: vi.fn() },
      steps: [
        { label: 'Home', to: '#', leftIcon: <span /> },
        { label: 'Step 2' },
      ],
    });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });
});
