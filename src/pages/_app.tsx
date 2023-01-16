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
      <Head>
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
