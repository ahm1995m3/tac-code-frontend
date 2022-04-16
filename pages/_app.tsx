import { AppProps } from "next/app";
import Theme from "../styles/Theme";
import GlobalStyles from "../styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />
      </Theme>
    </QueryClientProvider>
  );
}

export default MyApp;
