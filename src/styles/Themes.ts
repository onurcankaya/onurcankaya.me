import { DefaultTheme } from 'styled-components'

const darkNavy = '#0f172a'
const white = '#e6f1ff'

export const darkTheme: DefaultTheme = {
  background: darkNavy,
  text: white,
  link: white,
}

export const lightTheme: DefaultTheme = {
  background: white,
  text: darkNavy,
  link: darkNavy,
}
