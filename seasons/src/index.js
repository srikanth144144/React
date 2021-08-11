import React from "react";
import ReacctDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
  state = { key: null, errorMesssage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMesssage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMesssage && !this.state.latitude) {
      return <div>Error:{this.state.errorMesssage} </div>;
    }
    if (!this.state.errorMesssage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <Spinner message="please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
ReacctDOM.render(<App />, document.querySelector("#root"));
