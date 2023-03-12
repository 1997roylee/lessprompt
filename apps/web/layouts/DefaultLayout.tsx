import { Box } from "@chakra-ui/react";
import { Header } from "@components/Header";

export default function DefaultLayout({ children }) {

    return <>
        <Header />
        <Box pt={'64px'}>
            {children}
        </Box>
    </>
}