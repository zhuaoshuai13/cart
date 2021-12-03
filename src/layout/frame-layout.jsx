import { Layout, Menu, Breadcrumb } from 'antd';
import React, { useState, useCallback } from 'react'
import {useHistory} from 'react-router-dom'
import {
  ShoppingCartOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import './style.less';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import renderRouter from '../utils/router-render'
import route from '../routers'
function FrameLayout() {
  const history = useHistory()
  // 侧边菜单折叠
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = useCallback((collapsed) => setCollapsed(collapsed), []);
  const handleNav = useCallback(({key}) => {
    history.push(key)
  }, [])
  return (
    <Layout style={{ minHeight: '100vh'}} className='frame-layout'>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} >
        <div className="logo" >销售系统</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={history.location.pathname}
          mode="inline"
          onClick={handleNav}
        >
          <Menu.Item key="/list" icon={<BarsOutlined />}>
            商品列表
          </Menu.Item>
          <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
            购物车
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderRouter(route)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>胖玻璃球责任有限公司</Footer>
      </Layout>
    </Layout>
  );
}

export default FrameLayout
