import type { AppProps } from 'next/app';
import React from 'react';
import {GlobalStyle} from '../styles/createGlobalStyle'
import { TransactionProvider } from '../contexts/transactionContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
    <GlobalStyle />
    <Component {...pageProps} />
    </TransactionProvider>
  )
}
export default MyApp
