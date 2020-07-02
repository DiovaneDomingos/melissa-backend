import React, { Component } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

import "./styles.css";

import send from "../../images/send-icon.png";
import melissa from "../../images/melissa-icon.png";
import close from "../../images/close-icon.png";
import chat from "../../images/chat-icon.png";

export default class ChatPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        display: "none",
      },
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const icon = document.getElementById("chat-icon");
    if (this.state.style.display === "none") {
      this.setState({
        style: {
          display: "block",
        },
      });
      icon.src = close;
    } else {
      this.setState({
        style: {
          display: "none",
        },
      });
      icon.src = chat;
    }
  }

  renderChat = () => {
    return (
      <div className="chat">
        <div className="button-container" onClick={this.handleClick}>
          <img id="chat-icon" src={chat} alt="Chat icon" />
        </div>
        <div className="container" style={this.state.style}>
          <header id="chat-header">
            <div className="header-info">
              <img src={melissa} alt="Melissa icon" />
              <span>Melissa</span>
            </div>
          </header>
          <div className="message-list"></div>
          <footer>
            <InputGroup className="message-box">
              <FormControl
                className="message-input"
                placeholder="Digite algo..."
                aria-label="Message"
              />
              <img src={send} alt="Send button" />
            </InputGroup>
          </footer>
        </div>
      </div>
    );
  };

  render() {
    return <>{this.renderChat()}</>;
  }
}
