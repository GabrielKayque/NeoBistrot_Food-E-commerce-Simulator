import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
     @media (max-width:1080px) {
      font-size: 92%;
     }
     @media (max-widdth:720px) {
      font-size: 87%;
    }
  }

  body {
    background: #141518;
    color: white;
    margin: 0;
  }

  body, input, select, textarea, button {
    font: 400 1rem 'Roboto', Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style: none;
  }

`

export default GlobalStyle
