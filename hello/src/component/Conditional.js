import React, { Component } from "react";

export class Conditional extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn && <div>Welcome Madhu</div>;
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Srikanth</div>
    // ) : (
    //   <div>Welcome Ashfaaq</div>
    // );
  }
}

export default Conditional;
