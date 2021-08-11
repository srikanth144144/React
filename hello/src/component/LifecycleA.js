import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "srikanth",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(prpos, state) {
    console.log("LifecycleA getDerivedstateProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidmount");
  }
  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
