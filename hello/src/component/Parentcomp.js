import React, { Component, PureComponent } from "react";
import Memocomp from "./Memocomp";
import Purecomp from "./Purecomp";
import Regcomp from "./Regcomp";
class Parentcomp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Srikanth",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Srikanth",
      });
    }, 2000);
  }

  render() {
    console.log(
      "*******************'Parent comp Reander'***********************"
    );
    return (
      <div>
        Parent component
        <Memocomp name={this.state.name} />
        {/* <Regcomp name={this.state.name} />
        <Purecomp name={this.state.name} /> */}
      </div>
    );
  }
}

export default Parentcomp;
