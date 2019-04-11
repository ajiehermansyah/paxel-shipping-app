import React from "react";
import { Stack, TextStyle, DisplayText } from "@shopify/polaris";

export default class TitleLogin extends React.Component {
  render() {
    return (
      <Stack alignment="center" spacing="tight">
        <Stack.Item>
          <img
            alt="logo"
            width="20px"
            height="20px"
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/aa/f2/21/aaf221b8-644f-6288-955d-4064d4e2c0c8/source/60x60bb.jpg"
          />
        </Stack.Item>
        <Stack.Item>
          <DisplayText size="small">
            <TextStyle variation="strong">Paxel Shipping App</TextStyle>
          </DisplayText>
        </Stack.Item>
      </Stack>
    );
  }
}
