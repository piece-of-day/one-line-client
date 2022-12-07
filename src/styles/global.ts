import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { ColorCode } from '@/constants/color';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: calc(min(0.35vw, 3.76px) + 8.74px);
    background-color: ${ColorCode.OFFWHITE};
  }
  html,
  body,
  span,
  div,
  a,
  input,
  textarea,
  button {
    font-family: 'NotoSansKR', sans-serif;
  }
`;

export default GlobalStyle;
