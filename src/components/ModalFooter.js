import React from 'react'
import styled from 'styled-components'
import { InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import { Avatar, Button } from 'antd'

const ModalFooter = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const AvatarContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  grid-gap: 0.25rem;
  h4 {
    margin: none;
  }
`

const Description = styled.p`
  text-align: left;
`

export default ({ selectedPhoto }) => {
  return (
    <ModalFooter>
      <AvatarContainer>
        <Avatar size={40} src={selectedPhoto?.user?.profile_image?.small} />
        <h4>{selectedPhoto?.user?.username}</h4>
        <div>
          {selectedPhoto?.user?.twitter_username ? (
            <Button
              type='link'
              href={`https://twitter.com/${selectedPhoto?.user?.twitter_username}`}
              target='_blank'
              icon={<TwitterOutlined />}
            ></Button>
          ) : null}
          {selectedPhoto?.user?.instagram_username ? (
            <Button
              type='link'
              href={`https://www.instagram.com/${selectedPhoto?.user?.twitter_username}`}
              target='_blank'
              icon={<InstagramOutlined />}
            ></Button>
          ) : null}
        </div>
      </AvatarContainer>
      <Description>{selectedPhoto.description}</Description>
    </ModalFooter>
  )
}
