import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Skeleton } from './Skeleton';

describe('Skeleton', () => {
  it('should announce the loading state with the default label', () => {
    render(<Skeleton />);

    const status = screen.getByRole('status', { name: 'Loading' });

    expect(status).toHaveAttribute('aria-busy', 'true');
    expect(status.childElementCount).toBe(1);
  });

  it('should render as many blocks as count with the requested shape', () => {
    render(<Skeleton count={3} shape="text" label="Loading activity" />);

    const status = screen.getByRole('status', { name: 'Loading activity' });

    expect(status.childElementCount).toBe(3);
    expect(status.firstElementChild).toHaveClass('h-3.5', 'animate-pulse');
    expect(status.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });

  it('should apply the circle shape and custom classes', () => {
    render(<Skeleton shape="circle" className="size-16" />);

    const block = screen.getByRole('status').firstElementChild;

    expect(block).toHaveClass('rounded-full', 'size-16');
    expect(block).not.toHaveClass('size-10');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<Skeleton count={2} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
