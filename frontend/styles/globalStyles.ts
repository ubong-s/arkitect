import { createGlobalStyle, css } from 'styled-components';
import typography from './typography';
import misc from './misc';
import media from './responsive';

const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-weight: 400;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.default};
  border-radius: 4.8rem;
  line-height: 1.8;
  max-width: 1888px;
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
    font-size: 1.4rem;
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
    min-height: 100vh;
  }

  h1 {
    font-weight: ${typography.weight.medium};
    letter-spacing: 0.03rem;
    line-height: 3.75rem;
    color: ${(props) => props.theme.colors.default};

    ${media.desktop} {
      line-height: 6.25rem;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.medium};
    line-height: 2.5rem;
    letter-spacing: 0.03rem;
    color: ${(props) => props.theme.colors.default};

    ${media.desktop} {
      line-height: 3.75rem;
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
    text-decoration: none;
    letter-spacing: 0.03rem;
  }

  input,
  textarea {
    font-size: 0.875rem;
    outline: none;

    ${media.tablet} {
      font-size: 1rem;
    }
  }

  button {
    cursor: pointer;
    font-size: 0.8rem;
    border: none;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.colors.default};
    transition: ${misc.transition};

    &:hover {
      opacity: 0.85;
      transition: ${misc.transition.ease};
    }

    ${media.tablet} {
      font-size: 0.825rem;
    }
  }
`;

const htmlStyles = css`
  scroll-behavior: smooth;
  font-size: 10px;
  background-color: ${(props) => props.theme.colors.default};
  padding: 1.6rem;
`;

const GlobalStyle = createGlobalStyle`
   html {
      ${htmlStyles}
   }

   body {
      ${bodyStyles}
   }
`;

export default GlobalStyle;
