import Head from 'next/head';
import React from 'react';
import { NextPage } from 'next';
import HomePage from 'components/lang/home/home.page';
// import styles from '../styles/Home.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akademija</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
