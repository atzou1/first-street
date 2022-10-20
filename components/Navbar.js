import React from 'react'
import styled from 'styled-components';
import Link from 'next/Link'

const Nav = styled.nav`
  height: 5em;
  display: flex;
  justify-content: space-between;
  padding: 22px;
  color: white;
`;

const NavList = styled.div`
  display: flex;
  padding: 0 3em;
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/" >
          <img src="#" />
        </Link>
      </div>
      <NavList>
        <div>
          <Link href="/account">
            <a>Account</a>
          </Link>
        </div>
        <NavList>
          <Link href="/">
            <a>Help</a>
          </Link>
        </NavList>
      </NavList>
    </Nav>
  )
}

export default Navbar