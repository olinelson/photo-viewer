import React from 'react'
import styled from 'styled-components'
import { Image } from 'antd'
import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'
import InstagramEmbed from '../components/InstagramEmbed'

const BioContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(20rem, 1fr) 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export default () => {
  return (
    <>
      {/* <Image src='https://olinelson.com/images/headshot.jpg' /> */}
      <BioContainer>
        <Image src='https://olinelson.com/images/headshot.jpg' />
        <div>
          <Title>Oli Nelson</Title>
          <Paragraph>
            Full stack web developer with a passion for innovation and
            efficiency. With experience in Ruby, Javascript, React, Vue and a
            background in music, I discovered web development through intense
            personal curiosity that then motivated me to seek accredited
            training with the Flatiron school. I bring strong skills in project
            management, problem solving and creativity that help innovative
            companies to create efficient and effective products. As an
            established musician, I am very comfortable as a self-directed
            learner and I understand the long term benefits of practice,
            patience and persistence when building skills and developing unique
            products.
          </Paragraph>
          <Paragraph style={{ gridColumn: 'span 2' }}>
            Here is a show reel of my most recent album. Music written by my
            beautiful wife Emma Stephenson.
          </Paragraph>
        </div>
      </BioContainer>
      <InstagramEmbed />
    </>
  )
}
