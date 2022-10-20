import React from 'react'
import styled from 'styled-components';
import Link from 'next/Link'

const ContentStyle = styled.section`
  text-align: center;
  color: #4C4C51;
  font-size: 22px;
  margin: 0 5em;
  padding: 2em 0;
`

const Content = () => {
  return (
    <ContentStyle>
      <h2>Ready to have your cake and eat it too?</h2>
      <p>Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
    </ContentStyle>
  )
}

export default Content