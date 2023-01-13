// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends myTheme {
    colors: {
      default: string;
      muted: string;
      white: string;
      black: string;
      gray: string;
    };
  }
}
