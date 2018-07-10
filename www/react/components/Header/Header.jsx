import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";
import UserList from "../UserList";

import ToolTip from "react-portal-tooltip";

const MOCK_USERS = [
  { key: 1, name: "Mock user 1" },
  { key: 2, name: "Mock user 2" },
  { key: 3, name: "Mock user 3" }
];
class Header extends Component {
  state = {
    isTooltipActive: false
  };

  showTooltip = () => {
    this.setState({ isTooltipActive: true });
  };
  hideTooltip = () => {
    this.setState({ isTooltipActive: false });
  };

  render() {
    return (
      <Wrapper>
        <i
          id="text"
          className="fa fa-users user-list"
          aria-hidden="true"
          onMouseEnter={this.showTooltip}
          onMouseLeave={this.hideTooltip}
        >
          <ToolTip
            active={this.state.isTooltipActive}
            position={document.width > 600 ? "top" : "bottom"}
            arrow="center"
            parent="#text"
          >
            <div>
              <UserList />
            </div>
          </ToolTip>
        </i>
        <i className="fa fa-user current-user" aria-hidden="true" />
        <p>{this.props.title}</p>
      </Wrapper>
    );
  }
}
Header.propTypes = {
  title: PropTypes.string
};
Header.defaultProps = {};
export default Header;
