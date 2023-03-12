import { ChakraBaseProvider } from '@chakra-ui/react'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { theme } from 'theme'
import { AppPropsWithLayout } from 'types/page'
import '../app.css'

const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.layout

    return <ChakraBaseProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    </ChakraBaseProvider>
}