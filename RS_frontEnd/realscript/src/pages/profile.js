import React, { Component } from "react";
import ButtonRow from "../modules/buttonRow";
import "../assets/main.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="Home">
        <div className="navbar">
          <ButtonRow />
        </div>
      </div>
    );
  }
}