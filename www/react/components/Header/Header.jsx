import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class Header extends Component {
  state = {};

  render() {
    return (
      <Wrapper>
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
