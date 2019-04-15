import React from "react";
import {
  Card,
  Layout,
  Link,
  Page,
  Stack,
  TextStyle,
  Thumbnail,
  Tabs
} from "@shopify/polaris";

export default class ShipmentDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0
    };
  }

  handleTabChange = selectedTabIndex => {
    this.setState({ selected: selectedTabIndex });
  };

  render() {
    const orderPanel = (
      <Card.Section>
        <Stack>
          <Stack.Item>Order Number:</Stack.Item>
          <Stack.Item fill>
            <TextStyle variation="strong">#ODR001</TextStyle>
          </Stack.Item>
        </Stack>
        <Stack>
          <Stack.Item fill />
          <Stack.Item>Created Date:</Stack.Item>
          <Stack.Item>09/04/2019 - 10:00</Stack.Item>
        </Stack>
      </Card.Section>
    );

    const senderPanel = (
      <Card.Section>
        <Stack>
          <Stack.Item>Sender:</Stack.Item>
          <Stack.Item fill>
            <TextStyle variation="strong">Arkana Shop</TextStyle> - 08123456789
            <br />
            arkanashop@gmail.com
          </Stack.Item>
          <Stack.Item>
            <TextStyle variation="strong">Arkana Gallery</TextStyle>
            <br />
            Jl Merdeka Barat no 143 Kebayoran Baru
            <br />
            Jakarta Selatan 12120
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const pickupPanel = (
      <Card.Section subdued>
        <Stack>
          <Stack.Item>
            <Link>Pickup Time:</Link>
          </Stack.Item>
          <Stack.Item fill>
            <Link>Tommorow (10 April 2019)</Link>
          </Stack.Item>
          <Stack.Item>
            <Link>Time Slot:</Link>
          </Stack.Item>
          <Stack.Item>
            <Link>10:00-12:00</Link>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const receiverPanel = (
      <Card.Section>
        <Stack>
          <Stack.Item>Receiver:</Stack.Item>
          <Stack.Item fill>
            <TextStyle variation="strong">Boby Dylan</TextStyle> - 08123456789
          </Stack.Item>
          <Stack.Item>
            <TextStyle variation="strong">Kantor Paxel Bandung</TextStyle>
            <br />
            Jl Lemahnendeut 111b Sukasari
            <br />
            Kota Bandung 40164
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const estimatedPanel = (
      <Card.Section subdued>
        <Stack>
          <Stack.Item>
            <Link>Estimated Time:</Link>
          </Stack.Item>
          <Stack.Item fill>
            <Link>10 April 2019</Link>
          </Stack.Item>
          <Stack.Item>
            <Link>Time Slot:</Link>
          </Stack.Item>
          <Stack.Item>
            <Link>16:00-18:00</Link>
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const orderDetailPanel = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <Thumbnail
              source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
              alt="Black choker necklace"
            />
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle variation="strong">
              Kemeja Flanel Pria Hijau Army Morales 1290
            </TextStyle>
            <br />
            warna hijau Size L
            <br />
            <Stack spacing="loose">
              <Stack.Item>Qty : 1</Stack.Item>
              <Stack.Item>
                <Link>IDR90.000</Link>
              </Stack.Item>
            </Stack>
          </Stack.Item>
          <Stack.Item>
            <TextStyle variation="strong">Item Detail</TextStyle>
            <br />
            <TextStyle>Fashion and Clothes</TextStyle>
            <br />
            Not Fragile
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const costDetailPanel = (
      <Card.Section>
        <Layout>
          <Layout.Section>
            <Layout>
              <Layout.Section>
                <Stack>
                  <Stack.Item fill />
                  <Stack.Item>Parcel Size</Stack.Item>
                  <Stack.Item>:</Stack.Item>
                </Stack>
              </Layout.Section>
              <Layout.Section secondary>
                <Stack>
                  <Stack.Item fill />
                  <Stack.Item>
                    <Link>Small</Link>
                  </Stack.Item>
                </Stack>
                <Stack>
                  <Stack.Item fill />
                  <Stack.Item>
                    <Link>(IDR15.000)</Link>
                  </Stack.Item>
                </Stack>
              </Layout.Section>
            </Layout>
          </Layout.Section>
          <Layout.Section>
            <Layout>
              <Layout.Section>
                <Stack>
                  <Stack.Item fill />
                  <Stack.Item>Extra Packaging</Stack.Item>
                  <Stack.Item>:</Stack.Item>
                </Stack>
              </Layout.Section>
              <Layout.Section secondary>
                <Stack>
                  <Stack.Item fill />
                  <Stack.Item>
                    <Link>Bubble wrap x 1</Link>
                  </Stack.Item>
                </Stack>
                <Stack>
                  <Stack.Item fill />
                  <Stack.Item>
                    <Link>(IDR5000)</Link>
                  </Stack.Item>
                </Stack>
              </Layout.Section>
            </Layout>
          </Layout.Section>
        </Layout>
      </Card.Section>
    );

    const costTotalPanel = (
      <Card.Section>
        <Layout>
          <Layout.Section>
            <Stack>
              <Stack.Item fill />
              <Stack.Item>Shipment Cost</Stack.Item>
              <Stack.Item>:</Stack.Item>
            </Stack>
          </Layout.Section>
          <Layout.Section secondary>
            <Stack>
              <Stack.Item fill />
              <Stack.Item>
                <Link>(IDR20.000)</Link>
              </Stack.Item>
            </Stack>
          </Layout.Section>
        </Layout>
      </Card.Section>
    );

    const shipmentPanel = (
      <Card.Section>
        <Stack>
          <Stack.Item>Shipment Code:</Stack.Item>
          <Stack.Item fill>
            <TextStyle variation="strong">BSF20190409</TextStyle>
          </Stack.Item>
          <Stack.Item fill />
          <Stack.Item>Created Date:</Stack.Item>
          <Stack.Item>09/04/2019 - 10:00</Stack.Item>
        </Stack>
      </Card.Section>
    );

    const trackingHistory = [
      {
        id: 1,
        name: "Shipment Created",
        description: "",
        date: "09 April 2019",
        time: "10:00"
      },
      {
        id: 2,
        name: "Package Picked Up",
        description: "Your package picked up by our hero",
        date: "09 April 2019",
        time: "10:10"
      },
      {
        id: 3,
        name: "Package at Jatinegara PH",
        description: "Package arrived at origin PH",
        date: "09 April 2019",
        time: "10:43"
      },
      {
        id: 4,
        name: "Package arrived at Bandung PH",
        description: "Package arrived at destination PH",
        date: "09 April 2019",
        time: "15:00"
      },
      {
        id: 5,
        name: "On Delivery Hero",
        description: "Hero went to your location",
        date: "09 April 2019",
        time: "15:45"
      }
    ];

    trackingHistory.sort((prev, next) => next.id - prev.id);

    let historyPanel = trackingHistory.map((track, key) => (
      <Stack alignment="leading" key={key}>
        <Stack.Item>
          <img
            alt="point"
            width="15px"
            height="15px"
            style={{ verticalAlign: "middle" }}
            src="https://i.postimg.cc/vgrrRQsf/purple-point.png"
          />
          <br />
          {track.id !== 1 ? (
            <img
              alt="line"
              width="1px"
              height="60px"
              style={{
                verticalAlign: "middle",
                marginLeft: "7px"
              }}
              src="https://i.postimg.cc/TKsqg70L/rectangle-3.png"
            />
          ) : (
            ""
          )}
        </Stack.Item>
        <Stack.Item fill>
          <Stack alignment="leading">
            <Stack.Item fill>
              <h3>
                <TextStyle variation="positive">{track.name}</TextStyle>
              </h3>
              <div>{track.description}</div>
            </Stack.Item>
            <Stack.Item>
              <div>{track.date}</div>
              <Stack alignment="leading">
                <Stack.Item fill />
                <Stack.Item>
                  <div>{track.time}</div>
                </Stack.Item>
              </Stack>
            </Stack.Item>
          </Stack>
        </Stack.Item>
        {/* <Stack.Item fill>
          <h3>
            <TextStyle variation="positive">{track.name}</TextStyle>
          </h3>
          <div>{track.description}</div>
        </Stack.Item>
        <Stack.Item>
          <div>{track.date}</div>
          <div>{track.time}</div>
        </Stack.Item> */}
      </Stack>
    ));

    const trackingPanel = (
      <Card.Section>
        <Layout>
          <Layout.Section secondary>
            Shipping Status
            <br />
            <TextStyle variation="positive">Delivery on Schedule</TextStyle>
          </Layout.Section>
          <Layout.Section>
            Tracking History
            <br />
            {historyPanel}
          </Layout.Section>
        </Layout>
      </Card.Section>
    );

    const shipmentDetailPanel = [
      orderPanel,
      senderPanel,
      pickupPanel,
      receiverPanel,
      estimatedPanel,
      orderDetailPanel,
      costDetailPanel,
      costTotalPanel
    ];

    const trackingShipmentPanel = [shipmentPanel, trackingPanel];

    const tabs = [
      {
        id: "shipment-detail",
        content: "Shipment Detail",
        panelID: shipmentDetailPanel
      },
      {
        id: "tracking-shipment",
        content: "Tracking Shipment",
        panelID: trackingShipmentPanel
      }
    ];

    const { selected } = this.state;

    return (
      <Page fullWidth>
        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={this.handleTabChange}>
            {tabs[selected].panelID}
          </Tabs>
        </Card>
      </Page>
    );
  }
}
