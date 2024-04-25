import { QueryClientConfig } from "@tanstack/react-query";

export const QueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: Infinity,
      // staleTime: 0.5 * 60 * 1000, // 30 sec
      gcTime: 5 * 60 * 1000, // 5 mins
      refetchOnMount: true,
      refetchOnReconnect: true,
    },
  },
};
