import { Box, HStack, Text } from "@chakra-ui/react"

export const Product = () => {
    return <Box>
        <HStack>
            <Box>
                🤘🏻
            </Box>
            <Box>
                <Text>
                    Title
                </Text>
                <HStack>
                    Upvote: 1000, Free
                </HStack>
                <Text>
                    Allow
                </Text>
            </Box>
        </HStack>
    </Box>
}