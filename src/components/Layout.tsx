import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme, GlobalFonts, GlobalStyles } from '../styles'

import { Nav } from './Nav'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <GlobalFonts />
      <Wrapper>
        <Nav />
        {children}
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
`
