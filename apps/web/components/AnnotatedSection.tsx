import { Box, Flex } from "@chakra-ui/react"

export const AnnotatedSection = ({ annotation, children }) => {
    return <Box as='section' my={4} w='full'>

        <Flex>
            <Box pr={12} flex={'1 1 24rem'}>
                {annotation}
            </Box>
            <Box flex={'2 1 48rem'}>
                {children}
            </Box>
        </Flex>

    </Box>
}