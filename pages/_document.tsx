import React from 'react';
import Document, {Main, NextScript, Head} from 'next/document';
import Header from '../src/layouts/header';

/**
 * Document.
 */
export default class AppDocument extends Document {
  /**
   * Render function.
   * @return {JSX.Element} Rendered Document.
   */
  render(): JSX.Element {
    return (
      <html lang='en'>
        <Head>
          <Header/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>);
  }
}