import { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme, media } from '../../styles';
import { Footer, Navbar } from '../_ui';

const PageWrap = styled.div`
  position: relative;
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
