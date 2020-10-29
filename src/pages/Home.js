import React, { useEffect, useState, useRef } from 'react'
import firebase from 'firebase'

import Unsplash, { toJson } from 'unsplash-js'
import PhotoGrid from '../components/PhotoGrid'
import LoadingFooter from '../components/LoadingFooter'
import SelectedImageModal from '../components/SelectedPhotoModal'
import { message } from 'antd'
import PhotoList from '../components/PhotoList'

export default props => {
  const {
    photos,
    settings,
    setSelectedPhoto,
    selectedPhoto,
    loading,
    page,
    setPage,
    totalPages
  } = props
  const { photoSize, isGrid } = settings

  const onScroll = function (ev) {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight - 100 &&
      !loading &&
      totalPages.current > page
    ) {
      setPage(page + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {isGrid ? (
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
