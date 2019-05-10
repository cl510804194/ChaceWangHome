import React, { Component } from "react";
export default class SearchItem extends Component {
  constructor(props) {
    super(props);
  }
  changeClass() {
    this.props.activeClass(this.props.index);
  }
  render() {
    return (
      <li className="keyword">
        <div onMouseEnter={this.changeClass.bind(this)} className="text">
          {this.props.text}
        </div>
        <div
          className={
            this.props.index === this.props.currentIndex
              ? "keyword-triangle-active"
              : "keyword-triangle"
          }
        />
      </li>
    );
  }
}
