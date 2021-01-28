import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, a, strong{
    font-family: 'Montserrat', serif;
    text-decoration: none;
  }
`
