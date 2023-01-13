import { FC, useState } from 'react';
import { Logo, SocialLinks } from '../_common';
import { Container } from '.';
import styled from 'styled-components';
import { CustomLink, media, misc, typography } from '../../styles';
import { pages } from '../../data/routes';
import { useRouter } from 'next/router';

const HeaderRoot = styled.nav`
  display: flex;
  align-items: center;
  height: 10rem;
  margin-bottom: -10rem;

  ${media.tablet} {
    height: 16rem;
    margin-bottom: -16rem;
  }
`;

const NavRoot = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLinks = styled.ul`
  position: fixed;
  right: calc(5% + 1.6rem);
  top: 10rem;
  background-color: ${(props) => props.theme.colors.default};
  padding: 3rem;
  border-radius: 3.2rem;
  width: 250px;
  z-index: 5;
  opacity: 0;
  transform: scale(0);
  transform-origin: top right;
  transition: ${misc.transition.ease};

  li {
    margin-bottom: 2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &.active {
    opacity: 1;
    transform: scale(1);
  }

  ${media.desktop} {
    top: unset;
    width: unset;
    right: unset;
    opacity: unset;
    transform: unset;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 3.2rem;
    padding: 2.7rem 3.6rem;
    border-radius: 5rem;

    li {
      margin-bottom: 0;
    }
  }
`;

const MobileButtons = styled.div`
  position: fixed;
  z-index: 5;
  right: calc(5% + 1.6rem);
  background-color: ${(props) => props.theme.colors.default};
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.25rem;
  border-radius: 50px;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
  }

  .hamburger__btn {
  }

  .cart__btn {
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 50%;
    font-weight: ${typography.weight.medium};
  }

  ${media.desktop} {
    display: none;
  }
`;

const Navbar: FC<{}> = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <HeaderRoot>
      <Container>
        <NavRoot>
          <Logo onClick={closeNavbar} />
          <NavLinks className={navbarOpen ? 'active' : ''}>
            {pages
              .filter((page) => page.label !== 'Home')
              .map((page) => (
                <li key={page.label}>
                  <CustomLink
                    href={page.url}
                    active={page.url === router.asPath ? 'true' : undefined}
                    onClick={closeNavbar}
                  >
                    {page.label}
                  </CustomLink>
                </li>
              ))}
          </NavLinks>
          <SocialLinks mobile='hidden' />
          <MobileButtons>
            <button
              title='hamburger'
              className='hamburger__btn'
              onClick={toggleNavbar}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='white'
                viewBox='0 0 24 24'
                width='20'
                height='20'
              >
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z'></path>
              </svg>
            </button>
            <button className='cart__btn' onClick={toggleNavbar}>
              0
            </button>
          </MobileButtons>
        </NavRoot>
      </Container>
    </HeaderRoot>
  );
};

export default Navbar;
