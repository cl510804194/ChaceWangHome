import React, { Component } from "react";
import News1 from "../../../../images/public/home/news1.png";
import News2 from "../../../../images/public/home/news2.png";
import News3 from "../../../../images/public/home/news3.png";

import NewsParItem from "./components/newsParContaineritem";
// import NewsTitle from "./components/newstitle.jsx";
import NewsTitle from "../../../../components/CostomTitle/CostomTitle.jsx";
import NewsTypeItem from "./components/NewsType";
import "./LatestNews.scss";

export default class LatestNews extends Component {
  static displayName = "LatestNews";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      articleList: [
        {
          id: 0,
          name: "申报通知",
          article: [
            {
              id: 1,
              content:
                "【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知1",
              time: "[05-08]"
            },
            {
              id: 2,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知1",
              time: "[05-08]"
            },
            {
              id: 3,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 4,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 5,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 6,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 7,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },

            {
              id: 8,
              content:
                "1【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知1",
              time: "[05-08]"
            },
            {
              id: 9,
              content:
                "11罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知1",
              time: "[05-08]"
            },
            {
              id: 10,
              content:
                "11【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 11,
              content:
                "12【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 12,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 13,
              content:
                "13【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 14,
              content:
                "14【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            }
          ]
        }
      ],
      title: "热门资讯",
      type: [
        {
          id: 0,
          name: "申报通知",
          article: [
            {
              id: 1,
              content:
                "1【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知1",
              time: "[05-08]"
            },
            {
              id: 2,
              content:
                "1【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知1",
              time: "[05-08]"
            },
            {
              id: 3,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 4,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 5,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 6,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 7,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 8,
              content:
                "1【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知1",
              time: "[05-08]"
            },
            {
              id: 9,
              content:
                "11罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知1",
              time: "[05-08]"
            },
            {
              id: 10,
              content:
                "11【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 11,
              content:
                "12【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 12,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 13,
              content:
                "13【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 14,
              content:
                "14【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            }
          ]
        },
        {
          id: 1,
          name: "公示公告",
          article: [
            {
              id: 1,
              content:
                "2【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知",
              time: "[05-08]"
            },
            {
              id: 2,
              content:
                "2【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 3,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 4,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 5,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 6,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 7,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 8,
              content:
                "532【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知",
              time: "[05-08]"
            },
            {
              id: 9,
              content:
                "531【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 10,
              content:
                "424【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 11,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 12,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 13,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 14,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            }
          ]
        },
        {
          id: 2,
          name: "政策动态",
          article: [
            {
              id: 1,
              content:
                "3【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知",
              time: "[05-08]"
            },
            {
              id: 2,
              content:
                "3【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 3,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 4,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 5,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 6,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 7,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 8,
              content:
                "33【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知",
              time: "[05-08]"
            },
            {
              id: 9,
              content:
                "342【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 10,
              content:
                "313【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 11,
              content:
                "36161【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 12,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 13,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 14,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            }
          ]
        },
        {
          id: 3,
          name: "申报指南",
          article: [
            {
              id: 1,
              content:
                "4【深圳】关于开展2019年度深圳市科学技术奖（标准奖）申请工作的通知",
              time: "[05-08]"
            },
            {
              id: 2,
              content:
                "4【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 3,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 4,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            },
            {
              id: 5,
              content:
                "【罗湖】关于征集深圳市罗湖区第三届大梧桐创新创业大赛共同承办单位的通知",
              time: "[05-08]"
            },
            {
              id: 6,
              content:
                "【深圳】关于开展2019年度深圳市企业技术中心认定工作的通知",
              time: "[05-07]"
            },
            {
              id: 7,
              content:
                "【工信部】三部门关于举办第十六届中国国际中小企业博览会的通知",
              time: "[05-06]"
            }
          ]
        }
      ]
    };
  }
  activeClass(e, index) {
    var that = this;
    that.setState(
      {
        currentIndex: index
      },
      () => {
        this.changeArticle();
      }
    );
  }
  changeArticle() {
    let getList = this.state.type.filter(
      item => item.id === this.state.currentIndex
    );
    this.setState({
      articleList: [...getList]
    });
  }

  getFirstArticle() {
    let p = [...this.state.articleList];
    console.log(p);
    let arti = p[0].article.filter(item => item.id < 8);
    console.log(arti);

    return (
      <ul className="news-pariculars-container">
        {arti.map(item => {
          return (
            <NewsParItem
              key={item.id}
              content={item.content}
              time={item.time}
            />
          );
        })}
      </ul>
    );
    // return arti.map(item => {
    //   return (
    //     <NewsParItem key={item.id} content={item.content} time={item.time} />
    //   );
    // });
  }
  getSecondArticle() {
    let p = [...this.state.articleList];
    console.log(p);
    let arti = p[0].article.filter(item => item.id > 7 && item.id < 15);
    console.log(arti);
    return (
      <ul className="news-pariculars-container">
        {arti.map(item => {
          return (
            <NewsParItem
              key={item.id}
              content={item.content}
              time={item.time}
            />
          );
        })}
      </ul>
    );
  }
  getThirdArticle() {}
  getNewsType() {
    return this.state.type.map((item, index) => {
      return (
        <NewsTypeItem
          activeClass={this.activeClass.bind(this, index)}
          key={index}
          index={index}
          ref="NewsTypeItem"
          currentIndex={this.state.currentIndex}
          type={item.name}
          ty={this.state.type}
          className="news-type"
        />
      );
    });
  }
  render() {
    return (
      <div className="latest-news">
        <NewsTitle title={this.state.title} />
        <ul className="news-type-wrapper">{this.getNewsType()}</ul>
        <div className="news-particulars">
          <ul className="news-particulars-content">
            <li>
              <img src={News1} alt="" />

              {this.getFirstArticle()}
            </li>
            <li>
              <img src={News2} alt="" />
              {this.getSecondArticle()}
            </li>
            <li>
              <img src={News3} alt="" />

              {this.getFirstArticle()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const styles = {
  cardContainer: {
    height: 280
  },
  cardTitle: {
    position: "relative",
    margin: "0 0 10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333"
  },
  more: {
    position: "absolute",
    right: 0,
    fontSize: "12px",
    color: "#666"
  },
  item: {
    position: "relative",
    display: "block"
  },
  itemTime: {
    position: "absolute",
    right: 0,
    top: 6,
    fontSize: "12px"
  },
  itemTitle: {
    height: "34px",
    lineHeight: "34px",
    fontSize: "13px"
  },
  itemComment: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px"
  },
  commentTitle: {
    height: "28px",
    lineHeight: "28px",
    fontSize: "13px"
  },
  commentTime: {
    fontSize: "12px"
  },
  commentNum: {
    position: "absolute",
    right: 0,
    top: 6,
    width: "24px",
    height: "24px",
    lineHeight: "24px",
    fontSize: "12px",
    textAlign: "center",
    borderRadius: "50px",
    background: "#FF2851",
    color: "#fff"
  }
};
