import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class Header extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
        <i className="fa fa-users user-list" aria-hidden="true" />
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
