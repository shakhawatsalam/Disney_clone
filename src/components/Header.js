import React from 'react'
import styled from 'styled-components'

function Header(props) {
    return (
        <Nav>
            <Logo>
                <img src="/Images/logo.svg" alt="Disney+" />
            </Logo>
            <NavMenu>
                <a href="/home">
                    <img src="/Images/home-icon.svg" alt="" />
                </a>
                <span>HOME</span>
            </NavMenu>
        </Nav>
    )
};
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;

  img {
    display: block;
    width: 100%;

  }

`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row-nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  margin-right: auto;
  margin-left: 25px;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
  }
  img{
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }
 
  /* @media (max-width: 768px){
    display: none;
  } */
`;




export default Header