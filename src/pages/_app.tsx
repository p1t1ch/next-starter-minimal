import Head from 'next/head'
import { AppPropsWithLayout } from '~types/index'
import RootWrapper from 'src/containers/RootWrapper'
import 'focus-visible'
import 'modern-normalize/modern-normalize.css'
import '~styles/theme.css'
import '~styles/helpers.css'
import '~styles/global.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <RootWrapper>
      <Head>
        <title>Next Starter</title>
        <meta name="description" content="Opinionated setup of Next.js-based project" />
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
      </Head>
      <Component {...pageProps} />
    </RootWrapper>
  )
}

export default MyApp
