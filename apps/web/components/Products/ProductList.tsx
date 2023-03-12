import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Product } from "./Product"

export const ProductList = () => {
    return <SimpleGrid columns={3}>
        <Box>
            <Text>Store design</Text>
            <Text>Go beyond built-in options with added pages and features.</Text>
            <Text>Customize your store ›</Text>
        </Box>
        <Box>
            <Product />
            <Product />
            <Product />
        </Box>
        <Box>
            <Product />
            <Product />
            <Product />
        </Box>
    </SimpleGrid>
}