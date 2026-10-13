import { render, screen, within } from '@testing-library/react';
import { axe } from 'jest-axe';

import { PasswordRules } from './PasswordRules';
import { PasswordRule } from './PasswordRules.types';

const rules: PasswordRule[] = [
  { id: 'length', label: '8 characters', test: (value) => value.length >= 8 },
  { id: 'number', label: 'one number', test: (value) => /\d/.test(value) },
];

describe('PasswordRules', () => {
  it('should list every rule with its status', () => {
    render(<PasswordRules value="abc" rules={rules} title="Must contain:" />);

    expect(screen.getByText('Must contain:')).toBeInTheDocument();

    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(2);
    expect(within(items[0]).getByText('8 characters')).toBeInTheDocument();
    expect(within(items[0]).getByText('pending')).toHaveClass('sr-only');
    expect(items[0]).toHaveAttribute('data-met', 'false');
  });

  it('should mark rules as met while the value changes', () => {
    const { rerender } = render(<PasswordRules value="abc" rules={rules} />);

    rerender(<PasswordRules value="abcdefg1" rules={rules} />);

    const items = screen.getAllByRole('listitem');

    expect(within(items[0]).getByText('met')).toBeInTheDocument();
    expect(within(items[1]).getByText('met')).toBeInTheDocument();
    expect(items[1]).toHaveAttribute('data-met', 'true');
  });

  it('should use custom status labels', () => {
    render(
      <PasswordRules
        value="1"
        rules={rules}
        metLabel="cumplido"
        pendingLabel="pendiente"
      />,
    );

    expect(screen.getByText('pendiente')).toBeInTheDocument();
    expect(screen.getByText('cumplido')).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <PasswordRules value="abc" rules={rules} title="Must contain:" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
