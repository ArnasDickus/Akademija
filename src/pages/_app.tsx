import { AppProps } from 'next/app';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const _app = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default _app;
