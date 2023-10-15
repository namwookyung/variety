import '../styles/css/styles.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Header from '../components/header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"/>
      <Component {...pageProps} />
    </>
  );
}