import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    layout?: React.FunctionComponent<any>
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
