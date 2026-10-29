import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { TableContext } from '../../contexts';

import { ScrollContainer } from './ScrollContainer';

const column = (id: string) => ({ id });

const buildContext = (widths: Record<string, number> = {}) =>
  ({
    table: {
      getLeftLeafColumns: () => [column('name')],
      getRightLeafColumns: () => [column('status'), column('actions')],
    },
    pinnedWidths: widths,
  }) as unknown as React.ContextType<typeof TableContext>;

const mockSize = (
  element: HTMLElement,
  { scrollWidth, clientWidth }: { scrollWidth: number; clientWidth: number },
) => {
  Object.defineProperty(element, 'scrollWidth', {
    configurable: true,
    get: () => scrollWidth,
  });
  Object.defineProperty(element, 'clientWidth', {
    configurable: true,
    get: () => clientWidth,
  });
  Object.defineProperty(element, 'scrollLeft', {
    configurable: true,
    writable: true,
    value: 0,
  });
};

describe('ScrollContainer', () => {
  const setup = ({
    hasPinnedColumns = true,
    scrollWidth = 0,
    clientWidth = 0,
    widths = { name: 160, status: 120, actions: 60 },
  } = {}) => {
    const scrollWidthSpy = vi
      .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
      .mockReturnValue(scrollWidth);
    const clientWidthSpy = vi
      .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
      .mockReturnValue(clientWidth);

    const utils = render(
      <TableContext.Provider value={buildContext(widths)}>
        <ScrollContainer
          hasPinnedColumns={hasPinnedColumns}
          className="overflow-x-auto"
        >
          <table>
            <tbody>
              <tr>
                <td>cell</td>
              </tr>
            </tbody>
          </table>
        </ScrollContainer>
      </TableContext.Provider>,
    );

    scrollWidthSpy.mockRestore();
    clientWidthSpy.mockRestore();

    const container = utils.container.querySelector(
      '.kvt-scroll',
    ) as HTMLElement;
    const getProxy = () =>
      utils.container.querySelector('.kvt-scrollbar') as HTMLElement | null;

    return { ...utils, container, getProxy };
  };

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should not flag overflow nor draw the proxy while the content fits', () => {
    const { container, getProxy } = setup({
      scrollWidth: 800,
      clientWidth: 800,
    });

    expect(container).not.toHaveAttribute('data-kvt-overflow');
    expect(getProxy()).toBeNull();
  });

  it('should flag overflow and keep the native scrollbar without pinned columns', () => {
    const { container, getProxy } = setup({
      hasPinnedColumns: false,
      scrollWidth: 1338,
      clientWidth: 800,
    });

    expect(container).toHaveAttribute('data-kvt-overflow');
    expect(container.style.scrollbarWidth).toBeFalsy();
    expect(getProxy()).toBeNull();
  });

  it('should round the container only with pinned columns', () => {
    const { container } = setup();
    const { container: unpinned } = setup({ hasPinnedColumns: false });

    expect(container).toHaveClass('rounded-lg');
    expect(unpinned).not.toHaveClass('rounded-lg');
  });

  it('should draw the proxy scrollbar between the pinned columns when overflowing', () => {
    const { container, getProxy } = setup({
      scrollWidth: 1338,
      clientWidth: 800,
    });

    const proxy = getProxy() as HTMLElement;

    expect(container.style.scrollbarWidth).toBe('none');
    expect(proxy).toHaveAttribute('aria-hidden', 'true');
    expect(proxy).toHaveStyle({ left: '160px', right: '180px' });
    expect(proxy.firstElementChild).toHaveStyle({ width: '998px' });
  });

  it('should keep the proxy and the container scrolled together', () => {
    const { container, getProxy } = setup({
      scrollWidth: 1338,
      clientWidth: 800,
    });
    const proxy = getProxy() as HTMLElement;

    mockSize(container, { scrollWidth: 1338, clientWidth: 800 });
    mockSize(proxy, { scrollWidth: 998, clientWidth: 460 });

    proxy.scrollLeft = 120;
    fireEvent.scroll(proxy);

    expect(container.scrollLeft).toBe(120);

    container.scrollLeft = 300;
    fireEvent.scroll(container);

    expect(proxy.scrollLeft).toBe(300);
  });

  it('should fade only the side that still hides content', () => {
    const { container } = setup({ scrollWidth: 1338, clientWidth: 800 });
    const [leftFade, rightFade] = Array.from(
      container.parentElement!.querySelectorAll('.kvt-scroll-fade'),
    );

    expect(leftFade).toHaveClass('opacity-0');
    expect(rightFade).toHaveClass('opacity-100');

    mockSize(container, { scrollWidth: 1338, clientWidth: 800 });
    container.scrollLeft = 538;
    fireEvent.scroll(container);

    expect(leftFade).toHaveClass('opacity-100');
    expect(rightFade).toHaveClass('opacity-0');
  });

  it('should keep the proxy scrollbar thin and visible', () => {
    const { getProxy } = setup({ scrollWidth: 1338, clientWidth: 800 });

    expect(getProxy()).toHaveClass('[scrollbar-width:thin]');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = setup({ scrollWidth: 1338, clientWidth: 800 });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
