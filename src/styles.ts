import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  red: '#E66767'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  color: ${colors.red};
  }

  body {
    background-color: ${colors.white};
}


`
