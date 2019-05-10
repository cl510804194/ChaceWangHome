import React, { Component } from "react";
import NewsParContaineritem from "./newsParContaineritem.jsx";
export default class newsParContainer extends Component {
  static displayName = "newsParContainer";
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return <ul className="news-pariculars-container" />;
  }
}
