import React from "react";
import Message from "./Message";
import VendingMachineImg from "./VendingMachine.png";
import "./VendingMachine.css";
import { Link } from "react-router-dom";

const VendingMachine = () => (
  <div
    className="VendingMachine"
    style={{ backgroundImage: `url(${VendingMachineImg})` }}
  >
    <Message>
      <h2>Hello I am Vending Machine. What would you like to eat?</h2>
    </Message>
    <Message>
      <Link to="/chips">Chips</Link>
      <Link to="/sardines">Sardines</Link>
      <Link to="/soda">Soda</Link>
    </Message>
  </div>
);

export default VendingMachine;
