import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

class UserList extends Component {
  state = {}
  
  render() {
    return (
      <div className="my-component">
        <Wrapper>
          <h1>user list</h1>
          <p>{this.props.message}</p>
        </Wrapper>
      </div>
    );
  }
}
UserList.propTypes = {
  message: PropTypes.string
};
UserList.defaultProps = {
  message: "World"
};
export default UserList;
