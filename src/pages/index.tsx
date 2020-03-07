import React from 'react';
import SandwichGenerator from '@/components/SandwichGenerator';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
          rel='stylesheet'
        />
      </Head>
      <SandwichGenerator />
    </>
  );
};

export default Home;
