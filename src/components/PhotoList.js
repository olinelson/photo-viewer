import React from 'react'
import styled from 'styled-components'
import FadeIn from '../components/FadeIn'
import PhotoTile from '../components/PhotoTile'
import { List, Image } from 'antd'
import ModalFooter from './ModalFooter'

const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
`

export default ({ photos, setSelectedPhoto, size }) => {
  return (
    <List
      bordered
      dataSource={photos}
      renderItem={p => (
        <List.Item>
          <ListItemContainer>
            <Image src={p.urls.regular} width={`${size}rem`} />
            <ModalFooter listView selectedPhoto={p} />
          </ListItemContainer>
          {/* <h1>{p.description}</h1> */}
        </List.Item>
      )}
    />
  )
}
