import { ThemeOptions } from '@mui/material';

const lightThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#E27D60',
      light: '#C38D9E',
    },
    secondary: {
      main: '#85D0CB',
      light: '#41B3A3',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Gentium Book Plus',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'sans-serif',
    ].join(','),
  },
};

export default lightThemeOptions;
