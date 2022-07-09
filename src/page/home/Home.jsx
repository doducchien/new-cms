import { AppstoreOutlined, BarChartOutlined, CloudOutlined, ShopOutlined, SnippetsOutlined, TeamOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Col, Layout, Menu, Row, } from 'antd'
import React from 'react'
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import BaseHeader from '../../component/BaseHeader';
import ChangePassword from '../profile/ChangePassword';
import Profile from '../profile/Profile';
import ListUser from './user/ListUser';

const { Header, Content, Footer, Sider } = Layout;


const items = [
  {
    icon: TeamOutlined,
    title: "User management",
    path: '/user-management'
  },
  {
    icon: CloudOutlined,
    title: "Class config",
    path: '/class-config'

  },
  {
    icon: AppstoreOutlined,
    title: "Topic config",
    path: '/topic-config'

  },
  {
    icon: SnippetsOutlined,
    title: 'Website config',
    path: '/website-config',


  },
  {
    icon: ShopOutlined,
    title: "Paypal config",
  },

].map((item, index) => ({
  key: String(index + 1),
  icon: React.createElement(item.icon),
  label: <Link to={item.path}>{item.title}</Link>
}));
export default function Home() {
  return (
    <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className='mg-0 txt-center'>
        <img src="https://prontograde.com/images/logo.png" alt="" height={50} className='mg-0'/>
        <div className='cl-white fs-1rem mg-0'>ADMIN</div>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} className='mg-0' />
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >

      <BaseHeader/>
      <div className='h-100vh-ne-60 ov-fl-auto pd-1rem'>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/user-management'/>

            </Route>
            <Route path='/user-management'>
                <ListUser/>
            </Route>
            <Route path='/admin/profile'>
                <Profile/>
            </Route>
            <Route path='/admin/change-password'>
                <ChangePassword/>
            </Route>
          </Switch>
      </div>
      
    </Layout>
  </Layout>
  )
}
