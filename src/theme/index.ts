import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  palette: {
    primary: '#8ADD37',
    text: {
      primary: '#333333',
      secondary: '#A1A4B5',
      disabled: '#888888',
    },
    background: {
      paper: '#ffffff',
      default: '#fafafa',
      textField: '#f8f8f8',
      backdrop: 'rgba(69, 74, 99, 0.8)',
    },
  },
  shadows: [
    'none',
    '0px 4px 12px rgba(0, 0, 0, 0.06)',
    '0px 4px 20px rgba(0, 0, 0, 0.06)',
    '0px 16px 36px rgba(0, 0, 0, 0.05)',
    '0px 20px 40px rgba(0, 0, 0, 0.16)',
  ],
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
  },
};

export default theme;
