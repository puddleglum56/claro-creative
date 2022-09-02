import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../utility/createEmotionCache";

import { responsiveFontSizes, ThemeOptions } from "@mui/material/styles";
import { NextPage } from "next";
import { ParallaxProvider } from "react-scroll-parallax";

const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
  },
};

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

const clientSideEmotionCache = createEmotionCache();

const unresponsiveTheme = createTheme(themeOptions);
const theme = responsiveFontSizes(unresponsiveTheme);

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
