import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import chipsImg from "./chips.png";
import "./Chips.css";
import Message from "./Message";

export default class chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chips: [],
      eaten: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const x = window.innerHeight * Math.random();
    const y = window.innerWidth * Math.random();
    console.log(x, y);
    this.setState((st) => ({
      chips: [...st.chips, { x, y }],
      eaten: st.eaten + 1
    }));
  }

  render() {
    const chips = this.state.chips.map((chips, idx) => (
      <img
        key={idx}
        className="bag"
        style={{ top: `${chips.y}px`, left: `${chips.x}px` }}
        src={chipsImg}
        alt="x"
      />
    ));
    return (
      <div className="Chips">
        <Message>
          <button onClick={this.handleClick}>Moaaar!</button>
          <h1>Chips eaten {this.state.eaten}</h1>
          <Link exact to="/">
            Go Back
          </Link>
        </Message>
        {chips}
      </div>
    );
  }
}
