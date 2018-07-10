import React, { Component } from "react";
import PropTypes from "prop-types";
const uuidv1 = require("uuid/v1");
import { Wrapper } from "./styles.js";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:1234");

import DesktopChatButton from "../DesktopChatButton";
import Header from "../Header";
import Message from "../Message";
import NewItem from "../NewItem";

class Container extends Component {
  username = "";
  state = {
    isOpen: false,
    messages: [
      {
        key: 0,
        usersMessage: false,
        username: "Some User",
        message:
          "open up another browser at http://localhost:8080/ to add a message from another user",
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
    this.handleSockets();
  };
  componentDidUpdate = () => {
    this.scrollToBottom();
  };

  handleSockets = () => {
    socket.on("FROM_SERVER", payload => {
      this.updateCodeFromSockets(payload);
    });
  };

  updateCodeFromSockets = payload => {
    this.setState({
      messages: this.state.messages.concat(payload)
    });
  };

  handleNewMessage = message => {
    const d = new Date();
    // If user isn't defined make a random one
    if (this.username === "") {
      this.username = "user_" + Math.floor(Math.random() * 2000) + 1;
    }
    const payload = {
      key: uuidv1(),
      username: this.username,
      message,
      timestamp: d.toLocaleTimeString()
    };
    socket.emit("TO_SERVER", payload);
  };

  handleFooterClick = () => {
    // console.log("foooter click");
    // const chatBox = document.getElementsByClassName("chat-box");
    // chatBox.classList.add("chat-box-open");
  };

  render() {
    const allMessages = this.state.messages.map(item => {
      if (item.username === this.username) {
        item.usersMessage = true;
      } else {
        item.usersMessage = false;
      }
      return <Message {...item} />;
    });

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
