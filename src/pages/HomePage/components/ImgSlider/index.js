import React, { Component } from "react";
import { Slider } from "@alifd/next";
import "./SliderStyle.scss";
import HuaDongXing from "../../../../images/public/home/huodongxing01.jpg";
import TaXaTion from "../../../../images/public/home/taxation.jpg";
import Spread from "../../../../images/public/home/spread.png";
const slides = [
  { url: HuaDongXing, text: "Tape Player Skin Design Competition" },
  { url: TaXaTion, text: "Mobile Phone Taobao Skin Call" },
  { url: Spread, text: "Design Enabling Public Welfare" }
];

export default class ChaSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  getItems() {
    const itemNodes = slides.map((item, index) => (
      <div key={index} className="slider-img-wrapper">
        <img src={item.url} alt={item.text} />
      </div>
    ));

    return itemNodes;
  }
  render() {
    return (
      <div className="slider-container">
        <Slider
          className="slider-content"
          adaptiveHeight={true}
          autoplay={true}
        >
          {this.getItems()}
        </Slider>
      </div>
    );
  }
}
