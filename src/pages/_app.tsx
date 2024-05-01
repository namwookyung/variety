import '../styles/css/styles.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"/>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
// TO-DO 로그인 상태별 components 숨김/보임 처리(token으로 조건)