import React from 'react'
import { Modal, Image } from 'antd'
import { Blurhash } from 'react-blurhash'
import ModalFooter from './ModalFooter'
export default ({ selectedImage, setSelectedImage }) => {
  return (
    <Modal
      visible={selectedImage.id}
      onCancel={() => setSelectedImage({})}
      destroyOnClose
      footer={null}
      bodyStyle={{ padding: 0 }}
      footer={<ModalFooter selectedImage={selectedImage} />}
    >
      <Image
        src={selectedImage?.urls?.full}
        alt={selectedImage?.alt_description}
        placeholder={
          <Blurhash
            hash={selectedImage?.blur_hash}
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
