import { object, string } from "yup";

export const CreateAppSchema = object({
    avatar: string().required("Avatar is required"),
    name: string().required("Name is required").max(50, "Name is too long"),
    description: string().required("Description is required").max(256, "Description is too long"),
    command: string().required("Command is required").max(256, "Command is too long"),
    example: string().required("Example is required").max(256, "Example is too long"),
})