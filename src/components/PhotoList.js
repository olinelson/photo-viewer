import React from 'react'
import styled from 'styled-components'
import FadeIn from '../components/FadeIn'
import { List, Image } from 'antd'
import PhotoDetails from './PhotoDetails'
import ReactLazyLoad from 'react-lazy-load'

const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 30vw 1fr;
  width: 100%;
`

export default ({ photos, setSelectedPhoto, size }) => {
  return (
    <List
      bordered={false}
      dataSource={photos}
      renderItem={p => (
        <ReactLazyLoad debounce={false} offsetVertical={600}>
          <FadeIn>
            <List.Item>
              <ListItemContainer>
                <Image
                  src={p.urls.regular}
                  alt={p.alt_description}
                  width='100%'
                  // width={`${size}rem`}
                />
                <PhotoDetails listView selectedPhoto={p} />
              </ListItemContainer>
            </List.Item>
          </FadeIn>
        </ReactLazyLoad>
      )}
    />
  )
}
