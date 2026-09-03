import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { ReactNode } from 'react';

import {
  CollapseTrigger,
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
      return screen.findByRole('button', {
        name: new RegExp(optionText, 'i'),
      });
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

  it('should let a consumer className override the default active and hover colors', async () => {
    const { getLink } = setup({
      options: (
        <NavigationOption
          isActive
          className="hover:bg-metal-800 data-[active=true]:bg-metal-800"
        >
          <a href="/option-1">Option 1</a>
        </NavigationOption>
      ),
    });

    const option = (await getLink(/option 1/i)).closest('li');

    expect(option).toHaveClass('data-[active=true]:bg-metal-800');
    expect(option).toHaveClass('hover:bg-metal-800');
    expect(option).not.toHaveClass(
      'data-[active=true]:bg-kubefirst-dark-blue-800',
    );
    expect(option).not.toHaveClass('hover:bg-kubefirst-dark-blue-800');
  });

  it('should apply the default active color when no override is passed', async () => {
    const { getLink } = setup({
      options: (
        <NavigationOption isActive>
          <a href="/option-1">Option 1</a>
        </NavigationOption>
      ),
    });

    const option = (await getLink(/option 1/i)).closest('li');

    expect(option).toHaveClass('data-[active=true]:bg-kubefirst-dark-blue-800');
    expect(option).toHaveClass('hover:bg-kubefirst-dark-blue-800');
  });

  it("shouldn't have accessibility violations", async () => {
    const { component } = setup({
      options: (
        <NavigationOption>
          <Label>Option 1</Label>
        </NavigationOption>
      ),
    });

    const results = await axe(component);

    expect(results).toHaveNoViolations();
  });

  describe('responsive modes', () => {
    const renderWithGroups = (
      mode: 'expanded' | 'collapsed' | 'drawer',
      extraProps: Partial<Props> = {},
    ) =>
      render(
        <Sidebar mode={mode} {...extraProps}>
          <Logo>
            Logo
            <CollapseTrigger />
          </Logo>
          <Navigation>
            <NavigationGroup title="Main">
              <NavigationOption role="button" onClick={() => {}}>
                <Label>Clusters</Label>
              </NavigationOption>
            </NavigationGroup>

            <NavigationGroup title="Admin">
              <NavigationOption role="button" onClick={() => {}}>
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

    it('keeps labels in the DOM as sr-only in collapsed mode with expandOnHover', () => {
      // In collapsed + expandOnHover the visible label moves to a Radix
      // tooltip rendered via portal by NavigationOption. The inline node
      // stays in the tree as `sr-only` so the link's accessible name is
      // preserved for screen readers.
      renderWithGroups('collapsed');

      expect(screen.getByText('Clusters')).toHaveClass('sr-only');
      expect(screen.getByText('Billing')).toHaveClass('sr-only');
      expect(screen.queryByText('Main')).not.toBeInTheDocument();
      expect(screen.queryByText('Admin')).not.toBeInTheDocument();
    });

    it('hides the logo content but keeps the collapse trigger in collapsed mode by default', () => {
      const { container } = renderWithGroups('collapsed');

      const logo = container.querySelector('[data-konstruct-sidebar-logo]');
      const trigger = screen.getByRole('button', {
        name: /expand navigation/i,
      });

      expect(logo).toHaveAttribute('data-hide-on-collapse');
      expect(trigger).toHaveAttribute(
        'data-konstruct-sidebar-collapse-trigger',
      );
    });

    it('keeps the logo content visible in collapsed mode when showOnCollapse is set', () => {
      const { container } = render(
        <Sidebar mode="collapsed">
          <Logo showOnCollapse>
            <span>Logo</span>
            <CollapseTrigger />
          </Logo>
          <Navigation>
            <NavigationGroup title="Main">
              <NavigationOption>
                <Label>Clusters</Label>
              </NavigationOption>
            </NavigationGroup>
          </Navigation>
        </Sidebar>,
      );

      const logo = container.querySelector('[data-konstruct-sidebar-logo]');

      expect(logo).not.toHaveAttribute('data-hide-on-collapse');
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

    it('expands the sidebar when the collapse trigger is clicked in collapsed mode', async () => {
      renderWithGroups('collapsed');

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', {
        name: /expand navigation/i,
      });

      expect(document.querySelector('aside')).toHaveAttribute(
        'data-mode',
        'collapsed',
      );

      await user.click(trigger);

      expect(document.querySelector('aside')).toHaveAttribute(
        'data-mode',
        'expanded',
      );
      expect(screen.getByText('Main')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /collapse navigation/i }),
      ).toBeInTheDocument();
    });

    it('collapses the sidebar when the collapse trigger is clicked in expanded mode', async () => {
      renderWithGroups('expanded');

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', {
        name: /collapse navigation/i,
      });

      await user.click(trigger);

      expect(document.querySelector('aside')).toHaveAttribute(
        'data-mode',
        'collapsed',
      );
      expect(screen.queryByText('Main')).not.toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /expand navigation/i }),
      ).toBeInTheDocument();
    });

    it('does not render the collapse trigger in drawer mode', async () => {
      renderWithGroups('drawer');

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', {
        name: /open navigation/i,
      });

      await user.click(trigger);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      expect(
        screen.queryByRole('button', { name: /collapse navigation/i }),
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /expand navigation/i }),
      ).not.toBeInTheDocument();
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

    it('closes the drawer when a navigation option is clicked', async () => {
      renderWithGroups('drawer');

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', {
        name: /open navigation/i,
      });

      await user.click(trigger);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      const option = await screen.findByRole('button', { name: /clusters/i });
      await user.click(option);

      await waitFor(() =>
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
      );
    });

    it('keeps the drawer open when a navigation option opts out via closeDrawerOnClick={false}', async () => {
      render(
        <Sidebar mode="drawer">
          <Logo>Logo</Logo>
          <Navigation>
            <NavigationGroup title="Main">
              <NavigationOption
                role="button"
                closeDrawerOnClick={false}
                onClick={() => {}}
              >
                <Label>Stay open</Label>
              </NavigationOption>
            </NavigationGroup>
          </Navigation>
        </Sidebar>,
      );

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', {
        name: /open navigation/i,
      });

      await user.click(trigger);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      const option = await screen.findByRole('button', {
        name: /stay open/i,
      });
      await user.click(option);

      // Wait past the drawer close-animation window; dialog should remain.
      await new Promise((resolve) => setTimeout(resolve, 350));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });
  describe('mode change callbacks', () => {
    it('should report user toggles through onModeChange and CollapseTrigger onToggle', async () => {
      const onModeChange = vitest.fn();
      const onToggle = vitest.fn();
      const user = userEvent.setup();

      render(
        <Sidebar mode="expanded" onModeChange={onModeChange}>
          <Logo>
            Header
            <CollapseTrigger onToggle={onToggle} />
          </Logo>
          <Navigation>
            <NavigationGroup>
              <NavigationOption>
                <Label>Clusters</Label>
              </NavigationOption>
            </NavigationGroup>
          </Navigation>
        </Sidebar>,
      );

      await user.click(
        screen.getByRole('button', { name: 'Collapse navigation' }),
      );

      expect(onModeChange).toHaveBeenCalledWith('collapsed', 'user');
      expect(onToggle).toHaveBeenCalledWith('collapsed');

      await user.click(
        screen.getByRole('button', { name: 'Expand navigation' }),
      );

      expect(onModeChange).toHaveBeenLastCalledWith('expanded', 'user');
      expect(onToggle).toHaveBeenLastCalledWith('expanded');
    });

    it('should report viewport-driven changes with the viewport source', () => {
      const onModeChange = vitest.fn();

      const { rerender } = render(
        <Sidebar mode="expanded" onModeChange={onModeChange}>
          <Logo>Header</Logo>
        </Sidebar>,
      );

      expect(onModeChange).not.toHaveBeenCalled();

      rerender(
        <Sidebar mode="collapsed" onModeChange={onModeChange}>
          <Logo>Header</Logo>
        </Sidebar>,
      );

      expect(onModeChange).toHaveBeenCalledWith('collapsed', 'viewport');
    });
  });

  describe('badge and onIntent', () => {
    it('should render the badge at the end of the option', () => {
      setup({
        options: (
          <NavigationOption badge={<span>New</span>}>
            <a href="#clusters">Clusters</a>
          </NavigationOption>
        ),
      });

      expect(screen.getByText('New')).toBeInTheDocument();
    });

    it('should fire onIntent after hovering for the intent delay and cancel when leaving early', async () => {
      const onIntent = vitest.fn();
      const { user, getLink } = setup({
        options: (
          <NavigationOption onIntent={onIntent} intentDelay={30}>
            <a href="#clusters">Clusters</a>
          </NavigationOption>
        ),
      });

      const link = await getLink(/clusters/);

      await user.hover(link);
      await user.unhover(link);
      await new Promise((resolve) => {
        setTimeout(resolve, 60);
      });

      expect(onIntent).not.toHaveBeenCalled();

      await user.hover(link);

      await waitFor(() => {
        expect(onIntent).toHaveBeenCalledTimes(1);
      });
    });

    it('should fire onIntent immediately on focus and pointer down', async () => {
      const onIntent = vitest.fn();
      const { user, getLink } = setup({
        options: (
          <NavigationOption onIntent={onIntent}>
            <a href="#clusters">Clusters</a>
          </NavigationOption>
        ),
      });

      const link = await getLink(/clusters/);

      await user.tab();

      expect(link).toHaveFocus();
      expect(onIntent).toHaveBeenCalledTimes(1);

      await user.pointer({ keys: '[MouseLeft>]', target: link });

      expect(onIntent).toHaveBeenCalledTimes(2);
    });
  });
});
