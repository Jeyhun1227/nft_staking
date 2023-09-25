import React from "react";

import { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/components/toast/toast-style.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { EmotionCache } from "@emotion/cache";
import { appWithTranslation } from "next-i18next";
import { initializeParse } from "@parse/react-ssr";

import createEmotionCache from "@/utils/create-emotion-cache";
import { CacheProvider } from "@emotion/react";
import { theme } from "@/config/theme";
import { MUIGlobalStyles } from "@/config/theme/global";
import { AuthProvider } from "@/contexts/auth";
import { PrivateRoute } from "@/components/private-route";
import { ROUTES } from "@/config/navigation";
import frLocale from "date-fns/locale/fr";
import NextNProgress from "nextjs-progressbar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
initializeParse(
  process.env.NEXT_PUBLIC_PARSE_SERVER_URL || "",
  process.env.NEXT_PUBLIC_PARSE_ID || "",
  process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY || ""
);

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={frLocale}>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <MUIGlobalStyles />
              <AuthProvider>
                <NextNProgress />
                <PrivateRoute protectedRoutes={[ROUTES.account, ROUTES.checkout, ROUTES.projectRegister]}>
                  <Component {...pageProps} />
                </PrivateRoute>
              </AuthProvider>
              <ReactQueryDevtools initialIsOpen={false} />
              <ToastContainer />
            </ThemeProvider>
          </LocalizationProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default appWithTranslation(MyApp);
