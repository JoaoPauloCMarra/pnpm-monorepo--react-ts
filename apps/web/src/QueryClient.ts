import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: process.env.NODE_ENV === 'production' ? 60000 * 5 : 0,
      staleTime: process.env.NODE_ENV === 'production' ? 60000 * 5 : 0,
    },
  },
});

export default queryClient;
