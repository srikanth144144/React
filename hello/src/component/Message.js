import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = { Message: "Welcome visitor" };
  }
  changeMessage() {
    this.setState({
      Message: "Thank you subscribeing",
    });
  }

  render() {
    return (
      <div>
        {this.state.Message}
        <br />
        <button onClick={() => this.changeMessage()}>Subscribe </button>
      </div>
    );
  }
}

export default Message;
