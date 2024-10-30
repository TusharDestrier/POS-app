import { z } from 'zod'

// Define the schema for each item in the `mopValues` array
const ledgerItemSchema = z.object({
  ledger: z.string().optional(),
  subLedger: z.string().optional(),
  costCentre: z.string().optional(),
  discontinue: z.boolean().optional(),
 
})

// Define the schema for the form, with `mopValues` as an array of `mopItemSchema`
export const LedgersSchema = z.object({
  ledgerValue: z.array(ledgerItemSchema),  // Use array of `mopItemSchema` objects
})
