import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronLeft)


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp
