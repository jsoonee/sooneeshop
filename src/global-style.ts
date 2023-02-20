import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    background: var(--bg-def);
  }

  body {
    font-family: 'Roboto', '맑은 고딕', 'malgun gothic', 'Apple SD Gothic Neo', 'Apple SD 산돌고딕 Neo', 'Microsoft NeoGothic', 'Droid sans', sans-serif;
    margin: 0;
    padding: 0 !important;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select: none;
    transition: all 0.5s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  
`;

export default GlobalStyle;
