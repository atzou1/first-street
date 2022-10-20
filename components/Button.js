import React from 'react'
import styled from 'styled-components'
import Link from 'next/Link'

const ButtonStyle = styled.button`
    background: #EE2D1C;
    min-height: 55px;
    font-size: 22px;
    text-align: center;
    color: #FFF;
    border-radius: 5em;
    border: none;
    padding: 1em;
`

const Button = () => {
  return (
    <ButtonStyle>
      <Link href="/">
      Do something awesome
      </Link> 
    </ButtonStyle>
  )
}

export default Button