import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class NewItem extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  buttonClick = () => {
    var contacts = this.state.input;
    this.props.handleClick(this.state.input);
    this.reset();
  };

  reset = () => {
    this.setState({ input: "" });
  };

  render() {
    const Label = () =>
      this.props.newMessage ? null : (
        <div className="label-message">Give yourself a username</div>
      );

    return (
      <Wrapper>
        <Label />
        <br />
        <div className="input-section">
          <input
            type="text"
            name="username"
            className="username"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button className="create-user-button" onClick={this.buttonClick}>
            {this.props.newMessage ? "Send" : "Create"}
          </button>
        </div>
      </Wrapper>
    );
  }
}
NewItem.propTypes = {
  handleClick: PropTypes.func,
  newMessage: PropTypes.bool
};
NewItem.defaultProps = {
  newMessage: true
};
export default NewItem;
