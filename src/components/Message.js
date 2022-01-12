import { Component } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "./Message.css";

export default class Message extends Component {
  render() {
    return <div className="Message">{this.props.children}</div>;
  }
}
