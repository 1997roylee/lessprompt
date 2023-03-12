import { Avatar, Box, Button, Container, HStack, Input, Text } from "@chakra-ui/react"


export const Header = () => {
    return <Box as='header' borderBottom='1px solid' borderColor='gray.100' position='fixed' top={0} left={0} right={0} bg='#fff'>
        <Container as='nav' py={2} px={4}>
            <HStack >
                <Text>Lessprompt</Text>
                <Input />
                <Avatar />
                <Button>
                    登出
                </Button>
            </HStack>
        </Container>
    </Box>
}