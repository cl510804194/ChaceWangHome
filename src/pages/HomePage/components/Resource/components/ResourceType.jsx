import React, { Component } from "react";
export default class CostomNewsType extends Component {
  constructor(props) {
    super(props);
  }
  handleItemMouseEnter(e) {
    var that = this;
    const { index } = this.props;
    // this.props.activeClass(this.props.index).then(function(data) {
    //   that.changeArticle();
    // });
    this.props.activeClass(this.props.index);
  }
  render() {
    return (
      <li
        id={this.props.index}
        onMouseEnter={this.handleItemMouseEnter.bind(this)}
        //   className={this.props.className}
        className={
          this.props.index === this.props.currentIndex
            ? "resource-type-active"
            : "resource-type"
        }
      >
        {this.props.type}
      </li>
    );
  }
}
