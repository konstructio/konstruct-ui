import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
});
