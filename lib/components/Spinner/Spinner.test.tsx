import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Spinner } from './Spinner';
import { SpinnerProps } from './Spinner.types';

describe('Spinner', () => {
  const defaultProps = {} satisfies SpinnerProps;

  const setup = (props?: Partial<SpinnerProps>) => {
    const { container: component } = render(
      <Spinner {...defaultProps} {...props} />,
    );

    const getSpinner = () => screen.getByRole('status');

    return {
      component,
      getSpinner,
    };
  };

  it('should render correctly', () => {
    const { getSpinner } = setup();

    expect(getSpinner()).toBeInTheDocument();
  });

  it("should doesn't have violations", async () => {
    const { component } = setup();

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  it('should have aria-label', () => {
    const { getSpinner } = setup();

    expect(getSpinner()).toHaveAttribute('aria-label', 'Loading');
  });

  it('should render text when provided', () => {
    setup({ text: 'Getting everything ready...' });

    expect(screen.getByText('Getting everything ready...')).toBeInTheDocument();
  });

  it('should not render text when not provided', () => {
    const { component } = setup();

    const textElements = component.querySelectorAll('p');

    expect(textElements).toHaveLength(0);
  });

  it('should forward className to wrapper', () => {
    const { getSpinner } = setup({ className: 'custom-class' });

    expect(getSpinner()).toHaveClass('custom-class');
  });

  it('should set data-theme attribute', () => {
    const { getSpinner } = setup({ theme: 'kubefirst' });

    expect(getSpinner()).toHaveAttribute('data-theme', 'kubefirst');
  });

  it('should render with small size variant', () => {
    const { component } = setup({ size: 'sm' });

    const icon = component.querySelector('[aria-hidden="true"]');

    expect(icon).toHaveClass('w-20', 'h-20');
  });

  it('should render with medium size variant by default', () => {
    const { component } = setup();

    const icon = component.querySelector('[aria-hidden="true"]');

    expect(icon).toHaveClass('w-40', 'h-40');
  });

  it('should render with large size variant', () => {
    const { component } = setup({ size: 'lg' });

    const icon = component.querySelector('[aria-hidden="true"]');

    expect(icon).toHaveClass('w-60', 'h-60');
  });
});
