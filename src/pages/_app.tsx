import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import AppContext from "../context/AppContext";
import type { ReactElement, ReactNode } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AppContext>{getLayout(<Component {...pageProps} />)}</AppContext>;
}

export default MyApp;
