import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  red: '#E66767',
  beige: '#FFEBD9',
  red2: '#d05555'
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


.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  }


.header {
  max-width: 100%;
  max-height: 280px;
  width: 100%;
  }

  .modal {
  max-width: 1024px;
  width: 100%;
  display: block;
  text-align: left;
  }
`
