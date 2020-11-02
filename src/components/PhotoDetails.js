import React from 'react'
import styled from 'styled-components'
import {
  InstagramOutlined,
  TwitterOutlined,
  DownloadOutlined
} from '@ant-design/icons'
import { Avatar, Button } from 'antd'

const PhotoDetails = styled.div`
  padding: ${props => (props.listView ? '0 1rem' : null)};
`
const AvatarContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  grid-gap: 0.25rem;
  h4 {
    margin: none;
  }
  width: 100%;
`
const SocialButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  justify-self: end;
`

const Description = styled.p`
  text-align: left;
  margin-top: 1rem;
`

export default ({ selectedPhoto, listView }) => {
  console.log(selectedPhoto)
  return (
    <PhotoDetails listView>
      <AvatarContainer listView>
        <Avatar size={40} src={selectedPhoto?.user?.profile_image?.small} />
        <h4>{selectedPhoto?.user?.username}</h4>
        <SocialButtons>
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
          {selectedPhoto?.links?.download ? (
            <a href={selectedPhoto?.links?.download} download target='_blank'>
              <DownloadOutlined />
            </a>
          ) : null}
        </SocialButtons>
      </AvatarContainer>
      <Description>{selectedPhoto.description}</Description>
    </PhotoDetails>
  )
}
