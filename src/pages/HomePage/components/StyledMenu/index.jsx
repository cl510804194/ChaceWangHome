import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Icon, Button } from "@alifd/next";
import StyledMenu, {
  Item as MenuItem,
  SubMenu,
  ItemGroup as MenuItemGroup
} from "@icedesign/styled-menu";
import "./styledMenuStyles.scss";
export default class Sider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: true,
      currentSelectedKey: ""
    };
  }

  toggleCollapse = () => {
    this.setState({
      collapse: !this.state.collapse
    });
  };

  handleSelect = info => {
    console.log(info);
    this.setState({
      currentSelectedKey: info.key
    });
  };

  render() {
    return (
      <div className="styledmenu-position">
        <StyledMenu
          style={{ width: 60 }}
          // defaultOpenKeys={['sub1']}
          inlineCollapsed={this.state.collapse}
          theme="light"
          mode="inline"
          onSelect={this.handleSelect}
          selectedKeys={[this.state.currentSelectedKey]}
        >
          <StyledMenu.Item key="1">
            <Icon type="attachment" />
            <span className="ice-menu-collapse-hide">小程序</span>
          </StyledMenu.Item>
          <StyledMenu.Item key="2">
            <Icon type="email" />
            <span className="ice-menu-collapse-hide">app</span>
          </StyledMenu.Item>
          <StyledMenu.Item key="3">
            <Icon type="atm" />
            <span className="ice-menu-collapse-hide">微信</span>
          </StyledMenu.Item>
          <StyledMenu.Item key="4">
            <Icon type="edit" />
            <span className="ice-menu-collapse-hide">需求</span>
          </StyledMenu.Item>
          <StyledMenu.Item key="5">
            <Icon type="ellipsis" />
            <span className="ice-menu-collapse-hide">客服</span>
          </StyledMenu.Item>
        </StyledMenu>
      </div>
    );
  }
}
