import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Axios from 'axios'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import axios from 'axios'
import Head from 'next/head'
import SideBar from './components/SideBar'

function MyApp({ Component, pageProps }: AppProps) {
  Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api"
  Axios.defaults.withCredentials = true

  const { pathname } = useRouter()
  const autheRoutes = ["/register", "/login"]
  const authRoute = autheRoutes.includes(pathname)

  return (
    <>
      <Head>
        <script src="https://unpkg.com/flowbite@1.5.4/dist/flowbite.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v6.1.1/js/all.js" integrity="sha384-xBXmu0dk1bEoiwd71wOonQLyH+VpgR1XcDH3rtxrLww5ajNTuMvBdL5SOiFZnNdp" crossOrigin="anonymous"></script>
      </Head>
      {/* {!authRoute && <NavBar />} */}
      <div className='flex flex-row'>
        <SideBar />
        <div className='w-full h-screen overflow-scroll'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
