import { z } from "zod";

export const storeAllocationSchema = z.object({
  allocations: z.array(
    z.object({
      storeName: z.string().min(1, { message: 'Store Name is required.' }),
      storeCode: z.string().optional(),
      startDate: z.date({ required_error: 'Start Date is required.' }),
      endDate: z.date().optional(),
      transferred: z.boolean().optional(),
    })
  ),
})