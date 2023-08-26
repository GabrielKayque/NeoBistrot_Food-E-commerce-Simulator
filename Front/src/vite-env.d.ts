/// <reference types="vite/client" />

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      primary: string
      red: string
      darkRed: string
      yellow: string
      black: string
      white: string
    }
  }
}
