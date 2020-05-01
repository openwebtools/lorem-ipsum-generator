import React from 'react';
import NextApp from 'next/app';
import Head from 'next/head';

/**
 * Lorem ipsum generator App.
 */
export default class LoremApp extends NextApp {
  /**
   * React Lifecycle callback.
   */
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  /**
   * Render the app.
   * @return {JSX.Element} App object.
   */
  render(): JSX.Element {
    const {Component, pageProps} = this.props;

    return (
      <React.Fragment>
          <Head>
            <title>lorem ipsum generator | Open Web Tools</title>
          </Head>
          <Component {...pageProps} />
        <style jsx global>{`
          html, body, #app, #__next {
            height: 100%
          }
        `}
        </style>
      </React.Fragment>
    );
  }
}