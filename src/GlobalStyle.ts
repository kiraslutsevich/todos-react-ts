import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: inherit;
    color: white;
  }

  body {
    margin: 0;
    height: 100vh;
    font-family: 'Poppins';
    background: linear-gradient(45deg, rgb(152, 207, 195) 35%, rgb(86, 181, 184) 31%, rgb(237, 242, 208));
    background-size: 100% 100%;
  }
`;

export default GlobalStyle;
