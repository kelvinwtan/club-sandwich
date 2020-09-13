import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='shortcut icon' href='/static/favicon.jpg' />
          <link
            href='https://fonts.googleapis.com/css?family=Montserrat&display=swap'
            rel='stylesheet'
          />
          <script src='https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
