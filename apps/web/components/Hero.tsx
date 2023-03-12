import { Box, Container, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"


export const Hero = () => {
    return <Box as='section' bg='gray.50' py={12} borderBottom='1px solid' borderColor='gray.100'>
        <Container>
            <Flex>
                <Box w='60%'>
                    <Text>尋找商品</Text>
                    <Text>在店中備妥顧客喜愛的熱門商品。</Text>
                </Box>
                <Box w='40%'>
                    {/* <Image /> */}
                </Box>
            </Flex>
        </Container>
    </Box>
}