import Link from 'next/link';
import styled, { css } from 'styled-components';
import misc from './misc';
import media from './responsive';

export const Button = styled.button`
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

export const CustomLink = styled(Link)<{
  light?: 'true';
  alt?: 'true';
  active?: 'true';
}>`
  position: relative;
  text-decoration: none;
  color: ${(props) =>
    props.light ? props.theme.colors.default : props.theme.colors.white};
  transition: ${misc.transition.linear};

  &:after {
    height: 1px;
    content: '';
    position: absolute;
    top: 110%;
    left: 0%;
    width: 0%;
    background-color: ${(props) =>
      props.light ? props.theme.colors.default : props.theme.colors.white};
    transition: ${misc.transition.linear};
  }

  &:hover {
    color: ${(props) =>
      props.light ? props.theme.colors.default : props.theme.colors.muted};

    &:after {
      width: 100%;
      background-color: ${(props) =>
        props.light ? props.theme.colors.default : props.theme.colors.muted};
    }
  }

  ${(props) =>
    props.alt &&
    css`
      &:after {
        width: 100%;
      }
    `}

  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.colors.muted};

      &:after {
        width: 100%;
        background-color: ${(props) => props.theme.colors.muted};
      }
    `}
`;
