import React from 'react'
import { Modal, Image } from 'antd'
import { Blurhash } from 'react-blurhash'
import ModalFooter from './ModalFooter'
export default ({ selectedPhoto, setSelectedPhoto }) => {
  return (
    <Modal
      visible={selectedPhoto.id}
      onCancel={() => setSelectedPhoto({})}
      destroyOnClose
      footer={null}
      bodyStyle={{ padding: 0 }}
      footer={<ModalFooter selectedPhoto={selectedPhoto} />}
    >
      <Image
        src={selectedPhoto?.urls?.full}
        alt={selectedPhoto?.alt_description}
        placeholder={
          <Blurhash
            hash={selectedPhoto?.blur_hash}
            width={'100%'}
            height={'100%'}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        }
      />
    </Modal>
  )
}
