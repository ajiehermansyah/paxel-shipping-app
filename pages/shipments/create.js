import React from "react";
import {
  Button,
  Card,
  Page,
  Stack,
  Select,
  Layout,
  TextStyle,
  ButtonGroup,
  Thumbnail,
  Checkbox,
  Icon,
  Popover,
  ActionList,
  Link
} from "@shopify/polaris";

import { Redirect } from "@shopify/app-bridge/actions";
import * as PropTypes from "prop-types";

export default class CreateShipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "#ARK100045",
      checked: false,
      disabled: "disabled",
      active: false,
      value: "",
      status: false,
      isDeleted: false,
      count: 1,
      isToday: true,
      packageSize: [
        { name: "S", isLocked: true },
        { name: "M", isLocked: false },
        { name: "L", isLocked: false },
        { name: "Custom", isLocked: false }
      ],
      pickupTime: [
        { name: "Today", isLocked: true },
        { name: "Tommorow", isLocked: false }
      ]
    };
  }

  static contextTypes = {
    polaris: PropTypes.object
  };

  handleChange = newValue => {
    this.setState({ selected: newValue });
  };

  handleChangeCheckBox = value => {
    this.setState({ checked: value });
  };

  handleDeleted = () => {
    this.setState({ status: false, count: 1 });
  };

  togglePopover = () => {
    this.setState(({ active }) => {
      return { active: !active };
    });
  };

  counterPlus = () => {
    var temp = this.state.count;
    if (temp < 10) {
      temp += 1;
    }
    this.setState({ count: temp });
  };

  counterMinus = () => {
    var temp = this.state.count;
    if (temp > 0) {
      temp -= 1;
    }
    this.setState({ count: temp });
  };

  handlePackageSize = key => {
    let packageSizeUpdate = this.state.packageSize;
    this.setState({
      packageSize: packageSizeUpdate.map((size, id) => {
        if (id === key) {
          return Object.assign({}, size, {
            isLocked: true
          });
        } else {
          return Object.assign({}, size, {
            isLocked: false
          });
        }
      })
    });
  };

  handlePickupTime = key => {
    let pickupTimeUpdate = this.state.pickupTime;
    this.setState({
      pickupTime: pickupTimeUpdate.map((time, id) => {
        if (id === key) {
          return Object.assign({}, time, {
            isLocked: true
          });
        } else {
          return Object.assign({}, time, {
            isLocked: false
          });
        }
      })
    });
  };

  redirectToConfirmShipment = () => {
    console.log("test");
    const redirect = Redirect.create(this.context.polaris.appBridge);
    redirect.dispatch(Redirect.Action.APP, "/shipments/confirm");
    console.log("redirect ..");
  };

  packaging = (status, text) => {
    return (
      <Stack alignment="center">
        <Stack.Item>
          <Link plain onClick={this.handleDeleted}>
            <Icon source="delete" color="purple" />
          </Link>
        </Stack.Item>
        <Stack.Item fill>
          <TextStyle variation="strong">{text}</TextStyle>
        </Stack.Item>
        <Stack.Item fill />
        <Stack.Item>
          <Link plain onClick={this.counterPlus}>
            <Icon source="chevronUp" color="purple" />
          </Link>
        </Stack.Item>
        <Stack.Item>
          <TextStyle variation="strong">{this.state.count}</TextStyle>
        </Stack.Item>
        <Stack.Item>
          <Link plain onClick={this.counterMinus}>
            <Icon source="chevronDown" color="purple" />
          </Link>
        </Stack.Item>
      </Stack>
    );
  };

  render() {
    const listOrderNumber = [
      { label: "#ARK100045", value: "ARK100045" },
      { label: "#ARK100001", value: "ARK100001" },
      { label: "#ARK100002", value: "ARK100002" }
    ];

    const itemCategory = [
      { label: "Fashion and Clothes", value: "fahshion and clothes" },
      { label: "Book and Document", value: "book and document" },
      { label: "Sport and Entertainment", value: "sport and entertainment" },
      { label: "Toys and Hobby", value: "toys and hobby" },
      { label: "Electronic and Gadget", value: "electronic and gadget" }
    ];

    const listPackaging = [
      {
        content: "Bubble Wrap",
        onAction: () => {
          this.setState({ value: "Bubble Wrap", status: true }, () => {
            this.togglePopover();
          });
        }
      },
      {
        content: "Box Size S",
        onAction: () => {
          this.setState({ value: "Box Size S", status: true }, () => {
            this.togglePopover();
          });
        }
      },
      {
        content: "Box Size M",
        onAction: () => {
          this.setState({ value: "Box Size M", status: true }, () => {
            this.togglePopover();
          });
        }
      },
      {
        content: "Box Size L",
        onAction: () => {
          this.setState({ value: "Box Size L", status: true }, () => {
            this.togglePopover();
          });
        }
      }
    ];

    const time = [
      { label: "08:00 - 10:00", value: "08:00-10:00" },
      { label: "10:00 - 12:00", value: "10:00-12:00" },
      { label: "12:00 - 14:00", value: "12:00-14:00" },
      { label: "14:00 - 16:00", value: "14:00-16:00" }
    ];

    const { checked } = this.state;
    var status = this.state.status;
    var value = this.state.value;

    const activator = (
      <Link plain onClick={this.togglePopover}>
        <Stack alignment="center" spacing="tight">
          <Stack.Item>
            <Icon source="circlePlusOutline" color="purple" />
          </Stack.Item>
          <Stack.Item>Add Extra Packaging</Stack.Item>
        </Stack>
      </Link>
    );

    const panelHeader = (
      <Card.Section>
        <TextStyle variation="strong">Generate shipment from order</TextStyle>
      </Card.Section>
    );

    const panelChooseOrder = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <TextStyle>Choose the order : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle />
          </Stack.Item>
          <Stack.Item fill>
            <Select
              options={listOrderNumber}
              onChange={this.handleChange}
              value={this.state.selected}
            />
          </Stack.Item>
        </Stack>
      </Card.Section>
    );

    const panelSenderAndReceiver = (
      <Card.Section>
        <Stack>
          <Stack.Item>
            <TextStyle>Sender : </TextStyle>
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle />
          </Stack.Item>
          <Stack.Item fill>
            <TextStyle>Receiver : </TextStyle>
          </Stack.Item>
        </Stack>
        <br />
        <Layout>
          <Layout.Section oneThird>
            <Card sectioned>
              <Stack.Item>
                <Stack>
                  <Stack.Item fill>
                    <TextStyle>
                      <b>ArkanaShop</b> - 081222224444555
                    </TextStyle>
                  </Stack.Item>
                  <Stack.Item>
                    <Icon source="horizontalDots" />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <TextStyle>Email</TextStyle>
                <br />
                <br />
              </Stack.Item>
              <Stack.Item>
                <TextStyle>
                  <b>Arkana Gallery</b>
                </TextStyle>
                <br />
                <br />
              </Stack.Item>
              <Stack.Item>
                <TextStyle>
                  Jl Merdeka barat no.143 Kebayoran Baru, Jakarta 40123
                </TextStyle>
              </Stack.Item>
            </Card>
          </Layout.Section>
          <Layout.Section oneThird>
            <Card sectioned>
              <Stack.Item>
                <Stack>
                  <Stack.Item fill>
                    <TextStyle>
                      <b>Bob Dylan</b> - 081999992222111
                    </TextStyle>
                  </Stack.Item>
                  <Stack.Item>
                    <Icon source="horizontalDots" />
                  </Stack.Item>
                </Stack>
              </Stack.Item>
              <Stack.Item>
                <TextStyle>Email</TextStyle>
                <br />
                <br />
              </Stack.Item>
              <Stack.Item>
                <TextStyle>
                  <b>Kantor Paxel Bandung</b>
                </TextStyle>
                <br />
                <br />
              </Stack.Item>
              <Stack.Item>
                Jl Lemahnendeut 111b Sukasari Bandung 40164
              </Stack.Item>
            </Card>
          </Layout.Section>
        </Layout>
      </Card.Section>
    );

    const panelGoodDetails = (
      <Card.Section>
        <TextStyle>Good Details</TextStyle>
        <br />
        <br />
        <Card>
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
                    <b>Item Category</b>
                  </TextStyle>
                  <Select
                    options={itemCategory}
                    onChange={this.handleChange}
                    value={this.state.selected}
                    width="70%"
                  />
                  <Checkbox
                    checked={checked}
                    label="Not Fragile"
                    onChange={this.handleChangeCheckBox}
                  />
                </Stack>
              </Stack.Item>
            </Stack>
          </Card.Section>
        </Card>
        <Card>
          <Card.Section>
            <Stack alignment="center">
              <Stack.Item>
                <TextStyle>Parcel Size : </TextStyle>
              </Stack.Item>
              <Stack.Item>
                <Icon source="circleInformation" color="inkLightest" />
              </Stack.Item>
              <Stack.Item fill>
                <ButtonGroup segmented>
                  {this.state.packageSize.map((size, key) => {
                    return (
                      <Button
                        key={key}
                        disabled={size.isLocked}
                        onClick={() => this.handlePackageSize(key)}
                      >
                        {size.name}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </Stack.Item>
              <Stack.Item />
              {status ? (
                this.packaging(status, value)
              ) : (
                <Stack.Item>
                  <Popover
                    active={this.state.active}
                    activator={activator}
                    onClose={this.togglePopover}
                  >
                    <ActionList items={listPackaging} />
                  </Popover>
                </Stack.Item>
              )}
            </Stack>
          </Card.Section>
        </Card>
      </Card.Section>
    );

    const panelPickupTime = (
      <Card.Section>
        <TextStyle>Pickup Time</TextStyle>
        <br />
        <br />
        <Card>
          <Card.Section>
            <Stack alignment="center">
              <Stack.Item fill>
                <ButtonGroup segmented>
                  {this.state.pickupTime.map((time, key) => {
                    return (
                      <Button
                        key={key}
                        disabled={time.isLocked}
                        onClick={() => this.handlePickupTime(key)}
                      >
                        {time.name}
                      </Button>
                    );
                  })}
                </ButtonGroup>
              </Stack.Item>
              <Stack.Item>
                <TextStyle>Pickup Time : </TextStyle>
              </Stack.Item>
              <Stack.Item fill>
                <Select
                  options={time}
                  onChange={this.handleChange}
                  value={this.state.selected}
                />
              </Stack.Item>
            </Stack>
          </Card.Section>
        </Card>
        <br />
        <Stack alignment="center">
          <Stack.Item fill />
          <Button primary onClick={() => this.redirectToConfirmShipment()}>
            CREATE SHIPMENT
          </Button>
        </Stack>
      </Card.Section>
    );

    const panelContents = [
      panelChooseOrder,
      panelSenderAndReceiver,
      panelGoodDetails,
      panelPickupTime
    ];

    return (
      <Page fullWidth>
        <Card>
          {panelHeader}
          <Card subdued>
            <Card.Section>{panelContents}</Card.Section>
          </Card>
        </Card>
      </Page>
    );
  }
}
