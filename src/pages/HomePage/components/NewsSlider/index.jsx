import React, { Component } from "react";
import "./News.scss";
import { Slider } from "@alifd/next";
import NewsItem from "./components/NewsItem";
export default class News extends Component {
  static displayName = "News";

  constructor(props) {
    super(props);
    this.state = {
      newsList: [
        {
          id: 0,
          text: "【资讯】查策网受宝安科创之邀开展政策宣讲(04-26)"
        },
        {
          id: 1,
          text:
            " 【资讯】查策网应邀参加澳门城市大学“校园创业就业嘉年华”活动(03-08)"
        }
      ]
    };
  }
  getNewsItem() {
    let newsLi = [...this.state.newsList];
    return newsLi.map((item, index) => {
      {
        console.log(1);
      }
      return (
        <div key={index}>
          <a href="">{item.text}</a>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="news">
        <div className="news-content">
          <div className="news-article">
            <div className="news-article-rectangle" />
            <div className="news-article-text">查策网新闻</div>
          </div>
          <div className="news-content-bar">
            <div className="content-text">
              <Slider
                slideDirection="ver"
                dots={false}
                arrows={false}
                autoplay={true}
                autoplaySpeed={1000}
                speed={2000}
                infinite={true}
                pauseOnHover={true}
              >
                {this.getNewsItem()}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "640px",
    margin: "0 auto",
    padding: "80px 0"
  },
  title: {
    color: "rgba(0,0,0,0.8)",
    lineHeight: "38px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "40px",
    margin: "0 0 24px"
  },
  desc: {
    color: "rgba(0,0,0,.6)",
    fontSize: "14px",
    lineHeight: "30px"
  }
};
