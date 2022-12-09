import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import type { ReactElement, ReactNode } from 'react'
import { ComponentType } from 'react'
import { RecoilRoot } from 'recoil'
import themeConfig from '../configs/themeConfig'
import ThemeProvider from '../theme/ThemeProvider'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (_page: ReactElement) => ReactNode
  layout?: ComponentType
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>{`${themeConfig.templateName}`}</title>
        <meta name="description" content={`${themeConfig.templateName}`} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )
}
