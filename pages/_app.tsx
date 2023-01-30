import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'bastianparedes/styles/global.css';
import 'bastianparedes/styles/normalize.css';
import { SessionProvider } from 'next-auth/react';

const _App = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta charSet="utf-8" />
        <link href="/favicon.ico" rel="icon" />
        <title>Bastián Paredes</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default _App;
