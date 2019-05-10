import React, { Component } from "react";
import { Input } from "@alifd/next";
import "./NavStyle.scss";
import searchPic from "../../../../images/public/search.png";
import chaceLogo from "../../../../images/public/chacewang_logo.png";
import SearchItem from "./components/SearchItem";
export default class Nav extends Component {
  static displayName = "Nav";

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      list: [
        {
          id: 0,
          name: "查政策",
          inputPlace: "请输入你要查询的关键字"
        },
        {
          id: 1,
          name: "高企名单",
          inputPlace: "请输入你要查询的关键字"
        },
        {
          id: 2,
          name: "知识产权",
          inputPlace: "请输入你要查询的公司名称"
        },
        {
          id: 3,
          name: "创新载体",
          inputPlace: "请输入你要查询的关键字"
        }
      ]
    };
  }
  activeClass(index) {
    this.setState({
      currentIndex: index
    });
  }
  getSearchItem() {
    let searchList = [...this.state.list];
    return searchList.map((item, index) => {
      return (
        <SearchItem
          activeClass={this.activeClass.bind(this, index)}
          text={item.name}
          key={index}
          index={index}
          currentIndex={this.state.currentIndex}
        />
      );
    });
  }
  changePlaceholder() {
    let value = "";
    if (this.state.currentIndex === 0) {
      value = "请输入你要查询的关键字";
    }
    if (this.state.currentIndex === 1) {
      value = "请输入你要查询的关键字";
    }
    if (this.state.currentIndex === 2) {
      value = "请输入你要查询的公司名称";
    }
    if (this.state.currentIndex === 3) {
      value = "请输入你要查询的关键字";
    }
    return value;
  }
  render() {
    return (
      <div className="search-back">
        <div className="search-box">
          <h1 className="search-text">科技产业政策大数据平台</h1>
          <div className="keyword-search">
            <div className="search-title">
              <div className="search-logo">
                <img src={chaceLogo} alt="" />
              </div>
              <div className="search-city">
                <span className="text city-name">北京</span>
                <span className="opt">
                  【
                  <a href="http://www.chacewang.com/" target="_blank">
                    切换城市
                  </a>
                  】
                </span>
              </div>
            </div>

            <div className="keyword-wrapper">
              <ul className="keyword-text">{this.getSearchItem()}</ul>
            </div>
            <div className="search">
              <div className="search-wrapper">
                <Input
                  type="text"
                  id="searchText"
                  name="searchText"
                  placeholder={this.changePlaceholder()}
                />

                <span className="search-icon">
                  <a href="javascript:void(0)">
                    <img src={searchPic} alt="" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    background:
      "url(https://img.alicdn.com/tfs/TB1Q7YOdMHqK1RjSZFgXXa7JXXa-2868-912.png)",
    width: "100%",
    height: "418px",
    backgroundSize: "cover"
  },
  content: {
    width: "1200px",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  title: {
    color: "#ffffff",
    marginBottom: "24px",
    fontWeight: "500",
    fontSize: "52px"
  },
  desc: {
    color: "#ffffff",
    marginBottom: "24px",
    fontSize: "28px"
  },
  link: {
    border: "1px solid #fff",
    fontSize: "14px",
    width: "124px",
    height: "40px",
    lineHeight: "40px",
    color: "rgba(31,56,88,0.6)",
    borderRadius: "18px",
    padding: "0 16px",
    backgroundColor: "#fff",
    textAlign: "center",
    cursor: "pointer",
    textDecoration: "none"
  }
};
