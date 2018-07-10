import React, { Component } from "react";
import PropTypes from "prop-types";
const uuidv1 = require("uuid/v1");
import { Wrapper } from "./styles.js";

import DesktopChatButton from "../DesktopChatButton";
import Header from "../Header";
import Message from "../Message";
import NewItem from "../NewItem";

class Container extends Component {
  state = {
    isOpen: false,
    messages: [
      {
        key: 0,
        usersMessage: false,
        username: "Some User",
        message: "ffffff",
        timestamp: "10:10pm"
      }
    ]
  };

  scrollToBottom = () => {
    let el = document.getElementById("chat-box");
    try {
      el.scrollTop = el.scrollHeight;
    } catch (error) {}
  };

  componentDidMount = () => {
    this.scrollToBottom();
  };
  componentDidUpdate = () => {
    this.scrollToBottom();
  };

  handleNewMessage = message => {
    const d = new Date();
    this.setState({
      messages: this.state.messages.concat({
        key: uuidv1(),
        usersMessage: true,
        username: "sdf",
        message,
        timestamp: d.toLocaleTimeString()
      })
    });
  };

  handleFooterClick = () => {
    console.log("foooter click");
    // const chatBox = document.getElementsByClassName("chat-box");
    // chatBox.classList.add("chat-box-open");
  };

  render() {
    const allMessages = this.state.messages.map(item => <Message {...item} />);

    return (
      <Wrapper>
        <Header title="Fake Chat app" />
        <div id="chat-box" className="chat-box ">
          {allMessages}
        </div>
        <div className="footer" onClick={this.handleFooterClick}>
          <NewItem newMessage handleClick={this.handleNewMessage} />
        </div>
      </Wrapper>
    );
  }
}
Container.propTypes = {
  // message: PropTypes.string
};
Container.defaultProps = {
  // message: "World"
};
export default Container;
