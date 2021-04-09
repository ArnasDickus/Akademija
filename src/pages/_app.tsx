import 'styles/global-styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const fontsLinks = [
  { from: '/public/fonts/roboto/Roboto-Black.ttf' },
  { from: '/public/fonts/roboto/Roboto-BlackItalic.ttf' },
  { from: '/public/fonts/roboto/Roboto-Bold.ttf' },
  { from: '/public/fonts/roboto/Roboto-BoldItalic.ttf' },
  { from: '/public/fonts/roboto/Roboto-Italic.ttf' },
  { from: '/public/fonts/roboto/Roboto-Light.ttf' },
  { from: '/public/fonts/roboto/Roboto-LightItalic.ttf' },
  { from: '/public/fonts/roboto/Roboto-Medium.ttf' },
  { from: '/public/fonts/roboto/Roboto-MediumItalic.ttf' },
  { from: '/public/fonts/roboto/Roboto-Regular.ttf' },
  { from: '/public/fonts/roboto/Roboto-Thin.ttf' },
  { from: '/public/fonts/roboto/Roboto-ThinItalic.ttf' },
];

export const _app = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Head>
        {fontsLinks?.map((font) => {
          return <link key={font?.from} as="font" crossOrigin="" href={font?.from} rel="preload" />;
        })}
      </Head>
      <React.StrictMode>
        <Component {...pageProps} />
      </React.StrictMode>
    </Provider>
  );
};

export default _app;
