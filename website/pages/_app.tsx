import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseLayout } from '../components'
import { Provider } from "react-redux"
import coreStoreSalons from "core-salons/dist/util/redux/store"
import coreStoreLanding from "core-salons/dist/util/redux/store"


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={coreStoreLanding}>
        <Provider store={coreStoreSalons}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </Provider>
      </Provider>
    </>
  )
}


export default MyApp
