import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@alifd/next";
const { Item, SubNav } = Nav;
// import styles from "./index.module.scss";
import "./styles.scss";
import logo1 from "../../../../images/chacewang-log1.png";
export default class Header extends Component {
  static displayName = "Header";
  static propTypes = {};
  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          id: 0,
          name: "首页",
          src: "http://www.chacewang.com/"
        },
        {
          id: 1,
          name: "查政策",
          src: "http://www.chacewang.com/"
        },
        {
          id: 2,
          name: "高新服务",
          src: "http://www.chacewang.com/"
        },
        {
          id: 3,
          name: "项目评估",
          src: "http://www.chacewang.com/"
        },
        {
          id: 4,
          name: "专业服务",
          src: "http://www.chacewang.com/"
        },
        {
          id: 5,
          name: "科技资源",
          src: "http://www.chacewang.com/"
        },
        {
          id: 6,
          name: "会员中心",
          src: "http://www.chacewang.com/"
        }
      ]
    };
  }
  getLiItems() {
    return this.state.List.map((value, index) => {
      return (
        <li key={index} className="menu-item">
          <a href={value.src}>{value.name}</a>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="header">
        <div className="content">
          <div className="logo">
            <img width="150px" height="46px" src={logo1} alt="aa" />
          </div>
          <div className="tip">科技产业政策大数据平台</div>
          <div className="city">
            <span>深圳</span>
            <span className="triangle2 " />
          </div>
          <Nav
            className="menu"
            direction="hoz"
            type="normal"
            defaultSelectedKeys={["home"]}
            triggerType="hover"
          >
            <Item key="home" className="menu-item">
              首页
            </Item>
            <SubNav label="查政策" selectable>
              <Item key="policyfind">政策查询</Item>
              <Item key="policymap">政策图谱</Item>
            </SubNav>
            <SubNav label="高新服务" selectable>
              <Item key="highList">高企名单</Item>
              <Item key="mexttwo">分析报告</Item>
              <Item key="mexttwo2">模拟申报</Item>
              <Item key="mexttwo3">页码神器</Item>
              <Item key="mexttwo4">国网入口</Item>
              <Item key="mexttwo5">地方入口</Item>
            </SubNav>
            <SubNav label="项目评估" selectable>
              <Item key="highList">快捷评估</Item>
              <Item key="mexttwo">精细评估</Item>
              <Item key="mexttwo2">项目订阅</Item>
            </SubNav>
            <SubNav label="专业服务" selectable>
              <Item key="highList">知识产权</Item>
              <Item key="mexttwo">审计服务</Item>
              <Item key="mexttwo2">融资服务</Item>
              <Item key="mexttwo2">检验检测</Item>
              <Item key="mexttwo2">成果转移</Item>
              <Item key="mexttwo2">研究开发</Item>
              <Item key="mexttwo2">委托查新</Item>
              <Item key="mexttwo2">政策查询</Item>
              <Item key="mexttwo2">税务筹划</Item>
              <Item key="mexttwo2">法律服务</Item>
              <Item key="mexttwo2">贯标服务</Item>
            </SubNav>

            <SubNav label="科技资源" selectable>
              <Item key="highList">高校合作</Item>
              <Item key="mexttwo">众创空间</Item>
              <Item key="mexttwo2">院士资源</Item>
              <Item key="mexttwo2">工业园区</Item>
              <Item key="mexttwo2">精准医疗</Item>
              <Item key="mexttwo2">设备共享</Item>
            </SubNav>
            <Item key="document">会员中心</Item>
          </Nav>
          <div className="user-login">
            <div className="register">免费注册</div>
            <div className="login">登陆</div>
          </div>
        </div>
        {/* <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            LOGO
          </Link>
        </div>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.activeNavItemLink}>
              首页
            </Link>
            <Link to="/" className={styles.navItemLink}>
              更多
            </Link>
          </li>
        </ul> */}
      </div>
    );
  }
}
