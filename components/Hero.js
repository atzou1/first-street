import React from 'react'
import styled from 'styled-components';
import Link from 'next/Link'
import Button from './button'

const AlignHero = styled.div`
  justify-items: center;
  align-items: center;
  color: white;
  text-align: center;
  padding-top: 2em;
`
const Heading1 = styled.h1`
  font-size: 48px;
  line-height: 48px;
`

const Paragraph = styled.p`
  font-size: 22px;
  line-height: 28px;
  margin:0 18em 1em;
`

const Hero = () => {
  return (
    <>
    <AlignHero>
      <Heading1>The world's greatest fake site</Heading1>
      <Paragraph>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</Paragraph>
      <Button />
    </AlignHero>
    </>
  )
}

export default Hero