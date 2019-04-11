import React from "react";
import { Page, TextStyle } from "@shopify/polaris";

export default class Login extends React.Component {
  render() {
    return (
      <Page
        primaryAction={{
          content: "Select products"
        }}
      >
        <TextStyle variation="positive">
          Sample app using React and Next.js
        </TextStyle>
      </Page>
    );
  }
}
