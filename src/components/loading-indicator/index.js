import React from 'react';
import PageLayout from "../page-layout";
import Head from "../head";

const LoadingIndicator = () => {
  return (
      <PageLayout>
        <Head/>
        <div style={{textAlign: 'center', marginTop: '20px',}}>
          Loading...
        </div>
      </PageLayout>
  )
}

export default LoadingIndicator;
