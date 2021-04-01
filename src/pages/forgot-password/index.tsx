import ForgotPasswordPage from 'components/lang/forgot-password/forgot-password.page';
import Layout from 'components/layout';
import { NextPage } from 'next';
import React from 'react';

/*
interface IProps {
  pageSeo: any
}
*/

const ForgotPasswordHome: NextPage = () => {
  // const { pageSeo } = props
  return (
    <>
      {/* <Head>
        <title>{pageSeo?.title}</title>
        <meta name="description" content={pageSeo?.description} />
        <meta name="og:title" content={pageSeo?.title} />
        <meta name="og:url" content={pageSeo?.url} />
        <meta name="og:type" content={pageSeo?.type} />
        <meta name="og:site_name" content={pageSeo?.site_name} />
        <meta name="og:description" content={pageSeo?.description} />
        <meta name="og:image" content={pageSeo?.image} />
      </Head>  */}
      <Layout>
        <ForgotPasswordPage />
      </Layout>
    </>
  );
};

export default ForgotPasswordHome;
