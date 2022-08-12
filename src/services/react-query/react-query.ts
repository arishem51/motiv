import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 30,
      staleTime: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});
