import { Box, BoxProps } from "@chakra-ui/react"

interface Props extends BoxProps {
    children: React.ReactNode
}

export const Card = ({ children, ...rest }: Props) => {
    return <Box p={4} bg='#fff' border={'1px solid'} boxShadow='sm' borderColor='gray.100' borderRadius='md' {...rest}>
        {children}
    </Box>
}