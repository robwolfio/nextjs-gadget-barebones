// _app.tsx
import * as React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from "@gadgetinc/react";
import { api } from '../utility/api';
import '../styles/globals.css';

interface MyAppProps extends AppProps {
}

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Provider value={api.connection.currentClient}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;