import { Button, ButtonGroup, CheckboxProps, useCheckbox } from "@chakra-ui/react"


export const SwitchButton = (props: CheckboxProps) => {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)

    return <ButtonGroup bg='gray.50' display='inline' p={2} borderRadius='md'>
        <Button>
            Yes
        </Button>
        <Button variant='ghost'>
            No
        </Button>
    </ButtonGroup>

}