import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Container } from '.';
import { Logo, SocialLinks } from '../_common';
import { pages, otherPages, terms } from '../../data/routes';
import { CustomLink, media, misc } from '../../styles';

const FooterRoot = styled.footer`
  background-color: ${(props) => props.theme.colors.default};
  padding: 8rem 0 4rem;

  ${media.desktop} {
    padding: 12rem 0 4rem;
  }

  ${media.desktop} {
    position: fixed;
    z-index: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    height: 60rem;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  margin-bottom: 3rem;

  ${media.tablet} {
    margin-bottom: 4rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }

  ${media.desktop} {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  ${media.large} {
    grid-template-columns: 2.5fr 1fr 1fr 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .email__phone {
    margin: 1.5rem 0;

    a {
      display: block;
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.white};
      transition: ${misc.transition.linear};

      &:hover {
        color: ${(props) => props.theme.colors.muted};
      }
    }
  }

  h3 {
    color: ${(props) => props.theme.colors.white};
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 1;
  }

  .link__list {
    li {
      margin-bottom: 1rem;
      line-height: 32px;
    }
  }

  &:nth-of-type(1) {
    grid-column: 1 / 3;
  }

  ${media.tablet} {
    .email__phone {
      a {
        font-size: 3.2rem;
      }
    }

    .link__list {
      li {
        margin-bottom: 1.6rem;
      }
    }

    &:nth-of-type(1) {
      grid-column: 1 / 4;
      grid-row: 1 / 2;
    }
  }

  ${media.desktop} {
    &:nth-of-type(1) {
      grid-column: unset;
      grid-row: unset;
    }
  }
`;

const FooterCopyright = styled.div`
  p {
    color: ${(props) => props.theme.colors.white};
  }

  ${media.desktop} {
    p {
      text-align: center;
    }
  }
`;

const Footer: FC<{}> = () => {
  const router = useRouter();

  return (
    <FooterRoot>
      <Container>
        <FooterLinks>
          <FooterColumn>
            <Logo pathFill='white' />
            <div className='email__phone'>
              <Link href='mailto:hello@example.com'>hello@example.com</Link>
              <Link href='tel:+49 176 123 456 78'>+49 176 123 456 78</Link>
            </div>
            <SocialLinks />
          </FooterColumn>
          <FooterColumn>
            <h3>Pages</h3>
            <ul className='link__list'>
              {pages.map((page) => (
                <li key={page.label}>
                  <CustomLink
                    href={page.url}
                    active={page.url === router.asPath ? 'true' : undefined}
                  >
                    {page.label}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Pages</h3>
            <ul className='link__list'>
              {otherPages.map((page) => (
                <li key={page.label}>
                  <CustomLink
                    href={page.url}
                    active={page.url === router.asPath ? 'true' : undefined}
                  >
                    {page.label}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Legal</h3>
            <ul className='link__list'>
              {terms.map((page) => (
                <li key={page.label}>
                  <CustomLink
                    href={page.url}
                    active={page.url === router.asPath ? 'true' : undefined}
                  >
                    {page.label}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </FooterLinks>
        <FooterCopyright>
          <p>
            © 2022 Made by{' '}
            <CustomLink href='https://www.gola.io/' target='_blank' alt='true'>
              Pawel Gola
            </CustomLink>
            . Developed by{' '}
            <CustomLink
              href='https://www.devubong.com/'
              target='_blank'
              alt='true'
            >
              Ubong Sylvester
            </CustomLink>
          </p>
        </FooterCopyright>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
