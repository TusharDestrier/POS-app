import { z } from 'zod'

export const DocuemntSeriesschema = z.object({
  transactionType: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  seriesname: z.string().min(2, {
    message: 'Seriesname must be at least 2 characters.',
  }),
  prefix: z.string().min(2, {
    message: 'prefix must be at least 2 characters.',
  }),
  noOfDigits: z.string().min(2, {
    message: 'noofdigits must be at least 2 characters.',
  }),
  suffix: z.string().min(2, {
    message: 'suffix must be at least 2 characters.',
  }),
  checkbox: z.string().min(2, {
    message: 'suffix must be at least 2 characters.',
  }),
  test: z.array(
    z.object({
      value: z.string().min(1, { message: 'Field is required' }),
    })
  ),
})
