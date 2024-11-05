'use client';
import { createTheme } from '@mui/material/styles';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: poppins.style.fontFamily
  },
  components: {}
});

export default theme;
