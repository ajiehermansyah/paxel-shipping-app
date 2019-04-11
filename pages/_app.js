import App from "next/app";
import Head from "next/head";
import React from "react";
import Cookies from "js-cookie";

import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/styles.css";

export default class PaxelShippingApp extends App {
  state = {
    shopOrigin: Cookies.get("shopOrigin")
  };
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Paxel Shipping App</title>
          <meta charSet="utf-8" />
        </Head>
        <AppProvider
          shopOrigin={this.state.shopOrigin}
          apiKey={process.env.SHOPIFY_API_KEY}
          forceRedirect
        >
          <Component {...pageProps} />
        </AppProvider>
      </React.Fragment>
    );
  }
}
