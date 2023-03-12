import { Box, Text } from "@chakra-ui/react"
import { ProductList } from "./Products"

export const MarketPlace = () => {
    return <Box>
        <Text>More ways merchants use apps</Text>
        <ProductList />
        <ProductList />
        <ProductList />
    </Box>
}