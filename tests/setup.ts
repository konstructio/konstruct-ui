import { vitest } from 'vitest';
import '@testing-library/jest-dom/vitest';

// Mock the ResizeObserver
const ResizeObserverMock = vitest.fn(() => ({
  observe: vitest.fn(),
  unobserve: vitest.fn(),
  disconnect: vitest.fn(),
}));

// Stub the global ResizeObserver
vitest.stubGlobal('ResizeObserver', ResizeObserverMock);
