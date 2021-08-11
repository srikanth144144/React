import React, { Component } from "react";
import ChildrenComponent from "./ChildrenComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent Name",
    };
    this.ongreet = this.ongreet.bind(this);
  }
  ongreet(child) {
    alert(`hello ${this.state.message} from ${child}`);
  }

  render() {
    return (
      <div>
        <ChildrenComponent greetparent={this.ongreet} />
      </div>
    );
  }
}

export default ParentComponent;
