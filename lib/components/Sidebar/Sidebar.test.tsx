import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';

import {
  Footer,
  Label,
  Logo,
  Navigation,
  NavigationGroup,
  NavigationOption,
  Sidebar,
} from './Sidebar';
import { Props } from './Sidebar.types';

type SidebarProps = Props & { options?: ReactNode };

describe('Sidebar', () => {
  const setup = ({ options, ...props }: SidebarProps = {}) => {
    const defaultProps = {
      minWith: 100,
      maxWith: 400,
      mode: 'expanded' as const,
      ...props,
    } satisfies Props;

    const { container: component } = render(
      <Sidebar {...defaultProps}>
        <Logo>Header</Logo>

        <Navigation>
          <NavigationGroup>{options}</NavigationGroup>
        </Navigation>

        <Footer>Footer</Footer>
      </Sidebar>,
    );

    const user = userEvent.setup();

    const getOption = async (optionText: RegExp) => {
      return screen.findByRole('option', { name: new RegExp(optionText, 'i') });
    };

    const getLink = async (linkText: RegExp) => {
      return screen.findByRole('link', { name: new RegExp(linkText, 'i') });
    };

    return {
      user,
      component,
      getOption,
      getLink,
    };
  };

  beforeEach(() => {
    vitest.clearAllMocks();
  });

  it('should render correctly', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  it('should render the header', () => {
    const { component } = setup();

    expect(component).toHaveTextContent('Header');
  });

  it('should render the footer', () => {
    const { component } = setup();

    expect(component).toHaveTextContent('Footer');
  });

  it('should click on the option when the option has a button role', async () => {
    const mockOnClick = vitest.fn();

    const { getOption, user } = setup({
      options: (
        <NavigationOption role="button" onClick={mockOnClick}>
          Option 1
        </NavigationOption>
      ),
    });

    const option = await getOption(/option 1/i);

    await user.click(option);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should click on the option when the option has a chindren', async () => {
    vi.spyOn(window, 'open').mockImplementation(() => null);

    const mockOnClick = vi.fn();
    const mockUrl = 'https://konstruct.io';

    const { getLink, user } = setup({
      options: (
        <NavigationOption>
          <a href={mockUrl} target="_blank" onClick={mockOnClick}>
            Option 1
          </a>
        </NavigationOption>
      ),
    });

    const link = await getLink(/option 1/i);

    await user.click(link);

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockUrl);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  describe('responsive modes', () => {
    const renderWithGroups = (
      mode: 'expanded' | 'collapsed' | 'drawer',
      extraProps: Partial<Props> = {},
    ) =>
      render(
        <Sidebar mode={mode} {...extraProps}>
          <Logo>Logo</Logo>
          <Navigation>
            <NavigationGroup title="Main">
              <NavigationOption>
                <Label>Clusters</Label>
              </NavigationOption>
            </NavigationGroup>

            <NavigationGroup title="Admin">
              <NavigationOption>
                <Label>Billing</Label>
              </NavigationOption>
            </NavigationGroup>
          </Navigation>
          <Footer>
            <Label>Upgrade</Label>
          </Footer>
        </Sidebar>,
      );

    it('shows labels and group titles in expanded mode', () => {
      renderWithGroups('expanded');

      expect(screen.getByText('Clusters')).toBeInTheDocument();
      expect(screen.getByText('Billing')).toBeInTheDocument();
      expect(screen.getByText('Upgrade')).toBeInTheDocument();
      expect(screen.getByText('Main')).toBeInTheDocument();
      expect(screen.getByText('Admin')).toBeInTheDocument();
    });

    it('hides labels and group titles in collapsed mode without expandOnHover', () => {
      renderWithGroups('collapsed', { expandOnHover: false });

      expect(screen.queryByText('Clusters')).not.toBeInTheDocument();
      expect(screen.queryByText('Billing')).not.toBeInTheDocument();
      expect(screen.queryByText('Upgrade')).not.toBeInTheDocument();
      expect(screen.queryByText('Main')).not.toBeInTheDocument();
      expect(screen.queryByText('Admin')).not.toBeInTheDocument();
    });

    it('keeps labels in the DOM but visually clipped in collapsed mode with expandOnHover', () => {
      renderWithGroups('collapsed');

      expect(screen.getByText('Clusters')).toHaveClass('max-w-0');
      expect(screen.getByText('Billing')).toHaveClass('max-w-0');
      expect(screen.queryByText('Main')).not.toBeInTheDocument();
      expect(screen.queryByText('Admin')).not.toBeInTheDocument();
    });

    it('auto-inserts a separator between groups in collapsed mode', () => {
      const { container } = renderWithGroups('collapsed');

      const nav = container.querySelector('nav');
      const groups = nav?.querySelectorAll('ul') ?? [];
      const separators = nav?.querySelectorAll(':scope > div') ?? [];

      expect(groups.length).toBe(2);
      expect(separators.length).toBe(1);
    });

    it('does not insert separators in expanded mode', () => {
      const { container } = renderWithGroups('expanded');

      const nav = container.querySelector('nav');
      const separators = nav?.querySelectorAll(':scope > div') ?? [];

      expect(separators.length).toBe(0);
    });

    it('renders a hamburger trigger and hides the aside in drawer mode', async () => {
      renderWithGroups('drawer');

      const trigger = screen.getByRole('button', {
        name: /open navigation/i,
      });

      expect(trigger).toBeInTheDocument();
      expect(document.querySelector('aside')).not.toBeInTheDocument();
    });

    it('opens the drawer with expanded content when the hamburger is clicked', async () => {
      renderWithGroups('drawer');

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', {
        name: /open navigation/i,
      });

      expect(screen.queryByText('Clusters')).not.toBeInTheDocument();

      await user.click(trigger);

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Clusters')).toBeInTheDocument();
      expect(screen.getByText('Main')).toBeInTheDocument();
    });
  });
});
