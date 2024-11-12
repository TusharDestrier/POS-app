import { z } from 'zod';

// Define the schema for each item in the `creditnoteValues` array
export const creditNoteSchema = z.object({
    returnItem: z.string().optional(),
    creditNoteValidityDays: z.string().optional(),
    billTaggingMandatory: z.boolean().optional(),
    numberOfCopiesPrint: z.string().optional(),
  })
