import React, { Component } from "react";
export default class CostomNewsType extends Component {
  constructor(props) {
    super(props);
  }

  handleItemMouseEnter(e) {
    const { index } = this.props;
    const currentindex2 = e.target.id;
    this.props.activeClass(this.props.index);
  }

  render() {
    return (
      <li
        onMouseEnter={this.handleItemMouseEnter.bind(this)}
        id={this.props.index}
        //   className={this.props.className}
        className={
          this.props.index === this.props.currentIndex
            ? "news-type-active"
            : "news-type"
        }
      >
        {this.props.type}
      </li>
    );
  }
}
