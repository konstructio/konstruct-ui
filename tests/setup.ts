import { toHaveNoViolations } from 'jest-axe';
import { vi, vitest } from 'vitest';
import '@testing-library/jest-dom/vitest';

expect.extend(toHaveNoViolations);

// Mock the ResizeObserver
class ResizeObserverMock {
  observe = vitest.fn();
  unobserve = vitest.fn();
  disconnect = vitest.fn();
}

// Stub the global ResizeObserver
vitest.stubGlobal('ResizeObserver', ResizeObserverMock);

// Provide a default matchMedia implementation for jsdom.
// Individual tests can override `window.matchMedia` to simulate specific viewports.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(() => false),
  });
}

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});
