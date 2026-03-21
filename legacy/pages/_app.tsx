import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Loading from '@/components/Loading';
import theme from '@/styles/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps, router }: AppProps) {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
    // Mark as client-side rendered
    setDomLoaded(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {domLoaded ? (
        <Component {...pageProps} key={router.route} />
      ) : (
        <Loading />
      )}
    </ThemeProvider>
  );
}