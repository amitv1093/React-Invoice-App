import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class CustomTextArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <h5>{this.props.label}</h5>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          name={this.props.name}
          value={this.props.val}
          onChange={this.props.inputHandler}
        ></FormControl>
      </InputGroup>
    );
  }
}
