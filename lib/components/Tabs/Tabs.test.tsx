import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  const defaultProps = {
    defaultValue: 'tab1',
    children: (
      <>
        <Tabs.List orientation="horizontal">
          <Tabs.Trigger tab="tab1" label="Tab 1" isActive={true}>
            Tab 1
          </Tabs.Trigger>
          <Tabs.Trigger tab="tab2" label="Tab 2" isActive={false}>
            Tab 2
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </>
    ),
  };

  it('renders the tabs component with default props', () => {
    render(<Tabs {...defaultProps} />);

    // Check if the tabs are rendered
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();

    // Check if the content is rendered
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  it('applies the correct theme class', () => {
    const { container } = render(
      <Tabs {...defaultProps} theme="kubefirst-dark" />,
    );
    expect(container.firstChild).toHaveAttribute(
      'data-theme',
      'kubefirst-dark',
    );
  });

  it('applies the correct orientation class', () => {
    const { container } = render(
      <Tabs {...defaultProps} orientation="vertical" />,
    );
    expect(container.firstChild).toHaveAttribute(
      'data-orientation',
      'vertical',
    );
    expect(container.firstChild).toHaveAttribute(
      'aria-orientation',
      'vertical',
    );
  });

  it('switches between tabs when clicked', async () => {
    render(<Tabs {...defaultProps} />);

    // Initially, first tab content should be visible
    expect(screen.getByText('Content 1')).toHaveAttribute(
      'data-state',
      'active',
    );
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    // Click the second tab
    await userEvent.click(screen.getByText('Tab 2'));

    // Now second tab content should be visible
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content 2')).toHaveAttribute(
      'data-state',
      'active',
    );
  });

  it('renders with custom className', () => {
    const { container } = render(
      <Tabs {...defaultProps} className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(<Tabs {...defaultProps} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('Trigger without isActive', () => {
    it('derives the active styles from the tabs state', async () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List orientation="horizontal">
            <Tabs.Trigger tab="tab1" label="Tab 1" />
            <Tabs.Trigger tab="tab2" label="Tab 2" />
          </Tabs.List>
          <Tabs.Content value="tab1">Content 1</Tabs.Content>
          <Tabs.Content value="tab2">Content 2</Tabs.Content>
        </Tabs>,
      );

      const firstTab = screen.getByRole('tab', { name: 'Tab 1' });
      const secondTab = screen.getByRole('tab', { name: 'Tab 2' });

      expect(firstTab).toHaveAttribute('data-state', 'active');
      expect(screen.getByText('Tab 2')).toHaveClass(
        'group-data-[state=active]/tab:after:scale-y-100',
      );

      await userEvent.click(secondTab);

      expect(secondTab).toHaveAttribute('data-state', 'active');
      expect(firstTab).toHaveAttribute('data-state', 'inactive');
      expect(screen.getByText('Content 2')).toBeInTheDocument();
    });
  });

  describe('with items', () => {
    const items = [
      { value: 'overview', label: 'Overview', content: 'Overview content' },
      { value: 'settings', label: 'Settings', content: 'Settings content' },
      { value: 'billing', label: 'Billing', content: 'Billing content' },
    ];

    it('renders the list, triggers and contents and starts on the first item', async () => {
      const onValueChange = vi.fn();

      render(<Tabs items={items} onValueChange={onValueChange} />);

      expect(screen.getAllByRole('tab')).toHaveLength(3);
      expect(screen.getByText('Overview content')).toBeInTheDocument();

      await userEvent.click(screen.getByRole('tab', { name: 'Settings' }));

      expect(onValueChange).toHaveBeenCalledWith('settings');
      expect(screen.getByText('Settings content')).toBeInTheDocument();
      expect(screen.queryByText('Overview content')).not.toBeInTheDocument();
    });

    it('respects defaultValue', () => {
      render(<Tabs items={items} defaultValue="billing" />);

      expect(screen.getByText('Billing content')).toBeInTheDocument();
    });

    it('falls back to the first item when the active one disappears', async () => {
      const { rerender } = render(<Tabs items={items} />);

      await userEvent.click(screen.getByRole('tab', { name: 'Billing' }));

      expect(screen.getByText('Billing content')).toBeInTheDocument();

      rerender(<Tabs items={items.slice(0, 2)} />);

      expect(screen.getByText('Overview content')).toBeInTheDocument();
      expect(
        screen.queryByRole('tab', { name: 'Billing' }),
      ).not.toBeInTheDocument();
    });

    it('stays controlled when value is provided', async () => {
      const onValueChange = vi.fn();

      render(
        <Tabs items={items} value="settings" onValueChange={onValueChange} />,
      );

      expect(screen.getByText('Settings content')).toBeInTheDocument();

      await userEvent.click(screen.getByRole('tab', { name: 'Billing' }));

      expect(onValueChange).toHaveBeenCalledWith('billing');
      expect(screen.getByText('Settings content')).toBeInTheDocument();
      expect(screen.queryByText('Billing content')).not.toBeInTheDocument();
    });

    it("shouldn't have accessibility violations", async () => {
      const { container } = render(<Tabs items={items} />);

      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });
  });
});
