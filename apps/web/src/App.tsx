import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from 'ui-library/ErrorBoundary';
import GlobalStyle from 'ui-library/GlobalStyle';

import queryClient from './QueryClient';

import About from '~/pages/About';
import Error from '~/pages/Error';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';

const App = () => (
  <RecoilRoot>
    <GlobalStyle />
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route element={<Home />} errorElement={<Error />} path="/" />
            <Route element={<About />} errorElement={<Error />} path="/about" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  </RecoilRoot>
);

export default App;
