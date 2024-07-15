import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { RouterProvider } from "react-router-dom";
import { router } from "@root/router";
import { PropsWithChildren } from "react";
import '@locales/i18n';
import '@styles/global.scss';

export const Providers = ({children}: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 3
      }
    }
  });

  return (
      <PrimeReactProvider value={{ripple: true}}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
          <Loading/>
          <Toast/>
          {children}
        </QueryClientProvider>
      </PrimeReactProvider>
  );
}
