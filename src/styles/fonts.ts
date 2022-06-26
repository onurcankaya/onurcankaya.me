import { createGlobalStyle } from 'styled-components'

import LatoRegularWoff from '../fonts/lato/Lato-Regular.woff'
import LatoRegularWoff2 from '../fonts/lato/Lato-Regular.woff2'

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: local('Lato'),
        url(${LatoRegularWoff}) format('woff'),
        url(${LatoRegularWoff2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`
