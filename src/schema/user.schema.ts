import { object, string } from 'zod'

export const createUserSchema = object({
  body: object({
    username: string({
      required_error: 'Username is required'
    }),
    email: string({
      required_error: 'Email is required'
    }).email('Not a valid email'),
    password: string({
      required_error: 'Password is required'
    }).min(6, 'Password is too short - should be atleast6 characters')
  })
})