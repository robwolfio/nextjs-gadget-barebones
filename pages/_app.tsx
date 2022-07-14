// _app.tsx
import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from "next/head";
import NextApiWrapper from "../components/apiWrapper";
import '../styles/globals.css';

interface MyAppProps extends AppProps {
}

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {typeof window == "undefined" ? null : (
        <NextApiWrapper>
          <Component {...pageProps} />
        </NextApiWrapper>
      )}
    </>
  );
};

export default MyApp;