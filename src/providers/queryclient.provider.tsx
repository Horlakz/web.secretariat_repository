import {
  QueryClientProvider as BaseQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { toast } from "react-hot-toast";

import { HttpClient } from "@/services/http-client";
import { joinPaths } from "@/utilities/common";

const client = new HttpClient();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // This will use the query key as get request path
      queryFn: async function ({ queryKey }) {
        return await client.get(joinPaths(...(queryKey as string[])));
      },
    },
    mutations: {
      onError: (error: any) =>
        toast.error(error.response?.data.message ?? error.message),
    },
  },
});

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseQueryClientProvider>
  );
}
