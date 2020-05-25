import React, { Component } from "react";
import CustomTextField from "./CustomFieldText";
import CustomTextArea from "./CustomTextArea";

export default class Layout extends Component {
  constructor(props) {
    super();
    this.state = {
      sellerName: "",
      sellerAddress: "",
      customerName: "",
      customerAddres: "",
      invoiceDescription: "",
    };

    //  this.textFieldHandler = this.textFieldHandler.bind(this);
  }

  textFieldHandler(event) {
    if (event.target.name === "sellerName") {
      this.setState({
        sellerName: event.target.value,
      });
      console.log("Seller Name " + this.state.sellerName);
    }
    if (event.target.name === "sellerAddress") {
      this.setState({
        sellerAddress: event.target.value,
      });
      console.log("Seller Address " + this.state.sellerAddress);
    }
    if (event.target.name === "customerName") {
      this.setState({
        customerName: event.target.value,
      });
      console.log("Customer Name " + this.state.customerName);
    }
    if (event.target.name === "customerAddress") {
      this.setState({
        customerAddres: event.target.value,
      });
      console.log("Customer Address " + this.state.customerAddres);
    }
  }

  render() {
    return (
      <div>
        <CustomTextArea
          label="Invoice Discription"
          name="invoiceDescription"
          val={this.state.invoiceDescription}
          inputHandler={this.textFieldHandler}
        ></CustomTextArea>
        <CustomTextField
          customId="seller-name"
          label="Seller's Name"
          name="sellerName"
          placeholder="Type in the seller name..."
          val={this.state.sellerName}
          inputHandler={this.textFieldHandler.bind(this)}
          text="Enter the full seller name"
        ></CustomTextField>
        <CustomTextField
          customId="seller-address"
          label="Seller's Address"
          name="sellerAddress"
          placeholder="Type in the address..."
          val={this.state.sellerAddress}
          inputHandler={this.textFieldHandler.bind(this)}
          text="Enter the full address"
        ></CustomTextField>
        <CustomTextField
          customId="customer-name"
          label="Customer's Name"
          name="customerName"
          placeholder="Type in the customer name..."
          val={this.state.customerName}
          inputHandler={this.textFieldHandler.bind(this)}
          text="Enter the full customer name"
        ></CustomTextField>
        <CustomTextField
          customId="customer-address"
          label="Customer's Address"
          name="customerAddress"
          placeholder="Type in the name"
          val={this.state.customerAddress}
          inputHandler={this.textFieldHandler.bind(this)}
          text="Enter the customer address"
        ></CustomTextField>
      </div>
    );
  }
}
