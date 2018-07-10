import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class DesktopChatButton extends Component {
  state = {};

  render() {
    return (
      <Wrapper onclick={() => this.props.handleClick}>
        <div>
          Chat with someone?{" "}
          <div className="message-icon">
            <i className="fa fa-commenting" aria-hidden="true" />
          </div>
        </div>
      </Wrapper>
    );
  }
}
DesktopChatButton.propTypes = {
  handleClick: PropTypes.func
};
DesktopChatButton.defaultProps = {};
export default DesktopChatButton;
