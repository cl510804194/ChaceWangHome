import React, { Component } from "react";
import ResourceTitle from "../../../../components/CostomTitle/CostomTitle.jsx";
import ResoureType from "./components/ResourceType";
import ResouceItem from "./components/ResourceItem.jsx";
import TIAF from "../../../../images/projecttypeimg/TIAF.png";
import ExAnteFunding from "../../../../images/projecttypeimg/ExAnteFunding.png";
import Agency from "../../../../images/projecttypeimg/Agency.png";
import IPR from "../../../../images/projecttypeimg/IPR.png";
import RisingEconomy from "../../../../images/projecttypeimg/RisingEconomy.png";
import Attract from "../../../../images/projecttypeimg/Attract.png";
import SATA from "../../../../images/projecttypeimg/SATA.png";
import InnovativePlatform from "../../../../images/projecttypeimg/InnovativePlatform.png";

import "../../../../components/CostomStyles.scss";
import "./ResourceStyles.scss";
export default class Resource extends Component {
  static displayName = "Resource";

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      imgList: [
        {
          id: 0,
          name: "电子信息",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖1"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心1"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询1"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖1"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        }
      ],

      title: "热门项目",
      type: [
        {
          id: 0,
          name: "电子信息",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖1"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心1"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询1"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖1"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 1,
          name: "互联网",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖22"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心22"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询22"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 2,
          name: "新材料",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖3"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心3"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 3,
          name: "节能环保",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖4"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心4"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 4,
          name: "生物医药",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖5"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 5,
          name: "机器人",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖6"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 6,
          name: "高端装备",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖7"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        },
        {
          id: 7,
          name: "海洋产品",
          TypeImg: [
            {
              id: 1,
              url: TIAF,
              name: "科技进步奖8"
            },
            {
              id: 2,
              url: ExAnteFunding,
              name: "企业技术认定中心"
            },
            {
              id: 3,
              url: Agency,
              name: "企业管理咨询"
            },
            {
              id: 4,
              url: IPR,
              name: "深圳市专利奖"
            },
            {
              id: 5,
              url: RisingEconomy,
              name: "深圳市产业发展"
            },
            {
              id: 6,
              url: Attract,
              name: "留学人员来深创业前期费用补贴"
            },
            {
              id: 7,
              url: SATA,
              name: "技术发明奖"
            },
            {
              id: 8,
              url: InnovativePlatform,
              name: "国家和省计划项目配套"
            }
          ]
        }
      ],
      TypeImg: [
        {
          id: 1,
          url: TIAF,
          name: "科技进步奖"
        },
        {
          id: 2,
          url: ExAnteFunding,
          name: "企业技术认定中心"
        },
        {
          id: 3,
          url: Agency,
          name: "企业管理咨询"
        },
        {
          id: 4,
          url: IPR,
          name: "深圳市专利奖"
        },
        {
          id: 5,
          url: RisingEconomy,
          name: "深圳市产业发展"
        },
        {
          id: 6,
          url: Attract,
          name: "留学人员来深创业前期费用补贴"
        },
        {
          id: 7,
          url: SATA,
          name: "技术发明奖"
        },
        {
          id: 8,
          url: InnovativePlatform,
          name: "国家和省计划项目配套"
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
        this.changeImg();
      }
    );
  }
  changeImg() {
    let getList = this.state.type.filter(
      item => item.id === this.state.currentIndex
    );

    this.setState({
      imgList: [...getList]
    });
  }

  getResoureType() {
    return this.state.type.map((item, index) => {
      return (
        <ResoureType
          currentIndex={this.state.currentIndex}
          activeClass={this.activeClass.bind(this, index)}
          index={index}
          className="resource-type"
          type={item.name}
          key={item.id}
        />
      );
    });
  }
  getResourceTypeItems() {
    let p = [...this.state.imgList];
    let tyImgList = p[0].TypeImg;
    console.log(tyImgList);
    return tyImgList.map((item, index) => {
      return <ResouceItem src={item.url} key={item.id} name={item.name} />;
    });
  }
  render() {
    return (
      <ul style={styles.container}>
        <ResourceTitle title={this.state.title} />
        <ul className="resource-wrapper">{this.getResoureType()}</ul>
        <div className="carousel">
          <ul className="carousel-content">{this.getResourceTypeItems()}</ul>
        </div>
      </ul>
    );
  }
}

const styles = {
  container: {
    width: "1200px",
    padding: "80px 0",
    margin: "0 auto",
    textAlign: "center"
  }
};
