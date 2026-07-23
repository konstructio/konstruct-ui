import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { ReactElement } from 'react';

import { Theme } from '@/domain/theme';

type Options = {
  theme?: Theme;
  queryClient?: QueryClient;
};

export const renderWithProviders = (
  ui: ReactElement,
  { theme, queryClient }: Options = {},
) => {
  const client =
    queryClient ??
    new QueryClient({
      defaultOptions: { queries: { retry: false } },
    });

  const utils = render(
    <QueryClientProvider client={client}>
      {theme ? <div data-theme={theme}>{ui}</div> : ui}
    </QueryClientProvider>,
  );

  return { ...utils, queryClient: client };
};
