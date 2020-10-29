import React from 'react'
import { Layout, Button } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SettingOutlined, ReloadOutlined } from '@ant-design/icons'

const { Header, Content } = Layout

const StyledHeader = styled(Header)`
  background-color: white;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0 1.5rem;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`
const SiteTitle = styled(Link)`
  font-size: 2rem;
  margin: 0;
  padding: 0;
`

const StyledContent = styled(Content)`
  padding: 1.5rem;
  background-color: white;
`

export default props => {
  const { setSettingsDrawerOpen, reload } = props

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <StyledHeader>
        <SiteTitle to='/'>Foto.</SiteTitle>
        <Link to='/about'>About</Link>
        <Button
          type='primary'
          onClick={reload}
          shape='circle'
          icon={<ReloadOutlined />}
        />
        <Button
          onClick={() => setSettingsDrawerOpen(true)}
          type='primary'
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
