import React from 'react'
import styled from 'styled-components'
import { Button, Spin } from 'antd'

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
`

export default props => {
  const { loading, page, setPage, totalPages } = props

  console.log(page, totalPages.current)

  const buttonOrSpinner = () => {
    if (loading) return <Spin />
    else if (totalPages.current > page) {
      return <Button onClick={() => setPage(page + 1)}>Load more</Button>
    }
  }

  return (
    <Footer>
      {buttonOrSpinner()}
      {/* {loading ? <Spin /> : null}
      {totalPages.current > page ? (
        <Button onClick={() => setPage(page + 1)}>Load more</Button>
      ) : null} */}
    </Footer>
  )
}
