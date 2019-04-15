import React from "react";
import {
  Thumbnail,
  RadioButton,
  Card,
  Page,
  PageActions,
  Stack,
  TextStyle
} from "@shopify/polaris";

export default class ConfirmShipment extends React.Component {
  state = {
    value: "disabled"
  };

  handleChange = (checked, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;
    const panelHeading = (
      <Card.Section subdued>
        <TextStyle variation="strong">Shimpent Confirmation</TextStyle>
      </Card.Section>
    );

    const panelOrderNumber = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <TextStyle>Order Number : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle>
              <b>#SHF-0000121</b>
            </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>Created Date : </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>
              <b> 06 April 2019 - 17:32</b>
            </TextStyle>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelSender = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <TextStyle>Sender : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle>
              <b>Arkana Shop</b> - 0891213243
            </TextStyle>
            <p>Arkanashop@gmail.com</p>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>
              <b>Arkana Gallery</b>
            </TextStyle>
            <p>Jl. Merdeka Barat no.123, Kebayoran Baru, Jakarta </p>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelPickupTime = (
      <Card.Section subdued>
        <Stack>
          <Stack.Item>
            <TextStyle>Pickup Time : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle> Tommorow (07 April)</TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle> Time Slot : </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>
              <b>10:00-12:00</b>
            </TextStyle>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelReceiver = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <TextStyle>Receiver : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle>
              <b>Bob Dylan</b> - 089121313242
            </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>
              <b>Kantor Paxel Bandung</b>
            </TextStyle>
            <p>Jl. Lemahnendeut no.102, Kota Bandung</p>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelEstimatedTime = (
      <Card.Section subdued>
        <Stack>
          <Stack.Item>
            <TextStyle>Estimated Time : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle> 07 April 2019</TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle> Time Slot : </TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>
              <b>16:00-20:00</b>
            </TextStyle>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelGoodDetails = (
      <Card.Section>
        <Stack alignment="center">
          <Stack.Item fill>
            <Thumbnail
              source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
              size="large"
              alt="Black choker necklace"
            />
          </Stack.Item>
          <Stack.Item fill>
            <Stack vertical={true}>
              <TextStyle>
                <b>Kemeja Flanel Pria Hijau Army Morales1290</b>
              </TextStyle>
              <TextStyle>Warna hijau size L</TextStyle>
              <Stack vertical={false} spacing="extraLoose">
                <Stack.Item>
                  <TextStyle variation="strong">Qty : 1</TextStyle>
                </Stack.Item>
                <TextStyle variation="strong"> IDR90.000</TextStyle>
              </Stack>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <Stack vertical={true}>
              <TextStyle>
                <b>Item Detail</b>
              </TextStyle>
              <TextStyle>
                <b>Fashion and Clothes</b>
              </TextStyle>
              <TextStyle>Not Fragile</TextStyle>
            </Stack>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelParcelSize = (
      <Card.Section>
        <Card.Section>
          <Stack>
            <Stack.Item fill />
            <Stack.Item fill />
            <Stack.Item fill>
              <Stack vertical={true}>
                <TextStyle>Parcel Size : </TextStyle>
                <TextStyle />
                <TextStyle />
                <TextStyle>Extra Packaging :</TextStyle>
              </Stack>
            </Stack.Item>
            <Stack.Item>
              <Stack vertical={true}>
                <TextStyle>Small</TextStyle>
                <TextStyle>
                  <b>(IDR15.000)</b>
                </TextStyle>
                <TextStyle>Bubble Wrap x 1</TextStyle>
                <TextStyle>
                  <b>(IDR5.000)</b>
                </TextStyle>
              </Stack>
            </Stack.Item>
          </Stack>
        </Card.Section>
      </Card.Section>
    );

    const panelShipmentCost = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <RadioButton
              label="COP"
              checked={value === "disabled"}
              id="disabled"
              name="accounts"
              onChange={this.handleChange}
            />
          </Stack.Item>
          <Stack.Item fill>
            <RadioButton
              label="Paxel Credit"
              id="optional"
              name="accounts"
              checked={value === "optional"}
              onChange={this.handleChange}
            />
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle>Shipment Cost :</TextStyle>
          </Stack.Item>
          <Stack.Item>
            <TextStyle>
              <b>(IDR20.000)</b>
            </TextStyle>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelPageAction = (
      <PageActions
        primaryAction={{
          content: "CONFIRM SHIPMENT"
        }}
        secondaryActions={[
          {
            content: "BACK"
          }
        ]}
      />
    );

    const panelContents = [
      panelHeading,
      panelOrderNumber,
      panelSender,
      panelPickupTime,
      panelReceiver,
      panelEstimatedTime,
      panelGoodDetails,
      panelParcelSize,
      panelShipmentCost
    ];

    return (
      <Page>
        <Card>
          <Card>{panelContents}</Card>
        </Card>
        {panelPageAction}
      </Page>
    );
  }
}
