import { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme, media } from '../../styles';
import { Footer, Navbar } from '../_ui';

const PageWrap = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.default};
  border-radius: 4.8rem;

  ${media.tablet} {
    border-radius: 7.2rem;
  }

  ${media.desktop} {
    border-radius: 9.6rem;
  }
`;

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <PageWrap>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </PageWrap>
    </ThemeProvider>
  );
};

export default Layout;
