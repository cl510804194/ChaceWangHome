import React, { Component } from "react";
import NewsParContainer from "./newsParContainer";
import NewsParItem from "./newsParContaineritem";
export default class NewsType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getArticleList: []
    };
  }

  handleItemMouseEnter(e) {
    var that = this;
    const { index } = this.props;
    // this.props.activeClass(this.props.index).then(function(data) {
    //   that.changeArticle();
    // });
    this.props.activeClass(this.props.index);
  }
  changeArticle() {
    let getList = this.props.ty.filter(
      item => item.id === this.props.currentIndex
    );
    this.setState({
      getArticleList: [...getList]
    });
  }
  getFirstArticle() {
    let p = [...this.state.getArticleList];
    console.log(p);
    var arti = p[0].article;
    return p.map(item => {
      return (
        <NewsParContainer>
          {arti.map(item => {
            return <NewsParItem key={item.id}>{item.content}</NewsParItem>;
          })}
        </NewsParContainer>
      );
    });
  }
  render() {
    return (
      <li
        onMouseEnter={this.handleItemMouseEnter.bind(this)}
        onClick={this.getFirstArticle.bind(this)}
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
