import { CellContext } from '@tanstack/react-table';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { TruncateText } from './TruncateText';

type Row = { id: string; name: string };

const mockOverflow = (scrollWidth: number, clientWidth: number) => {
  const scrollWidthSpy = vi
    .spyOn(HTMLElement.prototype, 'scrollWidth', 'get')
    .mockReturnValue(scrollWidth);
  const clientWidthSpy = vi
    .spyOn(HTMLElement.prototype, 'clientWidth', 'get')
    .mockReturnValue(clientWidth);

  return () => {
    scrollWidthSpy.mockRestore();
    clientWidthSpy.mockRestore();
  };
};

describe('TruncateText', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the value without a tooltip when it fits', async () => {
    mockOverflow(100, 200);
    const user = userEvent.setup();

    render(<TruncateText value="Pikachu" />);

    const text = screen.getByText('Pikachu');

    expect(text.tagName).toBe('P');
    expect(text).not.toHaveClass('cursor-pointer');

    await user.hover(text);

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should show the full text in a tooltip when it overflows', async () => {
    mockOverflow(300, 100);
    const user = userEvent.setup();

    render(<TruncateText value="A very long Pokémon name" />);

    const text = screen.getByText('A very long Pokémon name');

    expect(text).toHaveClass('cursor-pointer');

    await user.hover(text);

    expect(await screen.findByRole('tooltip')).toHaveTextContent(
      'A very long Pokémon name',
    );
  });

  it('should fall back to the cell value when no value is given', () => {
    mockOverflow(100, 200);

    render(
      <TruncateText<Row>
        {...({ getValue: () => 'PIKACHU' } as unknown as CellContext<
          Row,
          string
        >)}
      />,
    );

    expect(screen.getByText('pikachu')).toBeInTheDocument();
  });

  it('should render with the requested typography variant and element', () => {
    mockOverflow(100, 200);

    render(<TruncateText value="Pikachu" variant="body3" component="span" />);

    const text = screen.getByText('Pikachu');

    expect(text.tagName).toBe('SPAN');
    expect(text).toHaveClass('text-xs');
  });

  it('should render a copy button next to the text when copyable', async () => {
    mockOverflow(100, 200);
    const user = userEvent.setup();

    render(<TruncateText value="a1b2-c3d4" copyable />);

    await user.click(screen.getByRole('button', { name: 'Copy a1b2-c3d4' }));

    expect(await navigator.clipboard.readText()).toBe('a1b2-c3d4');
  });

  it('should forward copy button props', () => {
    mockOverflow(100, 200);

    render(
      <TruncateText
        value="a1b2-c3d4"
        copyable
        copyButtonProps={{ label: 'Volume ID' }}
      />,
    );

    expect(
      screen.getByRole('button', { name: 'Copy Volume ID' }),
    ).toBeInTheDocument();
  });

  it("shouldn't have accessibility violations", async () => {
    mockOverflow(300, 100);

    const { container } = render(
      <TruncateText value="A very long Pokémon name" copyable />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
