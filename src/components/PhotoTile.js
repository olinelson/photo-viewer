import styled from 'styled-components'
import { Card } from 'antd'

const PhotoTile = styled(Card)`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export default PhotoTile
