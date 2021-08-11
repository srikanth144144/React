import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  clickHandler = () => {
    const check = this.state.message === "Hello" ? "GoodBye" : "Hello";
    this.setState({
      message: check,
    });
  };

  render() {
    return (
      <div>
        <span onClick={this.clickHandler} style={{ cursor: "pointer" }}>
          {this.state.message}
        </span>
        {/* <button >Click</button> */}
      </div>
    );
  }
}

export default EventBind;
