import { z } from "zod";

export const  PettyCashHeadSchema = z.object({
  pettycashCode: z.string().min(1, { message: '	No duplicate code and petty cash head.' }),
  pettycashHead: z.string().min(5,{message: 'No duplicate code and petty cash head.'}),
  modeOfOperation: z.string().optional(),
  limit: z.string().optional(),
  remarks: z.string().optional(),
  inActive: z.boolean().optional(),
  })