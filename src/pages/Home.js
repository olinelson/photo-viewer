import React, { useEffect, useState, useRef } from 'react'
import firebase from 'firebase'

import Unsplash, { toJson } from 'unsplash-js'
import FadeIn from '../components/FadeIn'
import PhotoGrid from '../components/PhotoGrid'
import PhotoTile from '../components/PhotoTile'
import LoadingFooter from '../components/LoadingFooter'
import SelectedImageModal from '../components/SelectedPhotoModal'

export default () => {
  const [firebaseApp] = firebase.apps
  const { unsplashAccessKey, unsplashSecretKey } = firebaseApp.options
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState({})
  const seenIds = useRef([])
  const total_pages = useRef(1)

  const unsplash = new Unsplash({ accessKey: unsplashAccessKey })

  const getPhotos = async () => {
    setLoading(true)
    const res = await unsplash.search.photos('landscape', page, 20)
    const json = await toJson(res)

    const newPhotos = json.results.filter(p => !seenIds.current.includes(p.id))
    seenIds.current = newPhotos.map(r => r.id)

    setPhotos([...photos, ...newPhotos])
    setLoading(false)
  }

  useEffect(() => {
    getPhotos()
  }, [page])

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
      <PhotoGrid photos={photos} setSelectedPhoto={setSelectedPhoto} />
      {/* <PhotoGrid size={20}>
        {photos.map(p => (
          <FadeIn
            isPortrait={p.height > p.width}
            key={p.id}
            duration='0.8s'
            delay='0.2s'
          >
            <PhotoTile
              hoverable
              bordered={true}
              onClick={() => setSelectedImage(p)}
              src={p.urls?.regular}
            />
          </FadeIn>
        ))}
        {console.log(photos)}
      </PhotoGrid> */}

      {loading ? <LoadingFooter /> : null}

      <SelectedImageModal
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </>
  )
}
