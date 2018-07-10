import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class Message extends Component {
  state = {};

  render() {
    const Arrow = () => {
      return this.props.usersMessage ? (
        <div className="arrow-left" />
      ) : (
        <div className="arrow-right" />
      );
    };

    return (
      <Wrapper>
        <Arrow />
        <div
          className={`content ${
            this.props.usersMessage ? "padding-right" : "padding-left"
          }`}
        >
          <div className="username">
            {this.props.usersMessage ? "" : this.props.username}
          </div>
          <div className="message">{this.props.message}</div>
          <div className="timestamp">{this.props.timestamp}</div>
          <div className="deal-with-float" />
        </div>
      </Wrapper>
    );
  }
}
Message.propTypes = {
  usersMessage: PropTypes.bool,
  username: PropTypes.string,
  message: PropTypes.string,
  timestamp: PropTypes.string
};
Message.defaultProps = {
  usersMessage: true,
  username: "",
  message: "",
  timestamp: ""
};
export default Message;
