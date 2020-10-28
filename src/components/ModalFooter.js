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

export default ({ selectedImage }) => {
  return (
    <ModalFooter>
      <AvatarContainer>
        <Avatar size={40} src={selectedImage?.user?.profile_image?.small} />
        <h4>{selectedImage?.user?.username}</h4>
        <div>
          {selectedImage?.user?.twitter_username ? (
            <Button
              type='link'
              href={`https://twitter.com/${selectedImage?.user?.twitter_username}`}
              target='_blank'
              icon={<TwitterOutlined />}
            ></Button>
          ) : null}
          {selectedImage?.user?.instagram_username ? (
            <Button
              type='link'
              href={`https://www.instagram.com/${selectedImage?.user?.twitter_username}`}
              target='_blank'
              icon={<InstagramOutlined />}
            ></Button>
          ) : null}
        </div>
      </AvatarContainer>
      <Description>{selectedImage.description}</Description>
    </ModalFooter>
  )
}
