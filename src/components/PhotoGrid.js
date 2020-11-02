import React from 'react'
import styled from 'styled-components'
import FadeIn from '../components/FadeIn'
import PhotoTile from '../components/PhotoTile'

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${props => props.size}rem);
  grid-auto-rows: ${props => props.size}rem;
  grid-gap: 1rem;
  justify-content: center;
`

export default ({ photos, setSelectedPhoto, size }) => {
  return (
    <PhotoGrid size={size}>
      {photos.map(p => (
        <FadeIn
          isPortrait={p.height > p.width}
          key={p.id}
          duration='0.8s'
          delay='0.2s'
        >
          <PhotoTile
            alt={p.alt_description}
            hoverable
            bordered={false}
            onClick={() => setSelectedPhoto(p)}
            src={p.urls?.regular}
          />
        </FadeIn>
      ))}
    </PhotoGrid>
  )
}
