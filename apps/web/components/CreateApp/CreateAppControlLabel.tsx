import { Text } from "@chakra-ui/react"

interface Props {
    title: string;
    description?: string;
}

export const CreateAppControlLabel = ({ title, description }: Props) => {
    return <>
        <Text fontWeight={700} mb={4}>
            {title}
        </Text>
        {description && <Text fontWeight={400} color='gray.900' fontSize='sm'>
            {description}
        </Text>}
    </>
}