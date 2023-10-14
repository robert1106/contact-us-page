import { z } from 'zod'

export const ContactUsSchema = z.object({
  first_name: z
    .string({ required_error: 'This field is required' })
    .min(1, { message: 'Must be 1 or more characters long' })
    .max(25, { message: 'Must be 25 or fewer characters long' }),
  last_name: z
    .string({ required_error: 'This field is required' })
    .min(1, { message: 'Must be 1 or more characters long' })
    .max(25, { message: 'Must be 25 or fewer characters long' }),
  email: z.string({ required_error: 'This field is required' }).email(),
  phone_number: z
    .string({ required_error: 'This field is required' })
    .min(10, { message: 'Invalid phone number' }),
  subject: z.string(),
  message: z
    .string({ required_error: 'This field is required' })
    .min(5, { message: 'Must be 5 or more characters long' })
    .max(45, { message: 'Must be 45 or fewer characters long' })
})

export const JoinNewsletterSchema = z.object({
  email: z.string({ required_error: 'This field is required' }).email()
})
