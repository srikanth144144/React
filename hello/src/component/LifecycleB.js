import React, { Component } from "react";

export class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "srikanth",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps(prpos, state) {
    console.log("LifecycleB getDerivedstateProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidmount");
  }
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
