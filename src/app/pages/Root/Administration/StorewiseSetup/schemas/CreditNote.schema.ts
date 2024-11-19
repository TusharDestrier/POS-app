import { z } from 'zod'

// Define the schema for each item in the `creditnoteValues` array
export const creditNoteSchema = z.object({
  storeName: z.string().optional(),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
  returnItem: z.string().optional(),
  creditNoteValidityDays: z.string().optional(),
  billTaggingMandatory: z.boolean().optional(),
  numberOfCopiesPrint: z.string().optional(),
})
