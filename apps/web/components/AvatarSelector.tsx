import { Popover, Text, PopoverTrigger, PopoverContent, useDisclosure, Flex } from "@chakra-ui/react"
import type { EmojiClickData } from "emoji-picker-react"
import dynamic from "next/dynamic"
import { useCallback, useRef, useState } from "react"
const EmojiPicker = dynamic(() => import("emoji-picker-react"), {
    ssr: false
})

interface Props {
    onChange?: (value: string) => void
}

export const AvatarSelector = ({onChange}: Props) => {
    const [value, setValue] = useState<string>('🤖')
    const { onOpen, onClose, isOpen } = useDisclosure()
    const ref = useRef(null)
    const handleEmojiClick = useCallback((emoji: EmojiClickData) => {
        setValue(emoji.emoji)
        onChange?.(emoji.emoji)
        onClose();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Popover closeOnBlur={false} initialFocusRef={ref} onOpen={onOpen}
        onClose={onClose} isOpen={isOpen}>
        <PopoverTrigger>
            <Flex alignItems='center' justifyContent='center' w={16} h={16} bg='gray.50' cursor='pointer'>
                <Text textAlign={'center'} fontSize='2xl'>
                    {value}
                </Text>
            </Flex>
        </PopoverTrigger>
        <PopoverContent border='0' outline='none'>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
        </PopoverContent>
    </Popover>
}