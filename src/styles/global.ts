import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: gray;
    color: white;
    margin: 0;
  }
`

export default GlobalStyle
