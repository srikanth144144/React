import React, { Component } from "react";

class LifecycleB1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "srikanth",
    };
    console.log("LifecycleB1 constructor");
  }
  static getDerivedStateFromProps(prpos, state) {
    console.log("LifecycleB1 getDerivedstateProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB1 componentDidmount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleB1 shouldcomponenUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB1 getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB1 componentDidUpdate");
  }
  render() {
    console.log("LifecycleB1 render");
    return <div>LifecycleB1</div>;
  }
}

export default LifecycleB1;
