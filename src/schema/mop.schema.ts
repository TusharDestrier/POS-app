import { z } from 'zod'

export const Mopschema = z.object({
  payMode: z.string().min(2, {
    message: 'Please select Pay Mode.',
  }),
  ledgers: z.string().min(2, {
    message: 'Please select Ledgers.',
  }),
  paymentCode: z.string().optional(),
  subLedger: z.string().optional(),
  crossStore: z.string().optional(),
  discontinue: z.string().optional(),
  test: z.array(z.object({ // add this field
    value: z.string().optional(),
  })).optional(),
})
