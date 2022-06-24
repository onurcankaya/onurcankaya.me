import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { darkTheme, GlobalStyles, lightTheme } from '../styles'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.main`
  max-width: 960px;
  margin: 0 auto;
`
