import React from 'react'
import { Modal, Image } from 'antd'
import { Blurhash } from 'react-blurhash'
import PhotoDetails from './PhotoDetails'

export default ({ selectedPhoto, setSelectedPhoto }) => {
  return (
    <Modal
      visible={selectedPhoto.id}
      onCancel={() => setSelectedPhoto({})}
      destroyOnClose
      centered
      bodyStyle={{ padding: 0 }}
      footer={<PhotoDetails selectedPhoto={selectedPhoto} />}
    >
      <Image
        src={selectedPhoto?.urls?.full}
        alt={selectedPhoto?.alt_description}
        height='100%'
        placeholder={
          selectedPhoto?.blur_hash ? (
            <Blurhash
              hash={selectedPhoto.blur_hash}
              width={'100%'}
              height={'100%'}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          ) : (
            <Image src={selectedPhoto?.urls?.small} />
          )
        }
      />
    </Modal>
  )
}
