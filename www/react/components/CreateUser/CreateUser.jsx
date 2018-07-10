import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class CreateUser extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <Wrapper>
        <p>Give yourself a username</p>
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
            Create
          </button>
        </div>
      </Wrapper>
    );
  }
}
CreateUser.propTypes = {
  handleClick: PropTypes.func
};
CreateUser.defaultProps = {
  // message: "World"
};
export default CreateUser;
