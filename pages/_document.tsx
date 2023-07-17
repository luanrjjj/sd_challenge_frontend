
import Document, { Html, Head, Main, NextScript, } from 'next/document'
import React from 'react';

 export default class MyDocument extends Document {

   render() {
    return (
      <Html lang="br">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,700;0,900;1,200;1,300;1,500&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
  }
