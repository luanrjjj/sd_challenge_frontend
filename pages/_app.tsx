import type { AppProps } from 'next/app';
import React from 'react';
import {GlobalStyle} from '../styles/createGlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
    <Component {...pageProps} />
    </>
  )
}
export default MyApp
