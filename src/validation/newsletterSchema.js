import { z } from "zod";
import { emailField } from "./formFields";

export const newsletterSchema = z.object({
    email: emailField
});