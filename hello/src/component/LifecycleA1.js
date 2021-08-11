import React, { Component } from "react";
import LifecycleB1 from "./LifecycleB1";

export class LifecycleA1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "srikanth",
    };
    console.log("LifecycleA1 constructor");
  }
  static getDerivedStateFromProps(prpos, state) {
    console.log("LifecycleA1 getDerivedstateProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA1 componentDidmount");
  }
  shouldComponentUpdate() {
    console.log("LifecycleA1 shouldcomponenUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA1 getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleA1 componentDidUpdate");
  }
  changeState = () => {
    this.setState({
      name: "Sree",
    });
  };
  render() {
    console.log("LifecycleA1 render");
    return (
      <div>
        LifecycleA1
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB1 />
      </div>
    );
  }
}

export default LifecycleA1;
