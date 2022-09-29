import { FC, PropsWithChildren } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

const queryClient = new QueryClient();
const testTheme = {};

const TestWrapper: FC<PropsWithChildren> = ({ children }) => (
  <RecoilRoot>
    <ThemeProvider theme={testTheme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  </RecoilRoot>
);

export default TestWrapper;
