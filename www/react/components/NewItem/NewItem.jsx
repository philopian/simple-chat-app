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

  render() {
    const Label = () =>
      this.props.newMessage ? null : (
        <p className="label-message">Give yourself a username</p>
      );

    return (
      <Wrapper>
        <Label />
        <div className="input-section">
          <input
            type="text"
            name="username"
            className="username"
            onChange={this.handleChange}
          />
          <button
            className="create-user-button"
            onClick={() => this.props.handleClick(this.state.input)}
          >
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
