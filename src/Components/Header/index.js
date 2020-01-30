import React from 'react'
import styled from 'styled-components'
import * as palette from '../../variables'
import { Link } from 'react-router-dom'

const Wrap = styled.div`
  display: grid;
  width: 100%;
  height: 50px;
  background: ${palette.darkTransparent};
  color: #fff;
  justify-items: center;
`

const Nav = styled.ul`
  display: grid;
  height: 100%;
  min-width: 200px;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;
  align-items: center;
`

const NavItem = styled.li`
  background: #fff;
  height: 100%;
  width: 100%;
`

const StyledLink = styled(Link)`
  display: grid;  
  height: 100%;
  width: 100%;
  cursor: pointer;
  justify-items: center;
  align-items: center;
  text-decoration: none;
  color: ${palette.darkGrey};
  &:hover, focus{
    color: #fff;
    background: ${palette.lightGrey};
  }

`

const Header = () => (
  <Wrap>
    <Nav>
      <NavItem>
        <StyledLink to="/">
          Task 1
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="task2">
          Task 2
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="task3">
          Task 3
        </StyledLink>
      </NavItem>
    </Nav>
  </Wrap>
)

export default Header