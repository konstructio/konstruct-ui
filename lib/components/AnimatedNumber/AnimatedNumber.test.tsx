import { render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { ComponentProps, createRef } from 'react';

import { AnimatedNumber } from './AnimatedNumber';

type Props = ComponentProps<typeof AnimatedNumber>;

const FAST = { durationSeconds: 0.2 };

const setup = (props: Props) => {
  const utils = render(<AnimatedNumber {...props} />);

  const update = (nextProps: Partial<Props>) => {
    utils.rerender(<AnimatedNumber {...props} {...nextProps} />);
  };

  const visibleText = () => {
    return (
      screen.getByText((_, element) => {
        return element?.getAttribute('aria-hidden') === 'true';
      }).textContent ?? ''
    );
  };

  return { ...utils, update, visibleText };
};

describe('AnimatedNumber', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should show the formatted value on first render without counting', () => {
    const onCountStart = vi.fn();
    const { visibleText } = setup({
      value: 10,
      locale: 'en',
      currency: 'USD',
      onCountStart,
    });

    expect(visibleText()).toBe('$10.00');
    expect(onCountStart).not.toHaveBeenCalled();
  });

  it('should count through intermediate values up to a new value', async () => {
    const { visibleText, update } = setup({
      value: 10,
      locale: 'en',
      currency: 'USD',
      ...FAST,
    });
    const seen = new Set<string>();

    update({ value: 250 });

    await waitFor(
      () => {
        seen.add(visibleText());
        expect(visibleText()).toBe('$250.00');
      },
      { timeout: 3_000, interval: 16 },
    );

    expect(seen.size).toBeGreaterThan(2);
  });

  it('should count down to a lower value', async () => {
    const { visibleText, update } = setup({
      value: 1000,
      locale: 'en',
      ...FAST,
    });

    update({ value: 5 });

    await waitFor(() => {
      expect(visibleText()).toBe('5');
    });
  });

  it('should count from the given start value on mount', async () => {
    const { visibleText } = setup({
      value: 40,
      from: 0,
      locale: 'en',
      ...FAST,
    });

    expect(visibleText()).toBe('0');

    await waitFor(() => {
      expect(visibleText()).toBe('40');
    });
  });

  it('should settle on the latest value when it changes mid-count', async () => {
    const { visibleText, update } = setup({
      value: 0,
      locale: 'en',
      ...FAST,
    });

    update({ value: 500 });
    update({ value: 20 });

    await waitFor(() => {
      expect(visibleText()).toBe('20');
    });
  });

  it.each([
    ['en', 'USD', '$1,234.50'],
    ['en', 'EUR', '€1,234.50'],
    ['en', 'GBP', '£1,234.50'],
    ['en', 'JPY', '¥1,235'],
  ])('should format %s amounts in %s', (locale, currency, expected) => {
    const { visibleText } = setup({ value: 1234.5, locale, currency });

    expect(visibleText()).toBe(expected);
  });

  it('should place the symbol where the locale puts it', () => {
    const { visibleText } = setup({
      value: 9.5,
      locale: 'de-DE',
      currency: 'EUR',
    });

    expect(visibleText().replace(/\s/g, ' ')).toBe('9,50 €');
  });

  it('should merge formatOptions over the currency options', () => {
    const { visibleText } = setup({
      value: 1234.5,
      locale: 'en',
      currency: 'USD',
      formatOptions: { maximumFractionDigits: 0, minimumFractionDigits: 0 },
    });

    expect(visibleText()).toBe('$1,235');
  });

  it('should format a plain number without a currency', () => {
    const { visibleText } = setup({ value: 1234567, locale: 'en' });

    expect(visibleText()).toBe('1,234,567');
  });

  it('should fall back to the currency code when the code is not a valid currency', () => {
    const { visibleText } = setup({
      value: 5,
      locale: 'en',
      currency: 'CREDITS',
    });

    expect(visibleText()).toBe('CREDITS 5.00');
  });

  it('should prefer a custom format function over the built-in formatter', () => {
    const { visibleText } = setup({
      value: 3,
      currency: 'USD',
      format: (value) => {
        return `${value} items`;
      },
    });

    expect(visibleText()).toBe('3 items');
  });

  it('should jump to the new value when disabled', () => {
    const onCountStart = vi.fn();
    const { visibleText, update } = setup({
      value: 1,
      locale: 'en',
      disabled: true,
      onCountStart,
    });

    update({ value: 99 });

    expect(visibleText()).toBe('99');
    expect(onCountStart).not.toHaveBeenCalled();
  });

  it('should ignore from when disabled', () => {
    const { visibleText } = setup({
      value: 40,
      from: 0,
      locale: 'en',
      disabled: true,
    });

    expect(visibleText()).toBe('40');
  });

  it('should still count when only the character animation is off', async () => {
    const { visibleText, update } = setup({
      value: 1,
      locale: 'en',
      animateCharacters: false,
      ...FAST,
    });

    update({ value: 1500 });

    await waitFor(() => {
      expect(visibleText()).toBe('1,500');
    });
  });

  it('should expose the target value to assistive technology while counting', () => {
    const { update } = setup({ value: 10, locale: 'en', currency: 'USD' });

    update({ value: 125 });

    expect(screen.getByText('$125.00')).toBeInTheDocument();
  });

  it('should announce the label instead of the formatted value when given', () => {
    setup({ value: 10, locale: 'en', label: 'Ten dollars' });

    expect(screen.getByText('Ten dollars')).toBeInTheDocument();
  });

  it('should report when a count starts and ends', async () => {
    const onCountStart = vi.fn();
    const onCountEnd = vi.fn();
    const { update } = setup({
      value: 1,
      locale: 'en',
      onCountStart,
      onCountEnd,
      ...FAST,
    });

    update({ value: 5 });

    await waitFor(() => {
      expect(onCountEnd).toHaveBeenCalledWith(5);
    });
    expect(onCountStart).toHaveBeenCalledWith(5);
    expect(onCountStart).toHaveBeenCalledTimes(1);
    expect(onCountEnd).toHaveBeenCalledTimes(1);
  });

  it('should use the latest callbacks without restarting the count', async () => {
    const firstOnCountEnd = vi.fn();
    const latestOnCountEnd = vi.fn();
    const { update } = setup({
      value: 1,
      locale: 'en',
      onCountEnd: firstOnCountEnd,
      ...FAST,
    });

    update({ value: 5, onCountEnd: firstOnCountEnd });
    update({ value: 5, onCountEnd: latestOnCountEnd });

    await waitFor(() => {
      expect(latestOnCountEnd).toHaveBeenCalledWith(5);
    });
    expect(firstOnCountEnd).not.toHaveBeenCalled();
  });

  it('should forward the ref and extra props to the root element', () => {
    const ref = createRef<HTMLSpanElement>();

    render(<AnimatedNumber ref={ref} value={1} locale="en" title="Total" />);

    expect(ref.current).toBe(screen.getByTitle('Total'));
    expect(ref.current?.tagName).toBe('SPAN');
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = setup({ value: 10, locale: 'en', currency: 'USD' });

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
