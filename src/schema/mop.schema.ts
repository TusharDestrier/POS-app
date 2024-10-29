import { z } from 'zod'

export const Mopschema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  test: z.array(
    z.object({
      value: z.string().min(1, { message: 'Field is required' }),
    })
  ),
})
