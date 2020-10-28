import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`

export default () => {
  return (
    <Footer>
      <Spin />
    </Footer>
  )
}
