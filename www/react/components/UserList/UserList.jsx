import React, { Component } from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./styles.js";

const INITIAL_USERS = [
  { key: 1, name: "Mock user 1" },
  { key: 2, name: "Mock user 2" },
  { key: 3, name: "Mock user 3" }
];
class UserList extends Component {
  state = {
    users: []
  };

  componentWillMount = () => {
    this.setState({ users: INITIAL_USERS });
  };

  render() {
    const userList = this.state.users.map(item => (
      <li key={item.key}>{item.name}</li>
    ));

    console.log("--state", this.state);

    return (
      <Wrapper>
        <h3>Current Users</h3>
        <ul>{userList}</ul>
      </Wrapper>
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
