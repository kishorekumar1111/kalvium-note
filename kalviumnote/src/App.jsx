import React, { Component } from "react";
import "./editor.css";

export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      value: "Hey guys",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={this.handleChange}
            defaultValue={"Hey guys"}
          />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div
            className="output-text"
          >
            {this.state.value}
          </div>
        </div>
      </div>
    );  
  }
}