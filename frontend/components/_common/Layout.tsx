import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalFonts, GlobalStyle, myTheme } from '../../styles';
import { Footer, Navbar } from '../_ui';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <GlobalFonts />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
