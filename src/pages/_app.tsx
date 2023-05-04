import type { AppProps } from 'next/app';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/style.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
