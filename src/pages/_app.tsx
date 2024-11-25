import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import '../styles/css/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  // const refreshTokenIfNeeded = async () => {
  //   if (typeof window === 'undefined') return; // 서버 측에서는 실행하지 않음
  //   const refreshToken = localStorage.getItem('refreshToken');
  //   if (refreshToken) {
  //     try {
  //       const newAccessToken = await refreshTokenProcess(refreshToken);
  //       localStorage.setItem('token', newAccessToken);
  //     } catch (error) {
  //       console.error("Error refreshing token:", error);
  //       localStorage.removeItem('token');
  //       localStorage.removeItem('refreshToken');
  //       router.push('/');
  //     }
  //   }
  // };

  // const checkTokenValidity = async () => {
  //   if (typeof window === 'undefined') return; // 서버 측에서는 실행하지 않음
  //   const token = localStorage.getItem('token');
  //   const isLoginPage = router.pathname === '/';

  //   if (token) {
  //     try {
  //       const response = await fetch("http://localhost:3001/verify-token", {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': 'Bearer ' + token
  //         }
  //       });

  //       const data = await response.json();

  //       if (!data.auth && !isLoginPage) {
  //         localStorage.removeItem('token');
  //         router.push('/');
  //       }
  //     } catch (error) {
  //       console.error("Token verification error:", error);
  //       if (!isLoginPage) {
  //         router.push('/');
  //       }
  //     }
  //   } else if (!isLoginPage) {
  //     router.push('/');
  //   }
  // };

  // useEffect(() => {
  //   const handleAuthentication = async () => {
  //     await refreshTokenIfNeeded();
  //     await checkTokenValidity();
  //   };

  //   handleAuthentication();
  // }, [router.pathname]);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const isLoginPage = router.pathname === '/';
  const isMainPage = router.pathname === '/main';
  return (
    <>
      <Header />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"/>
      <Navbar />
      <div id="layoutSidenav">
        <Sidebar />
        <div id="layoutSidenav_content">
          <Component {...pageProps} />
          <Footer />
        </div>
      </div>

    </>
  );
}
// TO-DO 로그인 상태별 components 숨김/보임 처리(token으로 조건)