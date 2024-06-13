import { z } from "zod";

const contactUsSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(50, { message: "Name cannot be longer than 50 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Please enter a valid email address"),
  source: z.string().optional(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(2500, { message: "Message cannot be longer than 2,500 characters" }),
  hasNDA: z.boolean().default(false),
});

export default contactUsSchema;
export type ContactUsSchema = z.infer<typeof contactUsSchema>;
