import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button, Dropdown, message, Space, Tabs } from 'antd';
import ReactDOM from 'react-dom';
import Image from "./img.jpg.jpg";
import {
  HomeOutlined,
  DownOutlined,
  QuestionCircleOutlined,
  BellOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './App.css'
import { SpaceContext } from "antd/lib/space";
const { TabPane } = Tabs;
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
//菜单
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" >
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" >
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" >
      3rd menu item
    </Menu.Item>
  </Menu>
);
function callback(key) {
  console.log(key);
}
function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

class App extends Component {
  state = {
    current: 'mail',
  };

  render() {
    const { current } = this.state;
    return (
      <div>
        <Layout>
          <Header className="Head">

            <div className="box">

              <img src={Image} alt="" className="Image" />
              <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                <SubMenu key="SubMenu" title="搭配管理" className="SubMenu">

                  <Menu.ItemGroup title={<>
                    < HomeOutlined />
                    <span>页面管理</span>
                  </>} className="item" >
                    <Menu.Item key="setting:2">页面列表</Menu.Item>
                    <Menu.Item key="setting:3">新建页面</Menu.Item>
                    <Menu.Item key="setting:4">楼层卡片</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title={<>
                    <HomeOutlined />
                    <span>卡片管理</span></>} className="item">
                    <Menu.Item key="setting:5">卡片列表</Menu.Item>
                    <Menu.Item key="setting:6">新建卡片</Menu.Item>
                    <Menu.Item key="setting:6">模板列表</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="SubMenu1" title="投放管理" className="SubMenu">
                  <Menu.ItemGroup title="页面管理" className="item">
                    <Menu.Item key="setting:21">页面列表</Menu.Item>
                    <Menu.Item key="setting:31">新建页面</Menu.Item>
                    <Menu.Item key="setting:41">楼层卡片</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="卡片管理" className="item">
                    <Menu.Item key="setting:51">卡片列表</Menu.Item>
                    <Menu.Item key="setting:61">新建卡片</Menu.Item>
                    <Menu.Item key="setting:64">模板列表</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="SubMenu2" title="数据洞察" className="SubMenu">
                  <Menu.ItemGroup title="页面管理" className="item">
                    <Menu.Item key="setting:28">页面列表</Menu.Item>
                    <Menu.Item key="setting:38">新建页面</Menu.Item>
                    <Menu.Item key="setting:48">楼层卡片</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="卡片管理" className="item">
                    <Menu.Item key="setting:58">卡片列表</Menu.Item>
                    <Menu.Item key="setting:68">新建卡片</Menu.Item>
                    <Menu.Item key="setting:68">模板列表</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="SubMenu3" title="服务&工具" className="SubMenu">
                  <Menu.ItemGroup title="页面管理" className="item">
                    <Menu.Item key="setting:223">页面列表</Menu.Item>
                    <Menu.Item key="setting:323">新建页面</Menu.Item>
                    <Menu.Item key="setting:423">楼层卡片</Menu.Item>
                  </Menu.ItemGroup>
                  <Menu.ItemGroup title="卡片管理" className="item">
                    <Menu.Item key="setting:5232">卡片列表</Menu.Item>
                    <Menu.Item key="setting:62323">新建卡片</Menu.Item>
                    <Menu.Item key="setting:62323">模板列表</Menu.Item>
                  </Menu.ItemGroup>
                </SubMenu>
              </Menu>

            </div>
            <div >

              <Space wrap>
                <Button style={{ color: "#808080" }}>切换运营视角</Button>
                <Dropdown overlay={menu}>
                  <Button className="btn">
                    财富/余额宝 <DownOutlined />
                  </Button>
                </Dropdown>
                <QuestionCircleOutlined />
                <BellOutlined />
              </Space>
            </div>
          </Header>

          <Content className="site-layout"  style={{height:1000}}>
            <div className="layout">
              <div className="parent">
                <p style={{ color: "white", fontSize: 35 }}>数字金融用户增长平台</p>
                <p style={{ color: "white", fontSize: 18, padding: "0 0 15px" }}>用户理解·极速实验·数据分析</p>
                <Button type="primary">开始使用</Button>
              </div>

            </div>
            <div >
              <div className="business" >
                <h1>业务接入概况</h1>
                <div>
                  {/* align-items: center;
    justify-content: center;
    display: flex; */}
                <Tabs onChange={callback} >
                  <TabPane tab="所有" key="1">
                
                  </TabPane>
                  <TabPane tab="财富" key="2" >
                   <div >
                     <p>
                       组件数量
                     </p>
                     <span>375</span>
                   </div>
                   <div>
                   <p>
                      场景数量
                     </p>
                     <span>441</span>
                   </div>
                   <div>
                   <p>
                       策略数量
                     </p>
                     <span>1437</span>
                   </div>
                   <div>
                   <p>
                      实验数量
                     </p>
                     <span>1630</span>
                   </div>
                  </TabPane>
                  <TabPane tab="平台" key="3">
                 
                  </TabPane>
                  <TabPane tab="芝麻 " key="4">
                  
                  </TabPane>
                  <TabPane tab="保险 " key="5">
                
                  </TabPane>
                  <TabPane tab="消金 " key="6">
                   
                  </TabPane>
                  <TabPane tab="网商 " key="7">
                  
                  </TabPane>
                </Tabs>
                
                </div>
              
              </div>

            </div>
          </Content>
          <Footer style={{ textAlign: 'center' ,color:"#808080"}}>蚂蚁数据金融体验技术部-DFX</Footer>
        </Layout>
      </div>

    )
  }
}
export default App