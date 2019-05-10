import React, { Component } from "react";
import "./CardItems.scss";
export default class CardItems extends Component {
  static displayName = "CardItems";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.hyThirdPartyWrapper}>
        <div style={styles.hyThirdParty}>
          <div style={styles.thirdPartyDetails}>
            <div className="element-content">
              <div className="element-details">
                <div className="element-details-img" />
                <p className="element-title">专业查询</p>
                <div className="element-substance">
                  <a href="javascript:void(0)">扶贫政策</a>
                  <a href="javascript:void(0)">知识产权</a>
                  <a href="javascript:void(0)">高企名单</a>
                </div>
              </div>

              <div className="element-details">
                <div className="element-details-img" />
                <p className="element-title">高新服务</p>
                <div className="element-substance">
                  <a href="javascript:void(0)">模拟申报</a>
                  <a href="javascript:void(0)">认定自评</a>
                  <a href="javascript:void(0)">自动审查</a>
                </div>
              </div>

              <div className="element-details">
                <div className="element-details-img" />
                <p className="element-title">项目评估</p>
                <div className="element-substance">
                  <a href="javascript:void(0)">快捷评估</a>
                  <a href="javascript:void(0)" style={styles.Detail}>
                    精细评估
                  </a>
                  <a href="javascript:void(0)">项目订阅</a>
                </div>
              </div>

              <div className="element-details">
                <div className="element-details-img" />
                <p className="element-title">专业服务</p>
                <div className="element-substance">
                  <a href="javascript:void(0)">知识产权</a>
                  <a href="javascript:void(0)">审计服务</a>
                  <a href="javascript:void(0)">融资服务</a>
                </div>
              </div>

              <div className="element-details">
                <div className="element-details-img" />
                <p className="element-title">科技资源</p>
                <div className="element-substance">
                  <a href="javascript:void(0)">高校合作</a>
                  <a href="javascript:void(0)">众创空间</a>
                  <a href="javascript:void(0)">工业园区</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  Detail: {
    color: "red"
  },

  hyThirdPartyWrapper: {
    background: "#fff",
    minWidth: "1280px"
  },
  hyThirdParty: {
    paddingTop: "47px",
    paddingBottom: "40px",
    textAlign: "center",
    width: "1200px",
    margin: "0 auto"
  },
  hyThirdPartyTitle: {
    position: "relative",
    fontFamily: "Microsoft YaHei",
    fontSize: "26px",
    lineHeight: "40px",
    color: "#999",
    fontWeight: "400",
    verticalAlign: "middle",
    marginBottom: "40px"
  },
  thirdPartyMore: {
    position: "absolute",
    right: "0",
    top: "12px",
    color: "#108ee9",
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: "400",
    textDecoration: "none"
  },
  thirdPartyDetails: {
    position: "relative",
    height: "400px",
    margin: "0",
    padding: "0"
  },
  thirdPartyDetail: {
    zIndex: "0",
    fontSize: "0",
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    display: "block",
    WebkitTransition: "opacity .3s linear",
    transition: "opacity .3s linear"
  },
  thirdPartyDetailItem: {
    display: "inline-block",
    verticalAlign: "top",
    width: "270px",
    height: "400px",
    borderRadius: "2px 2px 0 0",
    margin: "0 20px",
    border: "1px solid #eaeaea",
    boxSizing: "border-box",
    WebkitTransition: "-webkit-transform .2s linear",
    transition: "transform .2s linear,\n-webkit-transform .2s linear"
  },
  thirdPartyDetailItemFirst: {
    marginLeft: "0"
  },
  thirdPartyDetailItemLast: {
    marginRight: "0"
  },
  thirdPartyDetailImg: {
    width: "270px",
    height: "180px",
    borderRadius: "2px 2px 0 0",
    position: "relative",
    left: "-1px",
    border: "0"
  },
  thirdPartyName: {
    marginTop: "20px",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#333",
    fontWeight: "600"
  },
  thirdPartySold: {
    fontSize: "14px",
    color: "#333",
    lineHeight: "20px"
  },
  thirdPartySoldNumber: {
    color: "#108ee9",
    fontWeight: "500"
  },
  thirdPartyDesc: {
    margin: "14px 15px 0",
    color: "#333",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "20px",
    height: "60px"
  },
  thirdPartyLink: {
    marginTop: "15px",
    display: "inline-block",
    padding: "5px 37px",
    fontSize: "14px",
    color: "#108ee9",
    border: "1px solid #108ee9",
    borderRadius: "4px",
    WebkitTransition: "all .2s linear",
    transition: "all .2s linear"
  }
};
