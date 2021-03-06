import React from 'react'
import styled from 'styled-components'
import { Stack, Row } from './commons'
import { black, blue, white, yellow } from './variables'

const Title = styled.h1`
  font-size: 2rem;
  color: ${white};
  margin-bottom: 2rem;
  margin-top: 2rem;
  text-align: center;
`

const SandwichGeneratorApp = styled.main`
  margin: 0;
  padding: 0;
`

const GoogleMaps: React.FC<ResultProps> = (props) => {
  return (
    <iframe
      title='map'
      width='100%'
      height='450'
      frameBorder='0'
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCc0e61vLV_PCtgOmm8eM0FUYigahvqMzU
    &q=${props.place.name.split(' ').join('+')}${props.place.address
        .split(' ')
        .join('+')}`}
      allowFullScreen
    ></iframe>
  )
}

type Place = {
  name: string
  rating: string
  address: string
}

interface ResultProps {
  place: Place
}

const Name = styled.h2`
  color: ${white};
`
const Score = styled.h3`
  color: ${yellow};
  margin-top: 0.5rem;
`
const Location = styled.h4`
  color: ${white};
  margin-top: 0.5rem;
`
const A = styled.a`
  margin-top: 0.5rem;
  color: ${blue};
`
const Result: React.FC<ResultProps> = (props) => {
  const link = `http://www.google.com/search?q=${props.place.name
    .split(' ')
    .join('+')}`
  return (
    <Row>
      <Stack>
        <Name>{props.place.name}</Name>
        <Score>{props.place.rating}</Score>
        <Location>{props.place.address}</Location>
        <A href={link}>Link</A>
      </Stack>
    </Row>
  )
}

export { Title, SandwichGeneratorApp, GoogleMaps, Result }
