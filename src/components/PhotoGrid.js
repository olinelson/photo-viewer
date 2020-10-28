import styled from 'styled-components'

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${props => props.size}rem);
  grid-auto-rows: ${props => props.size}rem;
  grid-gap: 1rem;
  justify-content: center;
`

export default PhotoGrid
