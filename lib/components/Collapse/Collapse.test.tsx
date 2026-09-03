import { render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MotionGlobalConfig } from 'motion/react';

import { Collapse } from './Collapse';

describe('Collapse', () => {
  beforeAll(() => {
    MotionGlobalConfig.skipAnimations = true;
  });

  afterAll(() => {
    MotionGlobalConfig.skipAnimations = false;
  });

  it('should render the children while open and remove them once closed', async () => {
    const onExitComplete = vi.fn();
    const { rerender } = render(
      <Collapse isOpen onExitComplete={onExitComplete}>
        <p>Advanced options</p>
      </Collapse>,
    );

    expect(screen.getByText('Advanced options')).toBeInTheDocument();

    rerender(
      <Collapse isOpen={false} onExitComplete={onExitComplete}>
        <p>Advanced options</p>
      </Collapse>,
    );

    await waitFor(() => {
      expect(screen.queryByText('Advanced options')).not.toBeInTheDocument();
    });
    expect(onExitComplete).toHaveBeenCalledTimes(1);
  });

  it('should not render the children when initially closed', () => {
    render(
      <Collapse isOpen={false}>
        <p>Advanced options</p>
      </Collapse>,
    );

    expect(screen.queryByText('Advanced options')).not.toBeInTheDocument();
  });

  it('should keep the children mounted but hidden with keepMounted', async () => {
    const { rerender } = render(
      <>
        <button type="button" aria-expanded aria-controls="advanced">
          Toggle
        </button>
        <Collapse id="advanced" isOpen keepMounted>
          <p>Advanced options</p>
        </Collapse>
      </>,
    );

    expect(screen.getByText('Advanced options')).toBeVisible();
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-controls',
      'advanced',
    );

    rerender(
      <>
        <button type="button" aria-expanded={false} aria-controls="advanced">
          Toggle
        </button>
        <Collapse id="advanced" isOpen={false} keepMounted>
          <p>Advanced options</p>
        </Collapse>
      </>,
    );

    await waitFor(() => {
      expect(screen.getByText('Advanced options')).not.toBeVisible();
    });
    expect(document.getElementById('advanced')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <Collapse isOpen>
        <p>Advanced options</p>
      </Collapse>,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
