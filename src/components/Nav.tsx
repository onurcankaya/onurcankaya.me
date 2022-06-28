import { Link } from 'gatsby'
import React, { Ref, useRef, useState } from 'react'
import { BsEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import styled from 'styled-components'

import logo from '../assets/images/logo.png'
import { useOnClickOutside } from '../hooks/useClickOutside'
import { IRoute } from '../types/route'

type MenuProps = {
  open: boolean
}

const routes: IRoute[] = [
  { id: '0', label: 'Home', path: '/' },
  { id: '1', label: 'About', path: '/about' },
  { id: '2', label: 'Projects', path: '/projects' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  useOnClickOutside(rootRef, () => setOpen(false))

  const handleToggle = () => {
    setOpen(!open)
  }

  return (
    <Wrapper ref={rootRef as Ref<HTMLDivElement>}>
      <LogoWrapper to='/'>
        <Logo src={logo} alt='site-logo' />
      </LogoWrapper>
      <Burger onClick={handleToggle} open={open}>
        <div />
        <div />
      </Burger>
      <Menu open={open}>
        {routes.map((route: IRoute) => (
          <MenuItem to={route.path} key={route.id}>
            {route.label}
          </MenuItem>
        ))}
        <Contact>
          <ContactIcon href='mailto:onur.eren.cankaya@gmail.com'>
            <BsEnvelopeFill />
          </ContactIcon>
          <ContactIcon href='https://github.com/onurcankaya' target='_blank'>
            <BsGithub />
          </ContactIcon>
          <ContactIcon
            href='https://www.linkedin.com/in/onurerencankaya/'
            target='_blank'
          >
            <BsLinkedin />
          </ContactIcon>
        </Contact>
      </Menu>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const LogoWrapper = styled(Link)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  z-index: 2;
  font-size: 2rem;
`
const Logo = styled.img`
  width: 70px;
  height: 70px;
`
const MenuItem = styled(Link)`
  padding: 0 0.5rem;
`
const Burger = styled.button`
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.white};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }: MenuProps) =>
        open ? 'rotate(45deg)' : 'rotate(0)'};
      bottom: ${({ open }: MenuProps) => (open ? '4.5px' : '0px')};
    }
    :nth-child(2) {
      transform: ${({ open }: MenuProps) =>
        open ? 'rotate(-45deg)' : 'rotate(0)'};
      top: ${({ open }: MenuProps) => (open ? '4.5px' : '0px')};
    }
  }
`
const Menu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4rem;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.secondaryBg};
  z-index: 1;
  text-align: center;
  transition: transform 0.4s ease-in-out;
  transform: ${({ open }: MenuProps) =>
    open ? 'translateX(0)' : 'translateX(110%)'};

  @media screen and (min-width: 576px) {
    height: 96vh;
    width: 350px;
    margin: 1.2rem;
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.4rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`
const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`
const ContactIcon = styled.a`
  margin: 0 1rem;
`
