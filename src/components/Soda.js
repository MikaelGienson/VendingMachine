import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import sodaImg from "./soda.png";
import "./Soda.css";
import Message from "./Message";

export default class Soda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sodas: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const x = window.innerHeight * Math.random();
    const y = window.innerWidth * Math.random();
    console.log(x, y);
    this.setState((st) => ({ sodas: [...st.sodas, { x, y }] }));
  }

  render() {
    const soda = this.state.sodas.map((soda, idx) => (
      <img
        key={idx}
        className="soda-img"
        style={{ top: `${soda.y}px`, left: `${soda.x}px` }}
        src={sodaImg}
        alt="x"
      />
    ));
    return (
      <div className="Soda">
        <Message>
          <button onClick={this.handleClick}>Moaaar!</button>
          <h1>Love Soda!</h1>
          <Link exact to="/">
            Go Back
          </Link>
        </Message>
        {soda}
      </div>
    );
  }
}
