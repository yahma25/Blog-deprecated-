import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  button {
    box-sizing: border-box;
    border-style: none;
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;
