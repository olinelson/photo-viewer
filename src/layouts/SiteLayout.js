import React from 'react'
import { Layout, Button, Menu } from 'antd'
import { Link, useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { SettingOutlined, ReloadOutlined } from '@ant-design/icons'

const { Header, Content } = Layout

const Logo = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2.5rem;
`

const StyledHeader = styled(Header)`
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  grid-gap: 1rem;
  align-items: center;
  padding: 0 1.5rem 5rem 1.5rem;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`

const StyledContent = styled(Content)`
  padding: 1.5rem;
  background-color: white;
`

export default props => {
  const location = useLocation()
  const history = useHistory()

  const { setSettingsDrawerOpen, reload } = props

  const navigateToPage = e => {
    history.push(e.key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledHeader>
        <Menu
          mode='horizontal'
          onClick={navigateToPage}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key='/'>
            <Logo>Foto.</Logo>
          </Menu.Item>
          <Menu.Item key='/about'>About</Menu.Item>
        </Menu>

        <div />

        <Button onClick={reload} shape='circle' icon={<ReloadOutlined />} />
        <Button
          onClick={() => setSettingsDrawerOpen(true)}
          shape='circle'
          icon={<SettingOutlined />}
        />
      </StyledHeader>
      <Layout>
        <StyledContent>{props.children}</StyledContent>
      </Layout>
    </Layout>
  )
}
