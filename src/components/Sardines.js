import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";
import Message from "./Message";

export default class App extends Component {
  render() {
    return (
      <div className="Sardines">
        <Message>
          <h1>Sardines will eat ya!</h1>
          <Link exact to="/">
            Go Back
          </Link>
        </Message>
      </div>
    );
  }
}
