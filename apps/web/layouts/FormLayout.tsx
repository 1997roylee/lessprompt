import { Box } from "@chakra-ui/react";
import { Header } from "@components/Header";

export default function FormLayout({ children }) {

    return <>
        <Header />
        <Box pt={'64px'} bg='gray.50' minH='calc(100vh - 64px)'>
            {children}
        </Box>
    </>
}