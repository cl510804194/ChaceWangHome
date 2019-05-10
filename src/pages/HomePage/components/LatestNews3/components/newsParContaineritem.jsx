import React, { Component } from "react";
export default class newsParContaineritem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <li>
        <a>{this.props.content}</a>
        <span>{this.props.time}</span>
      </li>
    );
  }
}
