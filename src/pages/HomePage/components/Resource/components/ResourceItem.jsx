import React, { Component } from "react";
export default class ResourceItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleItemMouseEnter(e) {
    var that = this;
    const { index } = this.props;

    this.props.activeClass(this.props.index);
  }
  render() {
    return (
      <li className="carousel-img">
        <div className="hp-item-tit">{this.props.name}</div>
        <img src={this.props.src} />
      </li>
    );
  }
}
