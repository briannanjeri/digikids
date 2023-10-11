import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import sal from 'sal.js'
import { CourseProvider } from '@/contexts'

if (typeof window !== 'undefined') {
  require('bootstrap/dist/js/bootstrap') // ToDo: check why this is needed
}

import Theme from '@/components/common/theme'
import { MouseMoveProvider } from '@/contexts'
import { store } from '@/elements/redux/store'

import '@/styles/index.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    sal({ threshold: 0.1, once: true, root: null })
  }, [router.asPath])

  useEffect(() => {
    sal()
  }, [])

  return (
    <>
      <Provider store={store}>
        <ThemeProvider defaultTheme="light">
          <MouseMoveProvider>
            <CourseProvider>
              <Component {...pageProps} />
            </CourseProvider>
          </MouseMoveProvider>
          <Theme />
        </ThemeProvider>
      </Provider>

      <Analytics />
    </>
  )
}

export default MyApp
