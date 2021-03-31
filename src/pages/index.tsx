// import '../i18n';

import HomePage from 'components/lang/home/home.page';
import Layout from 'components/layout';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home: NextPage = () => {
  return (
    <div>
      <Provider store={store}>
        <Head>
          <title>Akademija</title>
          <link href="/favicon.ico" rel="icon" />
        </Head>
        <Layout>
          <HomePage />
        </Layout>
      </Provider>
    </div>
  );
};

export default Home;
