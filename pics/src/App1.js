import React from "react";
import React, { Component } from "react";
import "./App.css";

class App1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: "",
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
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
              <span>Title</span>
              <span>Rating</span>
              <span>Available</span>
              <span>price</span>
              <span>product</span>
            </div>
            {data.map((object) => (
              <div className="data">
                <div>{object.id}</div>
                <div>{object.Title}</div>
                <div>{object.Rating}</div>
                <div>{object.Available}</div>
                <div>{object.price}</div>
                <div>{object.product}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default App1;
