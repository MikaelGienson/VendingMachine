import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Chips from "./components/Chips";
import VendingMachine from "./components/VendingMachine";
import Sardines from "./components/Sardines";
import Soda from "./components/Soda";
import NavBar from "./components/NavBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <hr />
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/chips" component={Chips} />
          <Route exact path="/sardines" component={Sardines} />
          <Route exact path="/soda" component={Soda} />
        </Switch>
      </div>
    );
  }
}
