import { Box, Container, Stack, Text, Divider, FormControl, FormLabel, Input, FormErrorMessage, Textarea, HStack, Button } from "@chakra-ui/react"
import { Card } from "@components/Card"
import { AnnotatedSection } from "@components/AnnotatedSection"
import FormLayout from "layouts/FormLayout"
import { useForm } from "react-hook-form"
import { CreateAppControlLabel } from "@components/CreateApp"
import { SwitchButton } from "@components/SwitchButton"
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateAppSchema } from "schemas/CreateAppSchema"
import { AvatarSelector } from "@components/AvatarSelector"
import { useCallback } from "react"

export default function Page() {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },

    } = useForm({
        defaultValues: {
            avatar: '',
            name: '',
            description: '',
            command: '',
            example: '',
        },
        mode: 'onBlur',
        resolver: yupResolver(CreateAppSchema),
    })

    const handleOnSubmit = handleSubmit((data) => {
        console.log(data);
    })

    console.log(errors);

    const handleEmojiChange = useCallback((emoji: string) => {
        setValue('avatar', emoji)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <Container py={12}>
        <form onSubmit={handleOnSubmit}>
            <Text mb={12} fontSize='3xl' fontWeight={700}>Create App</Text>
            <Stack divider={<Divider />} spacing={8}>
                <AnnotatedSection annotation={<CreateAppControlLabel title='個人檔案資訊' description='編輯個人檔案以變更密碼、電子郵件聯絡人、大頭貼相片和偏好語言。' />}>
                    <Card p={8}>
                        <h1>Create App</h1>
                    </Card>
                </AnnotatedSection>
                <AnnotatedSection annotation={<CreateAppControlLabel title='商家詳細資訊' />}>
                    <Card p={8}>
                        <Stack spacing={4}>
                            {/* <EmojiPicker /> */}
                            <FormControl isInvalid={!!errors?.avatar}>
                                <FormLabel>應用圖示</FormLabel>
                                <AvatarSelector onChange={handleEmojiChange} />
                                <FormErrorMessage >
                                    {errors?.avatar?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors?.name}>
                                <FormLabel>应用名称</FormLabel>
                                <Input {...register('name')} />
                                <FormErrorMessage >
                                    {errors?.name?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors?.description}>
                                <FormLabel>应用描述</FormLabel>
                                <Textarea  {...register('description')} />
                                <FormErrorMessage >
                                    {errors?.description?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors?.command}>
                                <FormLabel>指令</FormLabel>
                                <Textarea {...register('command')} />
                                <FormErrorMessage >
                                    {errors?.command?.message}
                                </FormErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={!!errors?.example}>
                                <FormLabel>Example</FormLabel>
                                <Input {...register('example')} />
                                <FormErrorMessage >
                                    {errors?.example?.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Stack>
                    </Card>
                </AnnotatedSection>
                <AnnotatedSection annotation={<CreateAppControlLabel title='API' />}>
                    <Card p={8}>
                        <Stack spacing={4}>
                            <SwitchButton />
                        </Stack>
                    </Card>
                </AnnotatedSection>
                <HStack justifyContent={'flex-end'}>
                    <Button variant='outline'>測試</Button>
                    <Button colorScheme={'blue'} type='submit'>創建</Button>
                </HStack>
            </Stack>
        </form>
    </Container>
}

Page.layout = FormLayout