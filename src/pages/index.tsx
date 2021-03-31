import '../i18n';

import HomePage from 'components/lang/home/home.page';
import Layout from 'components/layout/layout';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
// import styles from '../styles/Home.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>Akademija</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </Provider>
  );
};

export default Home;
