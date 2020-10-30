import React, { useEffect } from 'react'
import PhotoGrid from '../components/PhotoGrid'
import LoadingFooter from '../components/LoadingFooter'
import SelectedPhotoModal from '../components/SelectedPhotoModal'
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

  useEffect(() => {
    const onScroll = function () {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
      const areMorePages = totalPages.current > page

      if (atBottom && !loading && areMorePages) {
        setPage(page + 1)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [page, loading, photoSize, totalPages, setPage])

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

      <LoadingFooter {...props} />

      <SelectedPhotoModal
        selectedPhoto={selectedPhoto}
        setSelectedPhoto={setSelectedPhoto}
      />
    </>
  )
}
