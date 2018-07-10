import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class OthersMessage extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <div className="arrow-left" />
        <div className="content">
          <div className="username">{this.props.username}</div>
          <div className="message">{this.props.message}</div>
          <div className="timestamp">{this.props.timestamp}</div>
          <div className="deal-with-float" />
        </div>
      </Wrapper>
    );
  }
}
OthersMessage.propTypes = {
  username: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.string
};
OthersMessage.defaultProps = {
  username: "",
  message: "",
  timestamp: ""
};
export default OthersMessage;
