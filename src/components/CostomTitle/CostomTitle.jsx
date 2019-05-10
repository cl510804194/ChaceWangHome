import React, { Component } from "react";
export default class newstitle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="news-title">{this.props.title}</div>;
  }
}
