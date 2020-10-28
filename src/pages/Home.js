import React, { useEffect, useState, useRef } from 'react'
import firebase from 'firebase'

import Unsplash, { toJson } from 'unsplash-js'
import PhotoGrid from '../components/PhotoGrid'
import LoadingFooter from '../components/LoadingFooter'
import SelectedImageModal from '../components/SelectedPhotoModal'
import { message } from 'antd'
import PhotoList from '../components/PhotoList'

export default ({ settings }) => {
  const [firebaseApp] = firebase.apps
  const { unsplashAccessKey, unsplashSecretKey } = firebaseApp.options
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState({})
  const seenIds = useRef([])
  const total_pages = useRef(1)

  const { pageSize, photoSize, photoView } = settings

  console.log({ settings })

  const unsplash = new Unsplash({ accessKey: unsplashAccessKey })

  const getPhotos = async () => {
    try {
      setLoading(true)
      const res = await unsplash.search.photos('landscape', page, pageSize)

      const json = await toJson(res)

      const newPhotos = json.results.filter(
        p => !seenIds.current.includes(p.id)
      )
      seenIds.current = newPhotos.map(r => r.id)

      setPhotos([...photos, ...newPhotos])
      setLoading(false)
    } catch (error) {
      message.error('Something went wrong...')
      setLoading(false)
    }
  }

  useEffect(() => {
    getPhotos()
  }, [page])

  // to revisit
  window.onscroll = function (ev) {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 &&
      !loading
    ) {
      setPage(page + 1)
    }
  }

  return (
    <>
      {photoView === 'grid' ? (
        <PhotoGrid
          photos={photos}
          size={photoSize}
          setSelectedPhoto={setSelectedPhoto}
        />
      ) : (
        <PhotoList
          photos={photos}
          size={photoSize}
          setSelectedPhoto={setSelectedPhoto}
        />
      )}

      {loading ? <LoadingFooter /> : null}

      <SelectedImageModal
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </>
  )
}
