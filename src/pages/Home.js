import React, { useEffect, useState } from 'react'
import firebase from 'firebase'

import { Image } from 'antd'

import Unsplash, { toJson } from 'unsplash-js'
import styled from 'styled-components'

export default () => {
  const [firebaseApp] = firebase.apps
  const { unsplashAccessKey, unsplashSecretKey } = firebaseApp.options
  const [photos, setPhotos] = useState([])

  const unsplash = new Unsplash({ accessKey: unsplashAccessKey })

  const PhotoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 15rem);
    /* grid-template-rows: repeat(auto-fill, 15rem); */
    grid-gap: 1rem;
    justify-content: center;
  `
  const PhotoTile = styled.div`
    width: 15rem;
    height: 15rem;
    background-image: url(${props => props.src});
  `

  const getPhotos = async () => {
    const res = await unsplash.search.photos('landscape')
    const json = await toJson(res)
    setPhotos(json.results)
    console.log(json.results)
  }

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <>
      <PhotoGrid>
        {photos.map(p => (
          <PhotoTile key={p.id} src={p.urls.small} />
        ))}
      </PhotoGrid>
    </>
  )
}
