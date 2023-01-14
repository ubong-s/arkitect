import { createGlobalStyle, css } from 'styled-components';
import typography from './typography';
import misc from './misc';
import media from './responsive';

const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-weight: 400;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme.colors.default};
  color: ${(props) => props.theme.colors.default};
  line-height: 1.8;
  max-width: 1888px;
  background-color: ${(props) => props.theme.colors.default};
  padding: 1.6rem;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: ${misc.transition.ease};

  &::-webkit-scrollbar {
    width: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.muted};
  }

  ${media.tablet} {
    font-size: 1.6rem;
    border-radius: 7.2rem;
  }

  ${media.desktop} {
    font-size: 1.8rem;
  }

  *,
  ::after,
  ::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${typography.type.primary};
  }

  main {
    position: relative;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.white};
    z-index: 2;

    border-radius: 4.8rem;

    ${media.tablet} {
      border-radius: 7.2rem;
    }

    ${media.desktop} {
      border-radius: 9.6rem;
      margin-bottom: 60rem;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.medium};
    letter-spacing: 0rem;
    line-height: 3.75rem;
    color: ${(props) => props.theme.colors.default};

    ${media.tablet} {
      line-height: 7rem;
    }

    ${media.desktop} {
      line-height: 10.5rem;
    }
  }

  h2 {
    font-size: 3.6rem;

    ${media.tablet} {
      font-size: 7.2rem;
    }

    ${media.desktop} {
      font-size: 9.6rem;
    }
  }

  h3 {
    font-size: 1.56rem;
    margin-bottom: 1rem;

    ${media.desktop} {
      font-size: 2.25rem;
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;

    ${media.tablet} {
      font-size: 1.4rem;
    }

    ${media.desktop} {
      font-size: 1.8rem;
    }
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  a {
    cursor: pointer;
    position: relative;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  .transition {
    position: relative;
    z-index: 1;
    background-color: ${(props) => props.theme.colors.default};

    &.active {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      z-index: 1;
      perspective: 1800px;
    }
  }
`;

const htmlStyles = css`
  scroll-behavior: smooth;
  font-size: 10px;
`;

const resetStyles = css`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${resetStyles}

  html {
    ${htmlStyles}
  }

  body {
    ${bodyStyles}
  }
`;

export default GlobalStyle;
