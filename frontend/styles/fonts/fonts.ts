import { createGlobalStyle } from 'styled-components';

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Satoshi';
    src: url('./satoshi-regular.woff2') format('woff2'),
      url('./satoshi-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Satoshi';
    src: url('./satoshi-medium.woff2') format('woff2'),
      url('./satoshi-medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

 @font-face {
    font-family: 'Zodiak';
    src: url('./zodiak-regular.woff2') format('woff2'),
      url('./zodiak-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

export default GlobalFonts;
