import { useEffect } from "react";
import "../styles/global.css";
import Head from "next/head";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import createCache from "@emotion/cache";
import { theme } from "../styles/theme";

export const cache = createCache({ key: "css", prepend: true });

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
