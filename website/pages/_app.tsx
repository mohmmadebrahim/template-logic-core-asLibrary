import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseLayout } from '../components'
import { Provider } from "react-redux"
import coreStoreSalons from "core-salons/dist/util/redux/store/index"
import coreStoreLanding from "core-salons/dist/util/redux/store/index"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import { ThemeMode } from 'core'


function MyApp({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    ThemeMode({})
  }, [])

  return (
    <>
      <Provider store={coreStoreLanding}>
        <Provider store={coreStoreSalons}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </Provider>
      </Provider>

      <ToastContainer
        position="bottom-left"
        hideProgressBar={false}
        newestOnTop
        closeOnClick theme='light'
        pauseOnFocusLoss
        draggable pauseOnHover
      />
    </>
  )
}


export default MyApp
