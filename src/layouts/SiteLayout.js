import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  HomeOutlined,
  FileImageOutlined,
  ReloadOutlined
} from '@ant-design/icons'

const { Header, Content, Sider } = Layout

const StyledHeader = styled(Header)`
  background-color: white;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 1.5rem;
  justify-content: space-between;
`
const SiteTitle = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0;
`

const StyledSider = styled(Sider)`
  .ant-layout-sider-trigger {
    background-color: rgba(0, 0, 0, 0);
  }
`
const StyledContent = styled(Content)`
  padding: 1.5rem;
`

export default props => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  const theme = 'light'

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledHeader>
        <SiteTitle>Photo viewer</SiteTitle>
        <Button type='primary' shape='circle' icon={<ReloadOutlined />} />
      </StyledHeader>
      <Layout>
        <StyledSider
          width={200}
          collapsed={sideBarCollapsed}
          collapsible
          onCollapse={setSideBarCollapsed}
          theme={theme}
        >
          <Menu
            theme={theme}
            mode='inline'
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key='2' icon={<FileImageOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key='1' icon={<HomeOutlined />}>
              <Link to='/about'>About</Link>
            </Menu.Item>
          </Menu>
        </StyledSider>
        <Layout>
          <StyledContent>{props.children}</StyledContent>
        </Layout>
      </Layout>
    </Layout>
  )
}
