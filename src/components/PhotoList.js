import React from 'react'
import styled from 'styled-components'
import FadeIn from '../components/FadeIn'
import { List, Image } from 'antd'
import PhotoDetails from './PhotoDetails'

const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
`

export default ({ photos, setSelectedPhoto, size }) => {
  return (
    <List
      bordered={false}
      dataSource={photos}
      renderItem={p => (
        <FadeIn>
          <List.Item>
            <ListItemContainer>
              <Image
                src={p.urls.regular}
                alt={p.alt_description}
                width={`${size}rem`}
              />
              <PhotoDetails listView selectedPhoto={p} />
            </ListItemContainer>
          </List.Item>
        </FadeIn>
      )}
    />
  )
}
