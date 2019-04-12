import React from "react";
import TitleLogin from "../components/header/title-login";
import {
  Button,
  Card,
  Form,
  FormLayout,
  Link,
  Page,
  TextField,
  Stack
} from "@shopify/polaris";

export default class Index extends React.Component {
  render() {
    return (
      <Page fullWidth>
        <div
          style={{
            right: "50%",
            bottom: "50%",
            transform: "translate(50%,50%)",
            position: "absolute"
          }}
        >
          <Card>
            <Card.Section>
              <center>
                <img
                  alt="shopifyxpaxel"
                  src="https://i.postimg.cc/N9m4g61y/shopifyxpaxel.png"
                />
              </center>
              <br />
              <center>
                Masuk ke akun <Link>Paxel</Link> anda
              </center>
              <br />
              <Form onSubmit={this.handleSubmit}>
                <FormLayout>
                  <Stack>
                    <Stack.Item fill>
                      <TextField
                        id="username"
                        prefix={
                          <img
                            width="20px"
                            height="20px"
                            alt="Username"
                            style={{ marginTop: "10px" }}
                            src="https://i.postimg.cc/tZQ3msL9/icon-profile.png"
                          />
                        }
                        type="text"
                        placeholder="Username"
                      />
                    </Stack.Item>
                  </Stack>
                  <Stack>
                    <Stack.Item fill>
                      <TextField
                        id="password"
                        prefix={
                          <img
                            width="20px"
                            alt="Password"
                            style={{ marginTop: "10px" }}
                            src="https://i.postimg.cc/K1jDKSPh/icon-password.png"
                          />
                        }
                        type="text"
                        placeholder="Password"
                      />
                    </Stack.Item>
                  </Stack>
                  <Button primary fullWidth>
                    Login
                  </Button>
                  <center>
                    <Link url="http://paxel.co">Forgot Password</Link>
                  </center>
                </FormLayout>
              </Form>
            </Card.Section>
          </Card>
        </div>
      </Page>
    );
  }
}
