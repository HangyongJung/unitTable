import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import axios from 'axios'
import Head from 'next/head'
import SideBar from '../components/SideBar'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = "http://heonpage.com:4000/api"
  Axios.defaults.withCredentials = true

  const { pathname } = useRouter()
  const autheRoutes = ["/register", "/login"]
  const authRoute = autheRoutes.includes(pathname)

  const fetcher = async (url: string) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error: any) {
      throw error.response.data
    }
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-2LC2GCG0ZN`}></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2LC2GCG0ZN', {
              page_path: window.location.pathname,
            });
          `,
        }}></Script>
      <Script
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3358142377126312`}
        crossOrigin='anonymous'></Script>
      <Head>
        <meta name="google-site-verification" content="luvYicf9TzmoZtUQ0daUNFpIFgPFmklTkJlIgJc_ha4" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3358142377126312"
          crossOrigin="anonymous"></script>
        <link rel="canonical" href={`http://heonpage.store` + pathname} />
      </Head>
      <SWRConfig value={{ fetcher }}>
        {/* {!authRoute && <NavBar />} */}
        <div className='flex flex-row'>
          <SideBar />
          <div className='w-full h-screen overflow-scroll'>
            <Component {...pageProps} />
          </div>
        </div>

      </SWRConfig>
    </>
  )
}

export default MyApp
