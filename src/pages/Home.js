import React, { useEffect, useState } from 'react'
import firebase from 'firebase'

import { Image } from 'antd'

import Unsplash, { toJson } from 'unsplash-js'
import styled from 'styled-components'
import uid from 'uid'
import InfiniteScroll from 'react-infinite-scroller'

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 15rem);
  grid-gap: 1rem;
  justify-content: center;
`
const PhotoTile = styled.div`
  width: 15rem;
  height: 15rem;
  background-image: url(${props => props.src});
`

export default () => {
  const [firebaseApp] = firebase.apps
  const { unsplashAccessKey, unsplashSecretKey } = firebaseApp.options
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const unsplash = new Unsplash({ accessKey: unsplashAccessKey })

  const getPhotos = async () => {
    setLoading(true)
    const res = await unsplash.search.photos('landscape', page)
    const json = await toJson(res)
    console.log(page, json)
    setPhotos([...photos, ...json.results])
    setLoading(false)
  }

  useEffect(() => {
    getPhotos()
  }, [page])

  window.onscroll = function (ev) {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 50 &&
      !loading
    ) {
      // you're at the bottom of the page
      console.log('on the bottom')
      setPage(page + 1)
    }
  }

  return (
    <>
      <PhotoGrid>
        {photos.map(p => (
          <PhotoTile key={uid()} src={p.urls?.small} />
        ))}
        <button onClick={() => setPage(page + 1)}>More</button>
      </PhotoGrid>
    </>
  )
}
