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

beforeAll(() => {
  Element.prototype.scrollIntoView = vi.fn();
});
