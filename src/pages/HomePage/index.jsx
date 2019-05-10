import React, { Component } from "react";
import Nav from "./components/Nav";
import News from "./components/NewsSlider";
import Resource from "./components/Resource";
import CardItems from "./components/CardItems";
import LastNews from "./components/LatestNews3";
import Slider from "./components/ImgSlider";
import StyledMenu from "./components/StyledMenu/index";
export default class HomePage extends Component {
  static displayName = "HomePage";

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Nav />
        <CardItems />
        <News />
        <LastNews />
        <Slider />
        <Resource />
        <StyledMenu />
      </div>
    );
  }
}
