import { act, render } from '@testing-library/react';
import { FC } from 'react';

import { useDisplayedColumnCount } from './useDisplayedColumnCount';

describe('useDisplayedColumnCount', () => {
  let notify: () => void = () => undefined;

  const Harness: FC = () => {
    const [ref, count] = useDisplayedColumnCount();

    return (
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th style={{ display: 'none' }}>Reason</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody ref={ref}>
          <tr>
            <td>{count ?? 'unknown'}</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const setup = () => {
    const { getByRole } = render(<Harness />);

    return { getCell: () => getByRole('cell') };
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubGlobal(
      'ResizeObserver',
      class {
        constructor(callback: () => void) {
          notify = callback;
        }

        observe() {}

        disconnect() {}
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should stay unknown until the table is measured', () => {
    const { getCell } = setup();

    expect(getCell()).toHaveTextContent('unknown');
  });

  it('should count only the header cells that are displayed', () => {
    const { getCell } = setup();

    act(() => notify());

    expect(getCell()).toHaveTextContent('2');
  });
});
