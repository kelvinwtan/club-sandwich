import React from 'react';
import Head from 'next/head';
import SandwichGenerator from '@/components/SandwichGenerator';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sandwich Club</title>
      </Head>
      <SandwichGenerator />
    </>
  );
};

export default Home;
