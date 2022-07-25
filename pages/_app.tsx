import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { createTheme, ThemeProvider } from '@mui/material';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import Layout from '../components/Layout';

const lightTheme = createTheme(lightThemeOptions);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
