import { CellContext } from '@tanstack/react-table';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Actions } from './Actions';
import { Action, Props } from './Actions.types';
import { ACTIONS_SHEET_QUERY } from './constants';
import { CLOSE_DELAY_MS } from './components/PortalActions/constants';

type Row = { id: number; name: string };

const row: Row = { id: 1, name: 'Pikachu' };

const buildProps = (
  actions: Action<Row>[] | undefined,
  overrides: Partial<Props<Row>> = {},
): Props<Row> => {
  return {
    ...({ row: { original: row } } as unknown as CellContext<Row, unknown>),
    actions: actions as Action<Row>[],
    ...overrides,
  };
};

describe('Actions', () => {
  it('should render the trigger and the action labels', () => {
    render(
      <Actions
        {...buildProps([
          { label: 'Edit', onClick: vi.fn() },
          { label: 'Delete', onClick: vi.fn() },
        ])}
      />,
    );

    expect(screen.getByText('Show Actions')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('should render nothing when no actions are provided', () => {
    const { container } = render(<Actions {...buildProps(undefined)} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should call the action onClick with the row data when an option is clicked', async () => {
    const onEdit = vi.fn();
    const user = userEvent.setup();

    render(<Actions {...buildProps([{ label: 'Edit', onClick: onEdit }])} />);

    await user.click(screen.getByText('Edit'));

    expect(onEdit).toHaveBeenCalledWith(row);
  });

  it('should open the panel downward by default', () => {
    const { container } = render(
      <Actions {...buildProps([{ label: 'Edit', onClick: vi.fn() }])} />,
    );

    const panel = container.querySelector('.absolute');

    expect(panel?.className).toContain('top-full');
    expect(panel?.className).not.toContain('bottom-full');
  });

  it('should open the panel upward when there is not enough space below the clipping container', () => {
    const { container } = render(
      <div data-testid="clip">
        <Actions
          {...buildProps([
            { label: 'Edit', onClick: vi.fn() },
            { label: 'Delete', onClick: vi.fn() },
          ])}
        />
      </div>,
    );

    const clip = screen.getByTestId('clip');
    const root = container.querySelector('.group') as HTMLElement;
    const panel = container.querySelector('.absolute') as HTMLElement;

    clip.getBoundingClientRect = () => ({ top: 0, bottom: 100 }) as DOMRect;
    root.getBoundingClientRect = () => ({ top: 90, bottom: 98 }) as DOMRect;

    const getComputedStyleSpy = vi
      .spyOn(window, 'getComputedStyle')
      .mockImplementation(
        (element: Element) =>
          ({
            overflowY: element === clip ? 'hidden' : 'visible',
          }) as CSSStyleDeclaration,
      );

    fireEvent.mouseEnter(root);

    getComputedStyleSpy.mockRestore();

    expect(panel.className).toContain('bottom-full');
    expect(panel.className).not.toContain('top-full');
  });

  it('should expose a disabled action as aria-disabled and ignore its clicks', async () => {
    const onDelete = vi.fn();
    const user = userEvent.setup();

    render(
      <Actions
        {...buildProps([
          { label: 'Delete', disabled: true, onClick: onDelete },
        ])}
      />,
    );

    const action = screen.getByRole('button', { name: 'Delete' });

    expect(action).toHaveAttribute('aria-disabled', 'true');

    await user.hover(action);
    await user.click(action);

    expect(onDelete).not.toHaveBeenCalled();
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should position the disabled reason tooltip on the requested side', async () => {
    const user = userEvent.setup();

    render(
      <Actions
        {...buildProps(
          [
            {
              label: 'Delete',
              disabledReason: 'In use',
              disabledReasonSide: 'bottom',
              onClick: vi.fn(),
            },
            { label: 'Detach', disabledReason: 'Busy', onClick: vi.fn() },
          ],
          { disabledReasonSide: 'right' },
        )}
      />,
    );

    await user.hover(screen.getByRole('button', { name: 'Delete' }));

    expect(
      (await screen.findByRole('tooltip')).closest('[data-side]'),
    ).toHaveAttribute('data-side', 'bottom');

    await user.unhover(screen.getByRole('button', { name: 'Delete' }));
    await user.hover(screen.getByRole('button', { name: 'Detach' }));

    expect(
      (await screen.findByRole('tooltip', { name: 'Busy' })).closest(
        '[data-side]',
      ),
    ).toHaveAttribute('data-side', 'right');
  });

  it('should explain a disabled action with a tooltip', async () => {
    const onDelete = vi.fn();
    const user = userEvent.setup();

    render(
      <Actions
        {...buildProps([
          {
            label: 'Delete',
            disabledReason: 'This volume is attached',
            onClick: onDelete,
          },
        ])}
      />,
    );

    const action = screen.getByRole('button', { name: 'Delete' });

    expect(action).toHaveAttribute('aria-disabled', 'true');

    await user.hover(action);

    expect(await screen.findByRole('tooltip')).toHaveTextContent(
      'This volume is attached',
    );

    await user.click(action);

    expect(onDelete).not.toHaveBeenCalled();
  });

  it('should stop revealing the panel on hover after an action is selected until the pointer leaves', async () => {
    const onEdit = vi.fn();
    const user = userEvent.setup();

    const { container } = render(
      <Actions {...buildProps([{ label: 'Edit', onClick: onEdit }])} />,
    );

    const root = container.querySelector('.group') as HTMLElement;
    const panel = container.querySelector('.absolute') as HTMLElement;

    expect(panel.className).toContain('group-hover:visible');

    await user.click(screen.getByRole('button', { name: 'Edit' }));

    expect(onEdit).toHaveBeenCalledWith(row);
    expect(panel.className).not.toContain('group-hover:visible');

    fireEvent.mouseLeave(root);

    expect(panel.className).toContain('group-hover:visible');
  });

  describe('with openOnHover disabled', () => {
    it('should toggle the panel on click instead of hover', async () => {
      const user = userEvent.setup();

      const { container } = render(
        <div>
          <span>outside</span>
          <Actions
            {...buildProps([{ label: 'Edit', onClick: vi.fn() }], {
              openOnHover: false,
            })}
          />
        </div>,
      );

      const trigger = screen.getByRole('button', { name: /show actions/i });
      const panel = container.querySelector('.absolute') as HTMLElement;

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(panel.className).not.toContain('group-hover:visible');
      expect(panel.className).toContain('invisible');

      await user.click(trigger);

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(panel.className).toContain('visible');
      expect(panel.className).not.toContain('invisible');

      await user.click(screen.getByText('outside'));

      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(panel.className).toContain('invisible');
    });

    it('should close the panel after selecting an action or pressing Escape', async () => {
      const onEdit = vi.fn();
      const user = userEvent.setup();

      const { container } = render(
        <Actions
          {...buildProps([{ label: 'Edit', onClick: onEdit }], {
            openOnHover: false,
          })}
        />,
      );

      const trigger = screen.getByRole('button', { name: /show actions/i });
      const panel = container.querySelector('.absolute') as HTMLElement;

      await user.click(trigger);
      await user.click(screen.getByRole('button', { name: 'Edit' }));

      expect(onEdit).toHaveBeenCalledWith(row);
      expect(panel.className).toContain('invisible');

      await user.click(trigger);
      expect(panel.className).not.toContain('invisible');

      await user.keyboard('{Escape}');
      expect(panel.className).toContain('invisible');
    });
  });

  describe('on touch', () => {
    const setupInline = (actions: Action<Row>[]) => {
      const user = userEvent.setup();
      const { container } = render(
        <div>
          <span>outside</span>
          <Actions {...buildProps(actions)} />
        </div>,
      );
      const trigger = screen.getByRole('button', { name: /show actions/i });
      const panel = container.querySelector('.absolute') as HTMLElement;

      return { user, trigger, panel };
    };

    it('should open the hover panel on a tap and close it on a tap outside', async () => {
      const { user, trigger, panel } = setupInline([
        { label: 'Edit', onClick: vi.fn() },
      ]);

      expect(panel.className).toContain('invisible');

      await user.pointer({ keys: '[TouchA]', target: trigger });

      expect(panel.className).not.toContain('invisible');

      await user.pointer({
        keys: '[TouchA]',
        target: screen.getByText('outside'),
      });

      expect(panel.className).toContain('invisible');
    });

    it('should close the panel after a tapped action runs', async () => {
      const onEdit = vi.fn();
      const { user, trigger, panel } = setupInline([
        { label: 'Edit', onClick: onEdit },
      ]);

      await user.pointer({ keys: '[TouchA]', target: trigger });
      await user.pointer({
        keys: '[TouchA]',
        target: screen.getByRole('button', { name: 'Edit' }),
      });

      expect(onEdit).toHaveBeenCalledWith(row);
      expect(panel.className).toContain('invisible');
    });

    it('should keep the trigger large enough and free of tap delay', () => {
      const { trigger } = setupInline([{ label: 'Edit', onClick: vi.fn() }]);

      expect(trigger).toHaveClass(
        'tap-target',
        'pointer-coarse:min-h-11',
        'pointer-coarse:min-w-11',
      );
    });

    it('should give the action items a pressed state', () => {
      setupInline([{ label: 'Edit', onClick: vi.fn() }]);

      expect(screen.getByRole('button', { name: 'Edit' })).toHaveClass(
        'tap-target',
        'active:bg-gray-50',
        'dark:active:bg-metal-700',
      );
    });

    it('should reveal the disabled reason on a tap and hide it on the next one', async () => {
      const onDelete = vi.fn();
      const { user } = setupInline([
        { label: 'Delete', disabledReason: 'In use', onClick: onDelete },
      ]);
      const action = screen.getByRole('button', { name: 'Delete' });

      await user.pointer({ keys: '[TouchA]', target: action });

      expect(onDelete).not.toHaveBeenCalled();
      expect(action).toHaveAccessibleDescription('In use');

      await user.pointer({ keys: '[TouchA]', target: action });

      expect(screen.queryByText('In use')).not.toBeInTheDocument();
    });

    it('should not reveal the disabled reason inline on a mouse click', async () => {
      const { user } = setupInline([
        { label: 'Delete', disabledReason: 'In use', onClick: vi.fn() },
      ]);

      await user.click(screen.getByRole('button', { name: 'Delete' }));

      expect(
        screen.getByRole('button', { name: 'Delete' }),
      ).not.toHaveAttribute('aria-describedby');
    });
  });

  describe('on phones', () => {
    const originalMatchMedia = window.matchMedia;

    beforeEach(() => {
      vi.clearAllMocks();
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        writable: true,
        value: vi.fn((query: string) => ({
          matches: query === ACTIONS_SHEET_QUERY,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        })),
      });
    });

    afterEach(() => {
      Object.defineProperty(window, 'matchMedia', {
        configurable: true,
        writable: true,
        value: originalMatchMedia,
      });
    });

    const setup = (
      actions: Action<Row>[],
      overrides: Partial<Props<Row>> = {},
    ) => {
      const user = userEvent.setup();
      const { container } = render(
        <Actions
          {...buildProps(actions, {
            isPortal: true,
            mobileSheet: true,
            ...overrides,
          })}
        />,
      );

      const open = async () => {
        await user.click(screen.getByRole('button', { name: 'Show Actions' }));
      };

      return { container, open, user };
    };

    it('should keep the menu instead of a sheet unless mobileSheet is set', async () => {
      const { open } = setup([{ label: 'Edit', onClick: vi.fn() }], {
        mobileSheet: false,
      });

      await open();

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('should keep the actions closed until the trigger is tapped', () => {
      setup([{ label: 'Edit', onClick: vi.fn() }]);

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Show Actions' }),
      ).toHaveAttribute('aria-haspopup', 'dialog');
    });

    it('should list the actions in a sheet titled Actions by default', async () => {
      const { open } = setup([
        { label: 'Edit', onClick: vi.fn() },
        { label: 'Delete', onClick: vi.fn() },
      ]);

      await open();

      const sheet = await screen.findByRole('dialog', { name: 'Actions' });

      expect(
        within(sheet).getByRole('button', { name: 'Edit' }),
      ).toBeInTheDocument();
      expect(
        within(sheet).getByRole('button', { name: 'Delete' }),
      ).toBeInTheDocument();
    });

    it('should title the sheet after the row when asked to', async () => {
      const { open } = setup([{ label: 'Edit', onClick: vi.fn() }], {
        sheetTitle: (rowData) => rowData.name,
      });

      await open();

      expect(
        await screen.findByRole('dialog', { name: 'Pikachu' }),
      ).toBeInTheDocument();
    });

    it('should run the action with the row data and close the sheet', async () => {
      const onEdit = vi.fn();
      const { open, user } = setup([{ label: 'Edit', onClick: onEdit }]);

      await open();
      await user.click(
        within(await screen.findByRole('dialog')).getByRole('button', {
          name: 'Edit',
        }),
      );

      expect(onEdit).toHaveBeenCalledWith(row);
      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
      });
    });

    it('should keep a disabled action inert and show why', async () => {
      const onDelete = vi.fn();
      const { open } = setup([
        {
          label: 'Delete',
          disabledReason: 'Cannot delete while assigned',
          onClick: onDelete,
        },
      ]);

      await open();

      const sheet = await screen.findByRole('dialog');

      expect(
        within(sheet).getByRole('button', { name: /Delete/ }),
      ).toBeDisabled();
      expect(
        within(sheet).getByText('Cannot delete while assigned'),
      ).toBeInTheDocument();
    });

    it('should set a destructive action apart below a divider', async () => {
      const { open } = setup([
        { label: 'Edit', onClick: vi.fn() },
        {
          label: 'Delete',
          destructive: true,
          separator: true,
          onClick: vi.fn(),
        },
      ]);

      await open();

      const sheet = await screen.findByRole('dialog');

      expect(within(sheet).getByRole('separator')).toBeInTheDocument();
      expect(within(sheet).getByRole('button', { name: 'Delete' })).toHaveClass(
        'text-red-600',
      );
    });

    it('should drop the grab handle when the sheet is not draggable', async () => {
      const { open } = setup([{ label: 'Edit', onClick: vi.fn() }], {
        sheetDraggable: false,
      });

      await open();

      const sheet = await screen.findByRole('dialog');

      expect(
        sheet.querySelector('[data-sheet-handle]'),
      ).not.toBeInTheDocument();
    });

    it("shouldn't have accessibility violations", async () => {
      const { container, open } = setup([{ label: 'Edit', onClick: vi.fn() }]);

      await open();
      await screen.findByRole('dialog');

      expect(await axe(container.ownerDocument.body)).toHaveNoViolations();
    });
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <Actions
        {...buildProps([
          { label: 'Edit', onClick: vi.fn() },
          { label: 'Delete', disabledReason: 'In use', onClick: vi.fn() },
        ])}
      />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  describe('with isPortal', () => {
    const defaultActions = (onEdit: () => void, onDelete: () => void) => {
      return [
        { label: 'Edit', onClick: onEdit },
        { label: 'Delete', onClick: onDelete },
      ] satisfies Action<Row>[];
    };

    const setup = (
      overrides: Partial<Props<Row>> = {},
      buildActions: (
        onEdit: () => void,
        onDelete: () => void,
      ) => Action<Row>[] = defaultActions,
    ) => {
      const onEdit = vi.fn();
      const onDelete = vi.fn();

      const { container } = render(
        <table>
          <tbody>
            <tr>
              <td>{row.name}</td>
              <td>
                <Actions
                  {...buildProps(buildActions(onEdit, onDelete), {
                    isPortal: true,
                    ...overrides,
                  })}
                />
              </td>
            </tr>
          </tbody>
        </table>,
      );

      const user = userEvent.setup();
      const trigger = screen.getByRole('button', { name: /show actions/i });
      const getMenu = () => {
        return screen.findByRole('menu');
      };

      return { container, user, trigger, onEdit, onDelete, getMenu };
    };

    const mockLayout = ({
      innerHeight,
      menuHeight,
      menuWidth,
      triggerRect,
    }: {
      innerHeight: number;
      menuHeight: number;
      menuWidth: number;
      triggerRect: Pick<DOMRect, 'top' | 'bottom' | 'right'>;
    }) => {
      vi.stubGlobal('innerHeight', innerHeight);
      vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(
        menuHeight,
      );
      vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(
        menuWidth,
      );
      vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(
        triggerRect as DOMRect,
      );
    };

    const originalInnerHeight = window.innerHeight;

    afterEach(() => {
      vi.restoreAllMocks();
      vi.stubGlobal('innerHeight', originalInnerHeight);
    });

    it('should keep the menu closed until the trigger is used', () => {
      const { trigger } = setup();

      expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should open the menu on click and render it outside the table', async () => {
      const { user, trigger, getMenu } = setup();

      await user.click(trigger);

      const menu = await getMenu();

      expect(trigger).toHaveAttribute('aria-expanded', 'true');
      expect(trigger).toHaveAttribute('aria-controls', menu.id);
      expect(
        within(screen.getByRole('table')).queryByRole('menu'),
      ).not.toBeInTheDocument();
      expect(
        within(menu).getByRole('menuitem', { name: 'Edit' }),
      ).toBeInTheDocument();
      expect(
        within(menu).getByRole('menuitem', { name: 'Delete' }),
      ).toBeInTheDocument();
    });

    it('should call the action with the row data and close the menu', async () => {
      const { user, trigger, onEdit, getMenu } = setup();

      await user.click(trigger);
      await user.click(
        within(await getMenu()).getByRole('menuitem', { name: 'Edit' }),
      );

      expect(onEdit).toHaveBeenCalledWith(row);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should keep the menu open when a mouse click follows the hover', async () => {
      const { user, trigger, getMenu } = setup();

      await user.hover(trigger);
      await getMenu();
      await user.click(trigger);

      expect(screen.getByRole('menu')).toBeInTheDocument();
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('should toggle the menu on touch taps and ignore the touch pointer leaving', async () => {
      const { user, trigger, getMenu } = setup();

      await user.pointer({ keys: '[TouchA]', target: trigger });
      expect(await getMenu()).toBeInTheDocument();

      await new Promise((resolve) => {
        setTimeout(resolve, CLOSE_DELAY_MS * 2);
      });
      expect(screen.getByRole('menu')).toBeInTheDocument();

      await user.pointer({ keys: '[TouchA]', target: trigger });
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should toggle the menu with Enter and Space from the keyboard', async () => {
      const { user, trigger, getMenu } = setup();

      trigger.focus();
      await user.keyboard('{Enter}');
      expect(await getMenu()).toBeInTheDocument();

      await user.keyboard('{Enter}');
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      await user.keyboard(' ');
      expect(await getMenu()).toBeInTheDocument();
    });

    it('should open on hover and close after leaving', async () => {
      const { user, trigger, getMenu } = setup();

      await user.hover(trigger);

      expect(await getMenu()).toBeInTheDocument();

      await user.unhover(trigger);

      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
    });

    it('should close when clicking outside', async () => {
      const { user, trigger, getMenu } = setup();

      await user.click(trigger);
      await getMenu();
      await user.click(screen.getByRole('cell', { name: row.name }));

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should highlight the row while the menu is open', async () => {
      const { user, trigger, getMenu } = setup();
      const tableRow = screen.getByRole('row');

      expect(tableRow).not.toHaveAttribute('data-actions-open');

      await user.click(trigger);
      await getMenu();

      expect(tableRow).toHaveAttribute('data-actions-open');

      await user.keyboard('{Escape}');

      expect(tableRow).not.toHaveAttribute('data-actions-open');
    });

    it('should support keyboard navigation and return focus to the trigger', async () => {
      const { user, trigger, getMenu } = setup();

      trigger.focus();
      await user.keyboard('{ArrowDown}');

      const menu = await getMenu();
      const edit = within(menu).getByRole('menuitem', { name: 'Edit' });
      const remove = within(menu).getByRole('menuitem', { name: 'Delete' });

      expect(edit).toHaveFocus();

      await user.keyboard('{ArrowDown}');
      expect(remove).toHaveFocus();

      await user.keyboard('{ArrowDown}');
      expect(edit).toHaveFocus();

      await user.keyboard('{End}');
      expect(remove).toHaveFocus();

      await user.keyboard('{Home}');
      expect(edit).toHaveFocus();

      await user.keyboard('{Escape}');

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      expect(trigger).toHaveFocus();
    });

    it('should open with the last item focused on ArrowUp', async () => {
      const { user, trigger, getMenu } = setup();

      trigger.focus();
      await user.keyboard('{ArrowUp}');

      expect(
        within(await getMenu()).getByRole('menuitem', { name: 'Delete' }),
      ).toHaveFocus();
    });

    it('should position the menu below the trigger, aligned to its right edge', async () => {
      mockLayout({
        innerHeight: 1000,
        menuHeight: 100,
        menuWidth: 215,
        triggerRect: { top: 200, bottom: 230, right: 800 },
      });

      const { user, trigger, getMenu } = setup();

      await user.click(trigger);
      const menu = await getMenu();

      expect(menu).toHaveStyle({ top: '234px', left: '585px' });
    });

    it('should snap the menu to whole pixels for a fractional trigger rect', async () => {
      mockLayout({
        innerHeight: 1000,
        menuHeight: 100,
        menuWidth: 215,
        triggerRect: { top: 200.5, bottom: 230.5, right: 800.5 },
      });

      const { user, trigger, getMenu } = setup();

      await user.click(trigger);
      const menu = await getMenu();

      expect(menu).toHaveStyle({ top: '235px', left: '586px' });
    });

    it('should flip the menu above the trigger when it does not fit below', async () => {
      mockLayout({
        innerHeight: 300,
        menuHeight: 100,
        menuWidth: 215,
        triggerRect: { top: 200, bottom: 230, right: 800 },
      });

      const { user, trigger, getMenu } = setup();

      await user.click(trigger);
      const menu = await getMenu();

      expect(menu).toHaveStyle({ top: '96px', left: '585px' });
    });

    it('should follow the trigger when a container scrolls', async () => {
      mockLayout({
        innerHeight: 1000,
        menuHeight: 100,
        menuWidth: 215,
        triggerRect: { top: 200, bottom: 230, right: 800 },
      });

      const { user, trigger, getMenu } = setup();

      await user.click(trigger);
      const menu = await getMenu();

      expect(menu).toHaveStyle({ top: '234px', left: '585px' });

      vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
        top: 100,
        bottom: 130,
        right: 600,
      } as DOMRect);
      fireEvent.scroll(screen.getByRole('table'));

      expect(menu).toHaveStyle({ top: '134px', left: '385px' });
      expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    it('should keep a disabled item focusable but inert, and keep the menu open', async () => {
      const { user, trigger, onDelete, getMenu } = setup(
        {},
        (onEdit, onDelete) => {
          return [
            { label: 'Edit', onClick: onEdit },
            {
              label: 'Delete',
              disabledReason: 'This volume is attached',
              onClick: onDelete,
            },
          ];
        },
      );

      trigger.focus();
      await user.keyboard('{ArrowUp}');

      const remove = within(await getMenu()).getByRole('menuitem', {
        name: 'Delete',
      });

      expect(remove).toHaveFocus();
      expect(remove).toHaveAttribute('aria-disabled', 'true');

      await user.keyboard('{Enter}');

      expect(onDelete).not.toHaveBeenCalled();
      expect(screen.getByRole('menu')).toBeInTheDocument();

      await user.hover(remove);

      expect(await screen.findByRole('tooltip')).toHaveTextContent(
        'This volume is attached',
      );
    });

    it('should not reopen on hover right after selecting an action', async () => {
      const { user, trigger, onEdit, getMenu } = setup();

      await user.hover(trigger);
      await user.click(
        within(await getMenu()).getByRole('menuitem', { name: 'Edit' }),
      );

      expect(onEdit).toHaveBeenCalledWith(row);
      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      await user.hover(trigger);

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      await user.unhover(trigger);
      await user.hover(trigger);

      expect(await getMenu()).toBeInTheDocument();
    });

    it('should close the menu on a tap outside it', async () => {
      const { user, trigger, getMenu } = setup();

      await user.pointer({ keys: '[TouchA]', target: trigger });
      await getMenu();

      await user.pointer({
        keys: '[TouchA]',
        target: screen.getByText('Pikachu'),
      });

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();
    });

    it('should not open on hover from a pen and toggle on its taps', async () => {
      const { trigger, getMenu } = setup();

      fireEvent.pointerEnter(trigger, { pointerType: 'pen' });

      expect(screen.queryByRole('menu')).not.toBeInTheDocument();

      fireEvent.pointerDown(trigger, { pointerType: 'pen' });
      fireEvent.click(trigger);

      expect(await getMenu()).toBeInTheDocument();

      fireEvent.pointerLeave(trigger, { pointerType: 'pen' });
      await new Promise((resolve) => {
        setTimeout(resolve, CLOSE_DELAY_MS * 2);
      });

      expect(screen.getByRole('menu')).toBeInTheDocument();
    });

    it('should reveal the disabled reason inside the menu on a tap', async () => {
      const { user, trigger, getMenu } = setup({}, (onEdit, onDelete) => {
        return [
          { label: 'Edit', onClick: onEdit },
          { label: 'Delete', disabledReason: 'In use', onClick: onDelete },
        ];
      });

      await user.pointer({ keys: '[TouchA]', target: trigger });
      const menu = await getMenu();
      const remove = within(menu).getByRole('menuitem', { name: 'Delete' });

      await user.pointer({ keys: '[TouchA]', target: remove });

      expect(remove).toHaveAccessibleDescription('In use');
      expect(screen.getByRole('menu')).toBeInTheDocument();

      const results = await axe(document.body, {
        rules: { region: { enabled: false } },
      });

      expect(results).toHaveNoViolations();
    });

    describe('with openOnHover disabled', () => {
      it('should ignore hover and toggle on mouse clicks', async () => {
        const { user, trigger, getMenu } = setup({ openOnHover: false });

        await user.hover(trigger);

        expect(screen.queryByRole('menu')).not.toBeInTheDocument();

        await user.click(trigger);
        expect(await getMenu()).toBeInTheDocument();

        await user.unhover(trigger);
        await new Promise((resolve) => {
          setTimeout(resolve, CLOSE_DELAY_MS * 2);
        });
        expect(screen.getByRole('menu')).toBeInTheDocument();

        await user.click(trigger);
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
    });

    it("shouldn't have accessibility violations while open", async () => {
      const { user, trigger, getMenu } = setup({}, (onEdit, onDelete) => {
        return [
          { label: 'Edit', onClick: onEdit },
          { label: 'Delete', disabledReason: 'In use', onClick: onDelete },
        ];
      });

      await user.click(trigger);
      await getMenu();

      const results = await axe(document.body, {
        rules: { region: { enabled: false } },
      });

      expect(results).toHaveNoViolations();
    });
  });
});
