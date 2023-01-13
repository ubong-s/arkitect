import Link from 'next/link';
import styled, { css } from 'styled-components';
import misc from './misc';
import media from './responsive';
import typography from './typography';

export const DefaultButton = styled.button`
  cursor: pointer;
  font-family: ${typography.type.primary};
  font-weight: ${typography.weight.medium};
  font-size: 1.4rem;
  letter-spacing: 1px;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-radius: 50px;
  transition: ${misc.transition};
  text-transform: uppercase;
  font-weight: 500;
  padding: 1.5rem 2.25rem;

  &:hover {
    transition: ${misc.transition.ease};
  }

  ${media.tablet} {
    font-size: 1.6rem;
    padding: 2rem 3rem;
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
      opacity: 0.5;

      &:after {
        width: 100%;
        background-color: ${(props) => props.theme.colors.muted};
      }
    `}
`;
