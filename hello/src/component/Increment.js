import React, { Component } from "react";

class Increment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incerement() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("callback value" + this.state.count);
      }
    );
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        <div>count-{this.state.count}</div>
        <button onClick={() => this.incerement()}>Incerement</button>
      </div>
    );
  }
}

export default Increment;
