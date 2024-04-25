import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
} from "@tanstack/react-query";

import { QueryConfig } from "./config";

const queryClient = new QueryClient(QueryConfig);

export { queryClient, QueryClientProvider, useQuery, useMutation };
