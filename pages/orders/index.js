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

export default class Order extends React.Component {
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
        ["#ODR001", "09/04/2019 10:00", "Bruce Wayne", "Paid", "IDR122,500.00"],
        ["#ODR002", "09/04/2019 10:00", "Bruce Wayne", "Paid", "IDR122,500.00"],
        ["#ODR003", "09/04/2019 10:00", "Bruce Wayne", "Paid", "IDR122,500.00"],
        ["#ODR004", "09/04/2019 10:00", "Bruce Wayne", "Paid", "IDR122,500.00"]
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
                  id="order-filter-select"
                  options={filterOptions}
                  value={filterOptionSelected}
                  onChange={this.handleFilterChange}
                />
              </Stack.Item>
              <Stack.Item fill />
              <Stack.Item>
                <Autocomplete
                  id="order-autocomplete-field"
                  options={data}
                  textField={
                    <Autocomplete.TextField
                      id="order-search-field"
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
                columnContentTypes={["text", "text", "text", "text", "numeric"]}
                headings={[
                  "Order",
                  "Date",
                  "Placed By",
                  "Shipment Status",
                  "Price"
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
