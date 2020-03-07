import React from 'react';
import './styles.scss';

export default function App<T>({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}
