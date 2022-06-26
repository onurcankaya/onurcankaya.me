import { createGlobalStyle } from 'styled-components'

import { variables } from './variables'

export const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme.primaryBg};
    color: ${({ theme }) => theme.white};
    font-family: var(--font-sans);
    line-height: 1.2;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  p {
    line-height: 1.4;
  }

  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    &:hover {
      opacity: 0.7;
    }
  }
`
