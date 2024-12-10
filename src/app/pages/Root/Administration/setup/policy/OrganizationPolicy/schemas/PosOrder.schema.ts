import { z } from 'zod';

export const posOrderSchema = z.object({
    dueDateMandatory: z.boolean().optional(),
    minAdvancePercentage: z.string().optional(),
    posOrderCancellationMandatory: z.boolean().optional(),
  })
