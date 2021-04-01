// import '../i18n';

import HomePage from 'components/lang/home/home.page';
import Layout from 'components/layout';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akademija</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default Home;
