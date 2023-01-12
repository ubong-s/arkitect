import { FC, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, myTheme } from '../../styles';
import { Footer, Navbar } from '../_ui';

const PageWrap = styled.div`
  background-color: ${(props) => props.theme.colors.white};
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
