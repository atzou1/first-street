import React from 'react'
import styled from 'styled-components';
import Link from 'next/Link'
import Logo from '../assets/logo.png';

//TOP OF FOOTER
const FooterTitle = styled.h4`
  color: #EE2D1C;
`
const FooterList = styled.li`
  color: #88939E;
`
const FooterUl = styled.ul`
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  list-style: none;
  float:left;
`
//BOTTOM OF FOOTER
const FooterBottom = styled.section`
  border-top: 1px solid #E8E8E8;
  height: 100px;

`
const FooterLogo = styled.div`
  display: flex;
  justify-content: flex-start;
`
const FooterTerms = styled.ul`
  display: flex;
  color: #88939E;
  flex-direction: row;
  list-style: none;
  justify-content: flex-end;
`
const FooterLi = styled.li`
  padding: 0 0.5em;
`

const Footer = () => {
  return (
    <div>
      <div>
        <FooterUl>
          <FooterTitle>Fakesite</FooterTitle>
          <FooterList>About us</FooterList>
          <FooterList>Press</FooterList>
          <FooterList>Policies</FooterList>
          <FooterList>Help</FooterList>
        </FooterUl>
      </div>
      <div>
        <FooterUl>
          <FooterTitle>Account</FooterTitle>
          <FooterList>Edit Profile</FooterList>
          <FooterList>Friends</FooterList>
          <FooterList>Social</FooterList>
          <FooterList>Delete Profile</FooterList>
        </FooterUl>
      </div>

      <FooterBottom>
        <FooterTerms>
          <FooterLogo>
            <img src={Logo} alt="Logo" />
          </FooterLogo>
          <FooterLi>Terms</FooterLi>
          <FooterLi>Privacy</FooterLi>
          <FooterLi>Site Map</FooterLi>
        </FooterTerms>
      </FooterBottom>
    </div>
  )
}

export default Footer
