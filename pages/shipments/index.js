import React from "react";
import {
  Autocomplete,
  Card,
  DataTable,
  Layout,
  Icon,
  Page,
  Stack,
  Select,
  TextStyle
} from "@shopify/polaris";

export default class Shipments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterOptions: [],
      filterOptionSelected: 10
    };
  }

  componentDidMount() {
    this.setState({
      filterOptions: [
        { label: "10", value: 10 },
        { label: "20", value: 20 },
        { label: "30", value: 30 }
      ],
      data: [
        [
          "#102378098",
          "08/04/2019 10:00",
          "BF0110100",
          "IDR22,500.00",
          "On Delivery Hero"
        ],
        [
          "#102378099",
          "08/04/2019 10:00",
          "BF0110101",
          "IDR22,500.00",
          "On Delivery Hero"
        ],
        [
          "#102378100",
          "08/04/2019 10:00",
          "BF0110102",
          "IDR22,500.00",
          "On Delivery Hero"
        ],
        [
          "#102378101",
          "08/04/2019 10:00",
          "BF0110103",
          "IDR22,500.00",
          "On Delivery Hero"
        ]
      ]
    });
  }

  handleFilterChange = selectedValue => {
    this.setState({ filterOptionSelected: selectedValue });
  };

  render() {
    const { filterOptions, filterOptionSelected, data } = this.state;

    return (
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <Stack alignment="baseline">
              <Stack.Item>
                <TextStyle>Tampilkan Daftar</TextStyle>
              </Stack.Item>
              <Stack.Item>
                <Select
                  id="shipment-filter-select"
                  options={filterOptions}
                  value={filterOptionSelected}
                  onChange={this.handleFilterChange}
                />
              </Stack.Item>
              <Stack.Item fill />
              <Stack.Item>
                <Autocomplete
                  id="shipment-autocomplete-field"
                  options={data}
                  textField={
                    <Autocomplete.TextField
                      id="shipment-search-field"
                      prefix={<Icon source="search" color="inkLighter" />}
                      placeholder="Search"
                    />
                  }
                />
              </Stack.Item>
            </Stack>
          </Layout.Section>
          <Layout.Section>
            <Card>
              <DataTable
                columnContentTypes={["text", "text", "text", "text", "text"]}
                headings={[
                  "Transaction ID",
                  "Date",
                  "Shipment Code",
                  "Price",
                  "Status"
                ]}
                rows={data}
                footerContent={`Showing ${data.length} of ${
                  data.length
                } results`}
              />
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}
