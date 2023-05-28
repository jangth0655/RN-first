import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: {
      mainDark: string;
      active: string;
      darkWhite: string;
      white: string;
      gray: string;
    };
  }
}
