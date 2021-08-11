import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((e) => e.json())
      .then((results) => {
        this.setState({ data: results });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  render() {
    const { data, error } = this.state;
    return (
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <div>
            <div className="Demo">
              <span>Id</span>
              <span>name</span>
              <span>username</span>
              <span>email</span>
              <span>phone</span>
            </div>
            {data.map((object) => (
              <div className="data">
                <div>{object.id}</div>
                <div>{object.name}</div>
                <div>{object.username}</div>
                <div>{object.email}</div>
                <div>{object.phone}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App;
