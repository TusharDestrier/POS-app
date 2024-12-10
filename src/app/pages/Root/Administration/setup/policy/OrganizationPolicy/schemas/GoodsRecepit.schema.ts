import { z } from 'zod';

export const goodsreceiptreturnSchema = z.object({
    excessGoodsReceiptTolerance: z.string().optional(),
    shortGoodsReceiptTolerance: z.string().optional(),
    allowReceiveDamagedGoods: z.boolean().optional(),
  })
