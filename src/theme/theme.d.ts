import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
      };
      background: {
        paper: string;
        default: string;
        backdrop: string;
        textField: string;
      };
    };
    shadows: [string, string, string, string, string];
    typography: {
      fontFamily: string;
      fontSize: number;
    };
  }
}
