import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BaseLayout } from '../components'
import { Provider } from "react-redux"
import  coreStore  from "core/dist/util/redux/store"


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider store={coreStore}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    </>
  )
}


export default MyApp
