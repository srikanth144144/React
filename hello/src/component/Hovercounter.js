import React, { Component } from "react";

class Hovercounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incerementcount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseOver={this.incerementcount}>Hover{count} Times</h2>
      </div>
    );
  }
}

export default Hovercounter;
