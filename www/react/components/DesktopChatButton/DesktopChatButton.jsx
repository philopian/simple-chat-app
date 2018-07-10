import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class DesktopChatButton extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <p>
          Chat with someone?{" "}
          <div className="message-icon">
            <i className="fa fa-commenting" aria-hidden="true" />
          </div>
        </p>
      </Wrapper>
    );
  }
}
DesktopChatButton.propTypes = {};
DesktopChatButton.defaultProps = {};
export default DesktopChatButton;
