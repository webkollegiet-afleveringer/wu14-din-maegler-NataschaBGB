import { z } from "zod";
import { nameField, emailField, subjectField, messageField } from "./formFields";


export const contactSchema = z.object({
    name: nameField,
    email: emailField,
    subject: subjectField,
    message: messageField,
});