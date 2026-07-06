import { CellContext } from '@tanstack/react-table';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Actions } from './Actions';
import { Action, Props } from './Actions.types';

type Row = { id: number; name: string };

const row: Row = { id: 1, name: 'Pikachu' };

const buildProps = (actions: Action<Row>[] | undefined): Props<Row> => {
  return {
    ...({ row: { original: row } } as unknown as CellContext<Row, unknown>),
    actions: actions as Action<Row>[],
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

    clip.getBoundingClientRect = () =>
      ({ top: 0, bottom: 100 }) as DOMRect;
    root.getBoundingClientRect = () =>
      ({ top: 90, bottom: 98 }) as DOMRect;

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
});
