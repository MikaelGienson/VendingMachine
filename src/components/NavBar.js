import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <NavLink exact activeClassName="active-link" to="/">
          Vending Machine
        </NavLink>
        <NavLink activeClassName="active-link" to="/chips">
          Chips
        </NavLink>
        <NavLink activeClassName="active-link" to="/sardines">
          Sardines
        </NavLink>
        <NavLink activeClassName="active-link" to="/soda">
          Soda
        </NavLink>
      </div>
    );
  }
}
